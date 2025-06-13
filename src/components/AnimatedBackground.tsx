import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                setMousePosition({ x: x * 30, y: y * 30 });
            }
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    ;

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden bg-[#0a0a23]"
        >
            {/* Ambient Gradient Overlay */}
            <motion.div
                className="absolute inset-0 opacity-40"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
                        'radial-gradient(circle at 80% 50%, rgba(29, 78, 216, 0.4) 0%, transparent 60%)',
                        'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
                        'radial-gradient(circle at 50% 80%, rgba(29, 78, 216, 0.4) 0%, transparent 60%)',
                    ]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />


            {/* Justice Scale Hologram */}
            <motion.div
                className="absolute top-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                    y: [0, -30, 0],
                    rotateZ: [-3, 3, -3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    transform: `translate(-50%, -50%) rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
                }}
            >
                <div className="relative w-32 h-32 opacity-60">
                    {/* Scale Base */}
                    <motion.div
                        className="absolute bottom-0 left-1/2 w-2 h-20 bg-gradient-to-t from-blue-300/80 to-blue-200/80 transform -translate-x-1/2 rounded-full"
                        animate={{
                            boxShadow: [
                                '0 0 10px rgba(59, 130, 246, 0.5)',
                                '0 0 20px rgba(59, 130, 246, 0.8)',
                                '0 0 10px rgba(59, 130, 246, 0.5)',
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Scale Arms */}
                    <motion.div
                        className="absolute top-6 left-1/2 w-24 h-px bg-gradient-to-r from-blue-300/80 via-blue-200/80 to-blue-300/80 transform -translate-x-1/2"
                        animate={{
                            boxShadow: [
                                '0 0 5px rgba(59, 130, 246, 0.6)',
                                '0 0 15px rgba(59, 130, 246, 0.9)',
                                '0 0 5px rgba(59, 130, 246, 0.6)',
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Scale Pans */}
                    <motion.div
                        className="absolute top-4 left-3 w-6 h-3 border-2 border-blue-300/80 rounded-b-full bg-blue-400/20"
                        animate={{ rotateZ: [-2, 2, -2] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-4 right-3 w-6 h-3 border-2 border-blue-300/80 rounded-b-full bg-blue-400/20"
                        animate={{ rotateZ: [2, -2, 2] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Holographic effect */}
                    <motion.div
                        className="absolute inset-0 border border-blue-300/30 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </div>
            </motion.div>


            {/* Enhanced Particle System */}
            {[...Array(40)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-300/50 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            ))}


            {/* Interactive Glow Effect */}
            {isHovered && (
                <motion.div
                    className="absolute pointer-events-none"
                    style={{
                        left: mousePosition.x + window.innerWidth / 2,
                        top: mousePosition.y + window.innerHeight / 2,
                        transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                >
                    <div className="w-40 h-40 bg-gradient-radial from-blue-300/50 to-transparent rounded-full blur-2xl" />
                </motion.div>
            )}

            {/* Depth Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a23]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a23]/60 pointer-events-none" />

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a0a23]/40 pointer-events-none" />
        </div>
    );
};