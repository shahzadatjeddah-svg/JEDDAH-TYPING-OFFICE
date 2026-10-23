import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Ensure data folder exists for persistence
const DATA_DIR = path.resolve(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const SETTINGS_FILE = path.resolve(DATA_DIR, 'settings.json');
const ENQUIRIES_FILE = path.resolve(DATA_DIR, 'enquiries.json');

// Default initial settings
const defaultSettings = {
  businessName: 'Jeddah Typing Office',
  address: 'Office No. 3, same building as Panoor Restaurant, opposite Lulu Hypermarket, Al Rashidiya 3, Ajman, UAE',
  mobile: '0522709196',
  telephone: '06 747 3013',
  email: 'jeddahuae@gmail.com',
  whatsappUrl: 'https://wa.me/971522709196',
  openingHours: {
    weekdays: 'Saturday – Thursday: 8:00 AM – 9:30 PM',
    friday: 'Friday: 4:00 PM – 9:30 PM',
    note: 'Open on most public holidays. Walk-ins welcomed during all operating hours.'
  },
  announcement: {
    enabled: true,
    text: 'Office Open: Direct assistance for UAE Residence Visas, Emirates ID typing, and Ajman DED Business Setup paperwork.',
    badge: 'Notice'
  }
};

// Initialize settings file if not existing
if (!fs.existsSync(SETTINGS_FILE)) {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2), 'utf-8');
}

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();

// Middleware
app.use(express.json({ limit: '100kb' }));

// Helper: Rate limiter (max 5 requests per 10 minutes per IP)
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = (rateLimitMap.get(ip) || []).filter(ts => now - ts < windowMs);
  if (timestamps.length >= maxRequests) {
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
};

// --- API ROUTES ---

// GET /api/settings - Fetch current live settings
app.get('/api/settings', (req, res) => {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const data = fs.readFileSync(SETTINGS_FILE, 'utf-8');
      return res.json(JSON.parse(data));
    }
    return res.json(defaultSettings);
  } catch (error) {
    console.error('Error reading settings:', error);
    return res.json(defaultSettings);
  }
});

// PUT /api/settings - Update settings (Owner management)
app.put('/api/settings', (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key'] || req.query.adminKey;
    // Simple secure key check or open for local applet testing
    if (adminKey !== 'jeddah2026' && adminKey !== 'admin') {
      return res.status(401).json({ error: 'Unauthorized: Invalid admin credentials' });
    }

    const current = fs.existsSync(SETTINGS_FILE)
      ? JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8'))
      : defaultSettings;

    const updated = {
      ...current,
      ...req.body,
    };

    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(updated, null, 2), 'utf-8');
    return res.json({ success: true, settings: updated });
  } catch (error) {
    console.error('Error saving settings:', error);
    return res.status(500).json({ error: 'Failed to update settings' });
  }
});

// POST /api/enquiries - Submit a new enquiry with spam protection & validation
app.post('/api/enquiries', (req, res) => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || '127.0.0.1').split(',')[0].trim();

    // 1. Honeypot check (hidden field to trap automated spambots)
    if (req.body.website_url_hp || req.body.security_trap) {
      // Silently pretend success to fool automated bots without recording anything
      return res.json({
        success: true,
        referenceId: `JTO-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        message: 'Your enquiry has been successfully logged.'
      });
    }

    // 2. Rate limiting check
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        error: 'Too many submissions from this connection. Please wait a few minutes or call us directly at 0522709196.'
      });
    }

    const { fullName, phone, email, serviceRequired, message } = req.body;

    // 3. Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide a valid full name (minimum 2 characters).' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return res.status(400).json({ error: 'Please provide a valid contact phone number so our team can reach you.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!serviceRequired || typeof serviceRequired !== 'string') {
      return res.status(400).json({ error: 'Please select the service you require.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Please provide details in the message field (at least 10 characters).' });
    }

    // 4. Safe recording
    const referenceId = `JTO-${Date.now().toString(36).toUpperCase()}`;
    const newEnquiry = {
      id: referenceId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      serviceRequired: serviceRequired.trim(),
      message: message.trim(),
      ip: clientIp,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    let enquiries: any[] = [];
    if (fs.existsSync(ENQUIRIES_FILE)) {
      try {
        enquiries = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
      } catch (e) {
        enquiries = [];
      }
    }
    enquiries.unshift(newEnquiry);
    // Keep last 200 enquiries
    if (enquiries.length > 200) enquiries = enquiries.slice(0, 200);

    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');

    console.log(`[Jeddah Typing Office] New enquiry received: ${referenceId} from ${newEnquiry.fullName} (${newEnquiry.phone}) for ${newEnquiry.serviceRequired}`);

    return res.status(201).json({
      success: true,
      referenceId,
      message: 'Your enquiry has been successfully delivered to Jeddah Typing Office. Our team will review your requirements and contact you promptly via phone or WhatsApp.'
    });
  } catch (error) {
    console.error('Error handling enquiry submission:', error);
    return res.status(500).json({ error: 'An unexpected error occurred while processing your request. Please call us directly at 0522709196.' });
  }
});

// GET /api/enquiries - View submitted enquiries (For office admin panel)
app.get('/api/enquiries', (req, res) => {
  const adminKey = req.headers['x-admin-key'] || req.query.adminKey;
  if (adminKey !== 'jeddah2026' && adminKey !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized: Invalid admin credentials' });
  }

  try {
    if (fs.existsSync(ENQUIRIES_FILE)) {
      const data = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
      return res.json(JSON.parse(data));
    }
    return res.json([]);
  } catch (e) {
    return res.json([]);
  }
});

// PATCH /api/enquiries/:id - Update status (New, Contacted, In Progress, Completed)
app.patch('/api/enquiries/:id', (req, res) => {
  const adminKey = req.headers['x-admin-key'] || req.query.adminKey;
  if (adminKey !== 'jeddah2026' && adminKey !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.params;
  const { status, notes } = req.body;

  try {
    if (fs.existsSync(ENQUIRIES_FILE)) {
      const enquiries = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
      const idx = enquiries.findIndex((e: any) => e.id === id);
      if (idx !== -1) {
        if (status) enquiries[idx].status = status;
        if (notes !== undefined) enquiries[idx].notes = notes;
        fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
        return res.json({ success: true, enquiry: enquiries[idx] });
      }
    }
    return res.status(404).json({ error: 'Enquiry not found' });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to update enquiry' });
  }
});

// Boot dev Vite or static prod
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Jeddah Typing Office server running on http://localhost:${PORT}`);
  });
}

startServer();
