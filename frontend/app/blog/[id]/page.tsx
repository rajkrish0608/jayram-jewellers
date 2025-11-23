'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';

const BLOG_POSTS = [
    {
        id: '1',
        title: "5 Things to Check Before Buying Gold",
        titleHindi: "सोना खरीदने से पहले 5 बातें जो आपको जाननी चाहिए",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
        date: "Nov 15, 2023",
        category: "Buying Guide",
        content: `
      <p>Buying gold is not just about purchasing a piece of jewellery; it's an investment. Whether you are buying for a wedding, a festival, or just as a saving, here are 5 things you must check:</p>
      <h3>1. Purity (Karats)</h3>
      <p>Gold purity is measured in Karats (K). 24K is pure gold (99.9%), but it's too soft for jewellery. 22K (91.6%) is standard for ornaments.</p>
      <h3>2. Hallmarking</h3>
      <p>Always ensure the jewellery is BIS Hallmarked. It guarantees the purity of gold.</p>
      <h3>3. Making Charges</h3>
      <p>Making charges vary by design. Intricate designs have higher making charges than simple ones.</p>
      <h3>4. Weight</h3>
      <p>Check the weight of the gold separately from any stones or gems studded in it.</p>
      <h3>5. Buyback Policy</h3>
      <p>Ask about the buyback policy. Reputed jewellers like Jayram Jewellers offer lifetime buyback on their products.</p>
    `,
        contentHindi: `
      <p>सोना खरीदना सिर्फ आभूषण खरीदना नहीं है; यह एक निवेश है। चाहे आप शादी, त्यौहार, या बचत के लिए खरीद रहे हों, यहाँ 5 बातें हैं जो आपको जरूर चेक करनी चाहिए:</p>
      <h3>1. शुद्धता (कैरेट)</h3>
      <p>सोने की शुद्धता कैरेट (K) में मापी जाती है। 24K शुद्ध सोना (99.9%) होता है, लेकिन यह आभूषणों के लिए बहुत नरम होता है। 22K (91.6%) गहनों के लिए मानक है।</p>
      <h3>2. हॉलमार्किंग</h3>
      <p>हमेशा सुनिश्चित करें कि आभूषण BIS हॉलमार्क वाला हो। यह सोने की शुद्धता की गारंटी देता है।</p>
      <h3>3. मेकिंग चार्ज (गढ़ाई)</h3>
      <p>मेकिंग चार्ज डिजाइन के अनुसार अलग-अलग होते हैं। जटिल डिजाइनों में सरल डिजाइनों की तुलना में अधिक मेकिंग चार्ज होते हैं।</p>
      <h3>4. वजन</h3>
      <p>सोने का वजन उसमें जड़े किसी भी पत्थर या रत्न से अलग चेक करें।</p>
      <h3>5. बायबैक पॉलिसी (वापसी नीति)</h3>
      <p>बायबैक पॉलिसी के बारे में पूछें। जयराम ज्वैलर्स जैसे प्रतिष्ठित ज्वैलर्स अपने उत्पादों पर लाइफटाइम बायबैक की पेशकश करते हैं।</p>
    `
    },
    {
        id: '2',
        title: "How to Choose the Perfect Engagement Ring",
        titleHindi: "सही सगाई की अंगूठी कैसे चुनें",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
        date: "Oct 28, 2023",
        category: "Diamonds",
        content: `
      <p>Choosing an engagement ring is a special moment. Here is a guide to help you find the perfect one:</p>
      <h3>1. Know the 4Cs</h3>
      <p>Cut, Color, Clarity, and Carat. These determine the quality and price of the diamond.</p>
      <h3>2. Choose the Metal</h3>
      <p>Decide between Yellow Gold, White Gold, Rose Gold, or Platinum.</p>
      <h3>3. Find the Style</h3>
      <p>Does she like Solitaire, Halo, or Vintage styles? Observe her taste.</p>
    `,
        contentHindi: `
      <p>सगाई की अंगूठी चुनना एक खास पल होता है। यहाँ एक गाइड है जो आपको सही अंगूठी खोजने में मदद करेगी:</p>
      <h3>1. 4Cs को जानें</h3>
      <p>कट, कलर, क्लैरिटी और कैरेट। ये हीरे की गुणवत्ता और कीमत निर्धारित करते हैं।</p>
      <h3>2. धातु चुनें</h3>
      <p>पीला सोना, सफेद सोना, रोज गोल्ड या प्लेटिनम के बीच निर्णय लें।</p>
      <h3>3. स्टाइल खोजें</h3>
      <p>क्या उसे सॉलिटेयर, हेलो या विंटेज स्टाइल पसंद है? उसकी पसंद पर ध्यान दें।</p>
    `
    },
    {
        id: '3',
        title: "The Significance of Gold in Indian Weddings",
        titleHindi: "भारतीय शादियों में सोने का महत्व",
        image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2068&auto=format&fit=crop",
        date: "Oct 10, 2023",
        category: "Culture",
        content: `
      <p>Gold is not just a metal in India; it is Lakshmi, the goddess of wealth and prosperity. In Indian weddings, gold plays a central role.</p>
      <h3>1. Stridhan</h3>
      <p>Gold given to the bride is considered her 'Stridhan' (woman's wealth), which provides her financial security.</p>
      <h3>2. Auspiciousness</h3>
      <p>Gold is believed to bring good luck and ward off evil spirits. It is an essential part of the bridal trousseau.</p>
      <h3>3. Heirloom</h3>
      <p>Jewellery is often passed down from generation to generation, carrying family legacy and blessings.</p>
    `,
        contentHindi: `
      <p>भारत में सोना सिर्फ एक धातु नहीं है; यह लक्ष्मी है, धन और समृद्धि की देवी। भारतीय शादियों में सोने की केंद्रीय भूमिका होती है।</p>
      <h3>1. स्त्रीधन</h3>
      <p>दुल्हन को दिया गया सोना उसका 'स्त्रीधन' माना जाता है, जो उसे वित्तीय सुरक्षा प्रदान करता है।</p>
      <h3>2. शुभता</h3>
      <p>माना जाता है कि सोना सौभाग्य लाता है और बुरी आत्माओं को दूर रखता है। यह दुल्हन के साजो-सामान का एक अनिवार्य हिस्सा है।</p>
      <h3>3. विरासत</h3>
      <p>आभूषण अक्सर पीढ़ी दर पीढ़ी आगे बढ़ाए जाते हैं, जो पारिवारिक विरासत और आशीर्वाद को साथ ले जाते हैं।</p>
    `
    },
    {
        id: '4',
        title: "Caring for Your Precious Jewellery",
        titleHindi: "अपने कीमती आभूषणों की देखभाल",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop",
        date: "Sep 25, 2023",
        category: "Care Tips",
        content: `
      <p>Your jewellery deserves the best care to keep shining forever. Here are some simple tips:</p>
      <h3>1. Keep it Dry</h3>
      <p>Avoid wearing jewellery while swimming or bathing. Chemicals can damage the metal and stones.</p>
      <h3>2. Store Properly</h3>
      <p>Store each piece separately in a soft cloth pouch to prevent scratching.</p>
      <h3>3. Clean Regularly</h3>
      <p>Use a soft brush and mild soapy water to clean gold and diamond jewellery gently.</p>
      <h3>4. Professional Check-up</h3>
      <p>Visit Jayram Jewellers once a year for a professional cleaning and prong check.</p>
    `,
        contentHindi: `
      <p>आपके आभूषणों को हमेशा चमकते रहने के लिए बेहतरीन देखभाल की आवश्यकता होती है। यहाँ कुछ सरल सुझाव दिए गए हैं:</p>
      <h3>1. इसे सूखा रखें</h3>
      <p>तैरते या नहाते समय आभूषण पहनने से बचें। रसायन धातु और पत्थरों को नुकसान पहुंचा सकते हैं।</p>
      <h3>2. ठीक से स्टोर करें</h3>
      <p>खरोंच से बचने के लिए प्रत्येक टुकड़े को एक नरम कपड़े की थैली में अलग से स्टोर करें।</p>
      <h3>3. नियमित रूप से साफ करें</h3>
      <p>सोने और हीरे के आभूषणों को धीरे से साफ करने के लिए एक नरम ब्रश और हल्के साबुन के पानी का उपयोग करें।</p>
      <h3>4. पेशेवर जांच</h3>
      <p>पेशेवर सफाई और प्रोंग चेक के लिए साल में एक बार जयराम ज्वैलर्स पर आएं।</p>
    `
    }
];

