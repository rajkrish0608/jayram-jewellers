import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

const ARTICLES = [
    {
        id: 1,
        title: "5 Things to Check Before Buying Gold",
        excerpt: "Ensure you get the best value for your investment by checking purity, hallmarking, and making charges.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
        date: "Nov 15, 2023"
    },
    {
        id: 2,
        title: "How to Choose the Perfect Engagement Ring",
        excerpt: "A complete guide to understanding diamond cuts, clarity, and finding a style that matches her personality.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
        date: "Oct 28, 2023"
    },
    {
        id: 3,
        title: "The Significance of Gold in Indian Weddings",
        excerpt: "Explore the cultural importance of gold jewellery in Indian traditions and why it's more than just an accessory.",
        image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2068&auto=format&fit=crop",
        date: "Oct 10, 2023"
    },
    {
        id: 4,
        title: "Caring for Your Precious Jewellery",
        excerpt: "Simple tips and tricks to keep your gold and diamond jewellery shining like new for years to come.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop",
        date: "Sep 25, 2023"
    }
];

export const BlogPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-gold text-lg uppercase tracking-widest mb-2">Our Blog</h2>
                    <h3 className="text-4xl font-serif text-black">Jewellery Guides & Tips</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {ARTICLES.map((article) => (
                        <div key={article.id} className="group cursor-pointer flex flex-col h-full">
                            <Link href={`/blog/${article.id}`} className="block">
                                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${article.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                </div>
                            </Link>
                            <p className="text-gold text-sm mb-2">{article.date}</p>
                            <Link href={`/blog/${article.id}`}>
                                <h4 className="text-xl font-serif text-black mb-3 group-hover:text-gold transition-colors line-clamp-2">{article.title}</h4>
                            </Link>
                            <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-1">{article.excerpt}</p>
                            <Link href={`/blog/${article.id}`}>
                                <Button variant="outline" className="!text-black !border-black hover:!bg-black hover:!text-white w-full">Read More</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
