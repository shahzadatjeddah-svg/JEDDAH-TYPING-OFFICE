import React, { useState, useEffect } from 'react';
import { X, Lock, Check, AlertCircle, RefreshCw, MessageSquare, Clock, Megaphone } from 'lucide-react';
import { BusinessSettings, EnquirySubmission } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: BusinessSettings;
  onSettingsUpdated: (newSettings: BusinessSettings) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSettingsUpdated,
}) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'enquiries' | 'settings'>('enquiries');
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);

  // Editable settings form
  const [editableSettings, setEditableSettings] = useState<BusinessSettings>(settings);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  useEffect(() => {
    setEditableSettings(settings);
  }, [settings]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'jeddah2026' || passkey === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
      fetchEnquiries();
    } else {
      setAuthError('Incorrect office passkey. Please enter the authorized owner password (jeddah2026).');
    }
  };

  const fetchEnquiries = async () => {
    setLoadingEnquiries(true);
    try {
      const res = await fetch('/api/enquiries', {
        headers: { 'x-admin-key': 'jeddah2026' }
      });
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingEnquiries(false);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus('saving');
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': 'jeddah2026'
        },
        body: JSON.stringify(editableSettings),
      });

      if (res.ok) {
        setSaveStatus('saved');
        onSettingsUpdated(editableSettings);
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      setSaveStatus('error');
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: 'New' | 'Contacted' | 'In Progress' | 'Completed') => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': 'jeddah2026'
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setEnquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 rounded-t-xl">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#0F1E36]" />
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Office Management Portal
              </h3>
              <p className="text-[11px] text-slate-500">
                Jeddah Typing Office internal controls & customer inquiries
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="p-8 max-w-md mx-auto w-full space-y-4 my-auto">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-[#0F1E36]">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Owner Access Verification</h4>
              <p className="text-xs text-slate-500">
                Please enter the management passkey to view incoming enquiries and edit office announcements.
              </p>
            </div>

            {authError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Management Passkey
              </label>
              <input
                type="password"
                required
                placeholder="Enter passkey (e.g. jeddah2026)"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36]"
              />
              <p className="text-[11px] text-slate-400 mt-1">Hint for preview testing: <span className="font-mono text-slate-600">jeddah2026</span></p>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#0F1E36] text-white text-xs font-semibold rounded hover:bg-[#1E3A8A] transition-colors"
            >
              Sign In to Management
            </button>
          </form>
        ) : (
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 px-6 gap-6 bg-white">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`py-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
                  activeTab === 'enquiries'
                    ? 'border-[#0F1E36] text-[#0F1E36]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Customer Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`py-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
                  activeTab === 'settings'
                    ? 'border-[#0F1E36] text-[#0F1E36]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Opening Hours & Announcements</span>
              </button>
            </div>

            {/* Tab 1: Enquiries */}
            {activeTab === 'enquiries' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-xs text-slate-500">
                    Live database of verified enquiries submitted via the website.
                  </span>
                  <button
                    onClick={fetchEnquiries}
                    disabled={loadingEnquiries}
                    className="flex items-center gap-1 text-xs text-[#0F1E36] font-medium hover:underline"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                </div>

                {enquiries.length === 0 ? (
                  <div className="text-center py-12 border border-dashed border-slate-300 rounded-lg text-xs text-slate-500">
                    No enquiries recorded yet. Test submissions from the contact form will appear here in real-time.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {enquiries.map((enq) => (
                      <div
                        key={enq.id}
                        className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2 text-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                              {enq.id}
                            </span>
                            <span className="font-semibold text-slate-900 text-sm">
                              {enq.fullName}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-400">
                              {enq.createdAt ? new Date(enq.createdAt).toLocaleString() : ''}
                            </span>
                            <select
                              value={enq.status || 'New'}
                              onChange={(e) => handleUpdateStatus(enq.id!, e.target.value as any)}
                              className="text-[11px] font-medium rounded border border-slate-300 bg-white px-2 py-1"
                            >
                              <option value="New">Status: New</option>
                              <option value="Contacted">Status: Contacted</option>
                              <option value="In Progress">Status: In Progress</option>
                              <option value="Completed">Status: Completed</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600 pt-1">
                          <div>
                            <span className="text-slate-400">Phone: </span>
                            <a href={`tel:${enq.phone}`} className="font-medium text-[#0F1E36] hover:underline">
                              {enq.phone}
                            </a>
                          </div>
                          <div>
                            <span className="text-slate-400">Email: </span>
                            <a href={`mailto:${enq.email}`} className="font-medium text-slate-800 hover:underline">
                              {enq.email}
                            </a>
                          </div>
                          <div>
                            <span className="text-slate-400">Service: </span>
                            <span className="font-medium text-slate-900">{enq.serviceRequired}</span>
                          </div>
                        </div>

                        <div className="p-2.5 bg-white rounded border border-slate-200 text-slate-700 leading-relaxed">
                          {enq.message}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Settings */}
            {activeTab === 'settings' && (
              <form onSubmit={handleSaveSettings} className="flex-1 overflow-y-auto p-6 space-y-5 text-xs text-slate-800">
                {saveStatus === 'saved' && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Office settings updated successfully and saved to backend!</span>
                  </div>
                )}

                {/* Announcement Banner */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Megaphone className="w-4 h-4 text-[#C5A059]" />
                    <span>Top Announcement Banner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="announcement_enabled"
                      checked={editableSettings.announcement.enabled}
                      onChange={(e) =>
                        setEditableSettings({
                          ...editableSettings,
                          announcement: { ...editableSettings.announcement, enabled: e.target.checked }
                        })
                      }
                      className="rounded border-slate-300 text-[#0F1E36]"
                    />
                    <label htmlFor="announcement_enabled" className="font-medium">
                      Show Announcement Bar on Website
                    </label>
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1 font-medium">Banner Text</label>
                    <input
                      type="text"
                      value={editableSettings.announcement.text}
                      onChange={(e) =>
                        setEditableSettings({
                          ...editableSettings,
                          announcement: { ...editableSettings.announcement, text: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded bg-white"
                    />
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Clock className="w-4 h-4 text-[#0F1E36]" />
                    <span>Configurable Operating Hours</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 mb-1 font-medium">Saturday to Thursday</label>
                      <input
                        type="text"
                        value={editableSettings.openingHours.weekdays}
                        onChange={(e) =>
                          setEditableSettings({
                            ...editableSettings,
                            openingHours: { ...editableSettings.openingHours, weekdays: e.target.value }
                          })
                        }
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 mb-1 font-medium">Friday Timing</label>
                      <input
                        type="text"
                        value={editableSettings.openingHours.friday}
                        onChange={(e) =>
                          setEditableSettings({
                            ...editableSettings,
                            openingHours: { ...editableSettings.openingHours, friday: e.target.value }
                          })
                        }
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1 font-medium">Holiday / Visitor Note</label>
                    <input
                      type="text"
                      value={editableSettings.openingHours.note}
                      onChange={(e) =>
                        setEditableSettings({
                          ...editableSettings,
                          openingHours: { ...editableSettings.openingHours, note: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={saveStatus === 'saving'}
                    className="px-5 py-2.5 bg-[#0F1E36] text-white font-semibold rounded hover:bg-[#1E3A8A] transition-colors"
                  >
                    {saveStatus === 'saving' ? 'Saving to Server...' : 'Save Configuration'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
