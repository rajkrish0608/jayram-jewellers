import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg text-gray-600">
                <p className="mb-4">Last updated: November 23, 2025</p>
                <p className="mb-4">
                    At JAYRAM Jewellers, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Data</h2>
                <p className="mb-4">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:bittukumar93418@gmail.com" className="text-gold hover:underline">bittukumar93418@gmail.com</a>
                </p>
            </div>
        </div>
    );
}
