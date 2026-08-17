'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  User,
  FileText,
  Lock,
  Linkedin,
  Github,
  Globe,
  Download,
  Calendar as CalendarIcon,
  Heart,
  CheckCircle2,
  X,
  MessageCircle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '11:45 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM',
];

// Helper to generate next 10 days for calendar picker
const getNextDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dateStr: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      fullDate: d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    });
  }
  return days;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // WhatsApp Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingStep, setBookingStep] = useState<1 | 2>(1);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    projectNote: '',
  });

  const availableDays = getNextDays();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Open Modal & Reset selection
  const openBookingModal = () => {
    setSelectedDay(availableDays[0].fullDate);
    setSelectedTime(timeSlots[1]);
    setBookingStep(1);
    setIsModalOpen(true);
  };

  // Send WhatsApp Booking Message
  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '919876543210'; // Replace with user's preferred WhatsApp number
    
    const messageText = 
`Hello Dinesh! 👋
I would like to schedule a call with you.

📅 Date: ${selectedDay}
⏰ Time: ${selectedTime}
👤 Name: ${bookingForm.name}
📱 Phone: ${bookingForm.phone}
📝 Project Topic: ${bookingForm.projectNote || 'Web Application Development'}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setBookingForm({ name: '', phone: '', projectNote: '' });
  };

  return (
    <section id="contact" className="relative py-16 bg-[#FAFAFD] border-t border-slate-100 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          
          {/* LEFT COLUMN - Header & 4 Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-6">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD8C2] bg-[#FFF5EF]">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5500]">
                Let&apos;s Connect
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Have a <span className="text-[#FF5500]">Project</span> <br className="hidden sm:inline" />
                in Mind?
              </h2>
              <div className="w-16 h-1 bg-[#FF5500] rounded-full mt-3" />
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              I&apos;m always excited to discuss new ideas, creative projects, and collaboration opportunities. Let&apos;s create something extraordinary together!
            </p>

            {/* 4 Stacked Contact Cards */}
            <div className="w-full space-y-3.5 pt-2">
              
              {/* Card 1: Email */}
              <a
                href="mailto:hello@dinesh.dev"
                className="group w-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-md hover:border-[#FF5500]/40 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5EF] text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-[#FF5500] transition-colors duration-300">
                      hello@dinesh.dev
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#FF5500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              {/* Card 2: Phone */}
              <a
                href="tel:+911234567890"
                className="group w-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-md hover:border-[#FF5500]/40 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5EF] text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-[#FF5500] transition-colors duration-300">
                      +91 12345 67890
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#FF5500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              {/* Card 3: Location */}
              <div className="group w-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-md hover:border-[#FF5500]/40 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5EF] text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-[#FF5500] transition-colors duration-300">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#FF5500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              {/* Card 4: Availability */}
              <div className="group w-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between transition-all duration-300 hover:shadow-md hover:border-[#FF5500]/40 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5EF] text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Availability</h4>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-[#FF5500] transition-colors duration-300">
                      Mon - Sat (9AM - 8PM)
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#FF5500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN - Send Me a Message Form */}
          <div className="lg:col-span-7 relative">
            
            {/* Solid Orange Background Circle Shape */}
            <div className="absolute -bottom-6 -right-6 w-[360px] h-[360px] rounded-full bg-[#FF5500] pointer-events-none z-0 hidden sm:block opacity-90" />

            {/* Main Form Glass/White Container */}
            <div className="relative bg-white rounded-[32px] p-6 sm:p-9 border border-slate-100 shadow-2xl z-10">
              
              {/* Form Header */}
              <div className="mb-6 flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF5EF] text-[#FF5500] mb-3">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Send Me a Message
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  Fill out the form and I&apos;ll get back to you soon.
                </p>
              </div>

              {/* Success Banner */}
              {submitted ? (
                <div className="bg-[#FFF5EF] border border-[#FFD8C2] rounded-2xl p-6 text-center text-[#FF5500] flex flex-col items-center gap-2">
                  <CheckCircle2 className="w-10 h-10" />
                  <h4 className="text-lg font-extrabold">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Thank you for reaching out, Dinesh will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-3 pl-4 pr-10 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#FF5500] focus:bg-white focus:outline-none transition-all"
                        />
                        <User className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="w-full rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-3 pl-4 pr-10 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#FF5500] focus:bg-white focus:outline-none transition-all"
                        />
                        <Mail className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?"
                        className="w-full rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-3 pl-4 pr-10 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#FF5500] focus:bg-white focus:outline-none transition-all"
                      />
                      <FileText className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-3 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#FF5500] focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF6600] py-3.5 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:bg-[#E04B00] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-semibold flex items-center justify-center gap-1.5 pt-2">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Your information is safe with me. I don&apos;t share your data.</span>
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* Quick Connect Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="text-left">
            <h4 className="text-sm font-extrabold text-slate-900">Quick Connect</h4>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Reach me on my favorite platforms</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2] text-white text-xs font-extrabold shadow-sm transition-all hover:scale-105"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-extrabold shadow-sm transition-all hover:scale-105"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="#home"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5500] text-white text-xs font-extrabold shadow-sm transition-all hover:scale-105"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Portfolio</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5500] text-white text-xs font-extrabold shadow-sm transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Orange "Prefer a quick call?" Call Banner with Working Modal Trigger */}
        <div className="bg-gradient-to-r from-[#FF5500] to-[#FF6600] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-md">
              <CalendarIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Prefer a quick call?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-medium mt-0.5">
                Let&apos;s schedule a call and discuss your project.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openBookingModal}
            className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-white px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white transition-all duration-200 hover:bg-white hover:text-[#FF5500] hover:scale-105 active:scale-95 whitespace-nowrap shadow-md cursor-pointer"
          >
            <CalendarIcon className="h-4 w-4" />
            <span>Schedule a Call</span>
          </button>
        </div>

      </div>

      {/* INTERACTIVE CALENDAR BOOKING MODAL (Sends via WhatsApp) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-900"
            >
              {/* Close X Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-[#FF5500] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-6 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF5EF] text-[#FF5500]">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Schedule a 1-on-1 Call
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Book a slot &amp; send details directly to WhatsApp
                  </p>
                </div>
              </div>

              {/* STEP 1: Select Date & Time */}
              {bookingStep === 1 && (
                <div className="space-y-5 text-left">
                  
                  {/* Calendar Date Picker */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5">
                      1. Select Available Date
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                      {availableDays.map((d) => {
                        const isSelected = selectedDay === d.fullDate;
                        return (
                          <button
                            key={d.fullDate}
                            type="button"
                            onClick={() => setSelectedDay(d.fullDate)}
                            className={`flex flex-col items-center justify-center min-w-[72px] p-3 rounded-2xl border text-center transition-all duration-200 ${
                              isSelected
                                ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-md shadow-[#FF5500]/30 scale-105'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#FF5500]/50'
                            }`}
                          >
                            <span className="text-[10px] font-extrabold uppercase opacity-80">
                              {d.dayName}
                            </span>
                            <span className="text-xs font-black mt-0.5">
                              {d.dateStr}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slot Picker */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5">
                      2. Select Time Slot (IST)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 px-3 rounded-xl border text-xs font-black transition-all ${
                              isSelected
                                ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#FF5500]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Summary Pill */}
                  <div className="p-3.5 rounded-2xl bg-[#FFF5EF] border border-[#FFD8C2] text-xs font-bold text-[#FF5500] flex items-center justify-between">
                    <span>Selected: <strong>{selectedDay}</strong> at <strong>{selectedTime}</strong></span>
                    <Sparkles className="w-4 h-4" />
                  </div>

                  {/* Next Step Button */}
                  <button
                    type="button"
                    onClick={() => setBookingStep(2)}
                    className="w-full py-3.5 rounded-2xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Continue to Your Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>
              )}

              {/* STEP 2: Fill Details & Send via WhatsApp */}
              {bookingStep === 2 && (
                <form onSubmit={handleWhatsAppBooking} className="space-y-4 text-left">
                  
                  {/* Selected Time Badge */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 text-xs font-extrabold text-slate-700 mb-2">
                    <span>📅 {selectedDay} @ {selectedTime}</span>
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="text-[#FF5500] hover:underline text-[11px]"
                    >
                      Change Date/Time
                    </button>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="e.g. Dinesh Kumar"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm font-medium focus:border-[#FF5500] focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Phone / WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm font-medium focus:border-[#FF5500] focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Project Note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Project Topic / Details (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={bookingForm.projectNote}
                      onChange={(e) => setBookingForm({ ...bookingForm, projectNote: e.target.value })}
                      placeholder="Brief note about your website or app project..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm font-medium focus:border-[#FF5500] focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  {/* Send via WhatsApp Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE57] text-white font-extrabold text-sm shadow-lg shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>Confirm &amp; Send to WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    Directly opens WhatsApp with pre-filled booking details.
                  </p>

                </form>
              )}

            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/dinesh-logo.png"
            alt="Dinesh Logo"
            width={180}
            height={45}
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Center Copyright */}
        <p className="text-xs text-slate-500 font-semibold flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Dinesh | Full Stack Developer | Built with{' '}
          <Heart className="w-3.5 h-3.5 text-[#FF5500] fill-[#FF5500] inline" />
        </p>

        {/* Right Social Circle Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF5500] hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF5500] hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF5500] hover:text-white transition-colors"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </section>
  );
}
