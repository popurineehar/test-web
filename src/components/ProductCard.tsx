import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    icon: Icon,
    features,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
            }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
        >
            <motion.div
                className="text-black mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Icon className="h-12 w-12" />
            </motion.div>

            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                        className="flex items-center text-gray-700"
                    >
                        <motion.div
                            className="w-2 h-2 bg-black rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                    </motion.li>
                ))}
            </ul>

            <motion.button
                className="w-full bg-black text-white py-3 rounded-lg font-semibold relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Learn More</span>
            </motion.button>
        </motion.div>
    );
};