import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Senior Partner, Mitchell & Associates',
        content: 'Ask AI Lawyer has revolutionized our legal research process. What used to take hours now takes minutes, and the accuracy is remarkable.',
        rating: 5,
        avatar: 'SM'
    },
    {
        name: 'David Chen',
        role: 'Corporate Counsel, TechCorp',
        content: 'The document automation features have saved us countless hours. The AI understands legal nuances better than any tool we\'ve used.',
        rating: 5,
        avatar: 'DC'
    },
    {
        name: 'Maria Rodriguez',
        role: 'Managing Director, Rodriguez Law',
        content: 'Incredible case analysis capabilities. The AI provides insights that help us build stronger arguments for our clients.',
        rating: 5,
        avatar: 'MR'
    }
];

export const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
                {testimonials.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full mx-2 ${index === currentIndex ? 'bg-black' : 'bg-gray-300'
                            }`}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <div className="relative h-80 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100, rotateY: 90 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -100, rotateY: -90 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="absolute inset-0 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                {testimonials[currentIndex].avatar}
                            </div>
                            <div>
                                <h4 className="font-bold text-black text-lg">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-gray-600">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-4">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Star className="h-5 w-5 text-black fill-current" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-gray-700 text-lg italic leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            "{testimonials[currentIndex].content}"
                        </motion.p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-between mt-8">
                <motion.button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="h-6 w-6" />
                </motion.button>

                <motion.button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="h-6 w-6" />
                </motion.button>
            </div>
        </div>
    );
};