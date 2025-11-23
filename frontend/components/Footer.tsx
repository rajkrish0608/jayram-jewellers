import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-serif text-gold mb-6">JAYRAM JEWELLERS</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Crafting timeless elegance since 1990. We bring you the finest collection of gold, diamond, and silver jewellery.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons */}
                            {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                                <a key={social} href="#" className="text-gray-400 hover:text-gold transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692 1.226 0 1.77.057 1.77.057v1.943z" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['About Us', 'Our Collections', 'Gold Rate', 'Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-gold transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-serif text-white mb-6">Customer Service</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['Privacy Policy', 'Terms & Conditions', 'Return Policy', 'Shipping Info', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-gold transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-serif text-white mb-6">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates and exclusive offers.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-gray-900 border border-gray-800 rounded px-4 py-2 text-white text-sm focus:border-gold focus:outline-none"
                            />
                            <button className="bg-gold text-black py-2 rounded font-medium hover:bg-gold-light transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Jayram Jewellers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
