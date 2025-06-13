import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            style={{ transformOrigin: '0%' }}
        >
            <div className="h-full bg-gradient-to-r from-blue-900 to-blue-600" />
        </motion.div>
    );
};