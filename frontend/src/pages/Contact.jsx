import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Message successfully recorded! Thank you.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Submission failed. Please try again.');
      }
    } catch {
      setStatus('Server connection issue encountered.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold text-luxury-darkGreen mb-4">Connect With Concierge</h2>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">Reach out to plan tailor-made high-end premium tours across historic landmarks.</p>

        <div className="space-y-6 text-sm mb-8">
          <div className="flex items-center gap-4"><MapPin className="text-luxury-gold w-6 h-6"/> <p className="text-gray-700">MTDC Holiday Resort, Station Road, Aurangabad - 431001</p></div>
          <div className="flex items-center gap-4"><Mail className="text-luxury-gold w-6 h-6"/> <p className="text-gray-700">concierge@aurangabadtourism.gov.in</p></div>
          <div className="flex items-center gap-4"><Phone className="text-luxury-gold w-6 h-6"/> <p className="text-gray-700">+91 240 2343169 / 2343135</p></div>
        </div>

        {/* Embedded Interactive Map Canvas */}
        <div className="w-full h-64 rounded-xl overflow-hidden border border-luxury-gold/30 shadow">
          <iframe title="Aurangabad Map Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59993.58552140417!2d75.27878341144421!3d19.876165275825316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98151360b39f%3A0x1a5d5bcac229415d!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" className="w-full h-full border-0" allowFullScreen="" loading="lazy" />
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl border border-luxury-gold/10">
        <h3 className="text-2xl font-bold text-luxury-darkGreen mb-6">Inquiry & Feedback Desk</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 block mb-1">Full Name</label>
            <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-luxury-gold bg-luxury-beige/20" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 block mb-1">Email Address</label>
            <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full p-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-luxury-gold bg-luxury-beige/20" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 block mb-1">Subject</label>
            <input type="text" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full p-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-luxury-gold bg-luxury-beige/20" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 block mb-1">Detailed Message</label>
            <textarea rows="4" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full p-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-luxury-gold bg-luxury-beige/20" />
          </div>
          <button type="submit" className="w-full bg-luxury-darkGreen text-luxury-white py-3 rounded hover:bg-luxury-gold hover:text-luxury-darkGreen font-bold transition uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <Send className="w-4 h-4"/> Dispatch Message
          </button>
        </form>
        {status && <p className="mt-4 text-xs font-semibold text-center text-luxury-darkGreen">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;