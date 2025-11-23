'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';

const BLOG_POSTS = [
    {
        id: 1,
        title: "5 Things to Check Before Buying Gold",
        excerpt: "Ensure you get the best value for your investment by checking purity, hallmarking, and making charges.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
        date: "Nov 15, 2023",
        category: "Buying Guide"
    },
    {
        id: 2,
        title: "How to Choose the Perfect Engagement Ring",
        excerpt: "A complete guide to understanding diamond cuts, clarity, and finding a style that matches her personality.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
        date: "Oct 28, 2023",
        category: "Diamonds"
    },
    {
        id: 3,
        title: "The Significance of Gold in Indian Weddings",
        excerpt: "Explore the cultural importance of gold jewellery in Indian traditions and why it's more than just an accessory.",
        image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2068&auto=format&fit=crop",
        date: "Oct 10, 2023",
        category: "Culture"
    },
    {
        id: 4,
        title: "Caring for Your Precious Jewellery",
        excerpt: "Simple tips and tricks to keep your gold and diamond jewellery shining like new for years to come.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop",
        date: "Sep 25, 2023",
        category: "Care Tips"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif text-black mb-4">Jewellery Guides & Stories</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">Discover the latest trends, buying guides, and stories from the world of fine jewellery.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {BLOG_POSTS.map((post) => (
                            <div key={post.id} className="group cursor-pointer flex flex-col h-full">
                                <Link href={`/blog/${post.id}`} className="block overflow-hidden rounded-xl mb-6 aspect-video relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium uppercase tracking-wider text-black">
                                        {post.category}
                                    </div>
                                </Link>
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>5 min read</span>
                                    </div>
                                    <Link href={`/blog/${post.id}`}>
                                        <h2 className="text-2xl font-serif text-black mb-3 group-hover:text-gold transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.id}`}>
                                        <Button variant="outline" className="!text-black !border-black hover:!bg-black hover:!text-white w-full sm:w-auto">
                                            Read Article
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
