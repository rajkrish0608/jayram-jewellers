'use client';

import React from 'react';
import { Button } from './ui/Button';

export const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent successfully!');
    };

    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-gold text-lg uppercase tracking-widest mb-2">Contact Us</h2>
                        <h3 className="text-4xl md:text-5xl font-serif mb-8">Visit Our Showroom</h3>

                        <div className="space-y-8 mb-10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-gold/20 p-3 rounded-full text-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-1">Address</h4>
                                    <p className="text-gray-400">Gola Road, Garh Nokha,<br />Sasaram, Rohatas, Bihar</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-gold/20 p-3 rounded-full text-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-1">Phone</h4>
                                    <p className="text-gray-400">+91 93418 47997</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-gold/20 p-3 rounded-full text-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-1">Email</h4>
                                    <p className="text-gray-400">bittukumar93418@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder */}
                        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792551881463!2d72.8776559149011!3d19.07609055693091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-serif mb-6">Send us a Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="+91 98765 43210" required />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="I'm interested in..." required />
                                </div>
                                <Button variant="primary" className="w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
