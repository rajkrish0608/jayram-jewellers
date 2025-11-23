import React from 'react';
import { Button } from './ui/Button';

export interface Product {
    id: string;
    name: string;
    type: string;
    price: number;
    weight: number;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

import Link from 'next/link';

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/shop/${product.id}`}>
                        <Button variant="primary" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6 text-center">
                <p className="text-xs text-gold uppercase tracking-widest mb-2">{product.type}</p>
                <h3 className="text-xl font-serif text-black mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span>{product.weight}g</span>
                    {/* Price removed as per request */}
                </div>
            </div>
        </div>
    );
};