export default function BlogPostPage() {
    const params = useParams();
    const [language, setLanguage] = useState<'en' | 'hi'>('en');

    // Fallback to first post if ID not found (for demo)
    const post = BLOG_POSTS.find(p => p.id === params.id) || BLOG_POSTS[0];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20">
                <article className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-8 text-center">
                        <span className="text-gold text-sm uppercase tracking-widest font-medium">{post.category}</span>
                        <h1 className="text-3xl md:text-5xl font-serif text-black mt-3 mb-6 leading-tight">
                            {language === 'en' ? post.title : post.titleHindi}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>By Jayram Jewellers</span>
                        </div>
                    </div>

                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-10 shadow-lg">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex justify-end mb-6">
                        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${language === 'en' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => setLanguage('hi')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${language === 'hi' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}
                            >
                                हिंदी
                            </button>
                        </div>
                    </div>

                    <div
                        className="prose prose-lg prose-headings:font-serif prose-headings:text-black prose-p:text-gray-600 prose-a:text-gold hover:prose-a:text-gold-light max-w-none"
                        dangerouslySetInnerHTML={{ __html: language === 'en' ? post.content : post.contentHindi }}
                    />

                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                        <Link href="/blog">
                            <Button variant="outline" className="!text-gray-600 !border-gray-300 hover:!bg-gray-50">
                                ← Back to Blog
                            </Button>
                        </Link>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
