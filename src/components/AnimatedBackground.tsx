import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            ))}

            {/* Neural network lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={Math.random() * 100 + "%"}
                        y1={Math.random() * 100 + "%"}
                        x2={Math.random() * 100 + "%"}
                        y2={Math.random() * 100 + "%"}
                        stroke="white"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};