import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "transition-all duration-300 rounded-full font-medium tracking-wide flex items-center justify-center";

    const variants = {
        primary: "bg-gold text-black hover:bg-gold-light hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]",
        secondary: "bg-black text-white border border-gold hover:bg-gray-900",
        outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
