export interface BusinessSettings {
  businessName: string;
  address: string;
  mobile: string;
  telephone: string;
  email: string;
  whatsappUrl: string;
  openingHours: {
    weekdays: string;
    friday: string;
    note: string;
  };
  announcement: {
    enabled: boolean;
    text: string;
    badge: string;
  };
}

export interface EnquirySubmission {
  id?: string;
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
  website_url_hp?: string; // Honeypot field
  createdAt?: string;
  status?: 'New' | 'Contacted' | 'In Progress' | 'Completed';
  notes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleAr?: string;
  category: 'typing' | 'business-setup' | 'pro' | 'government';
  tagline: string;
  taglineAr?: string;
  description: string;
  descriptionAr?: string;
  deliverables: string[];
  deliverablesAr?: string[];
  requiredDocuments: string[];
  requiredDocumentsAr?: string[];
  authority: string;
  authorityAr?: string;
  estimatedTime?: string;
  estimatedTimeAr?: string;
}

export interface FaqItem {
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
  category: 'general' | 'visas' | 'business' | 'documents';
}
