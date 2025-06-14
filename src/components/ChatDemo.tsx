import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search } from 'lucide-react';

const chatMessages = [
    {
        type: 'user',
        message: 'What are the key precedents for contract breach in California?',
    },
    {
        type: 'ai',
        message: 'Analyzing legal precedents...',
        status: 'analyzing',
    },
    {
        type: 'ai',
        message: 'Found 247 relevant cases. Key precedents include Foley v. Interactive Data Corp. (1988) and Seaman\'s Direct Buying Service v. Standard Oil Co. (1984).',
        status: 'complete',
    },
];

export const ChatDemo: React.FC = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentMessage < chatMessages.length - 1) {
                setIsTyping(true);
                setTimeout(() => {
                    setCurrentMessage(prev => prev + 1);
                    setIsTyping(false);
                }, 1500);
            } else {
                setCurrentMessage(0);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentMessage]);

    return (
        <motion.div
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
        >
            <motion.div
                className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-200"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                        <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Ask AI Lawyer</span>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                    <AnimatePresence>
                        {chatMessages.slice(0, currentMessage + 1).map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs p-3 rounded-lg ${msg.type === 'user'
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {msg.status === 'analyzing' && (
                                        <div className="flex items-center space-x-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Search className="w-4 h-4" />
                                            </motion.div>
                                            <span>{msg.message}</span>
                                        </div>
                                    )}
                                    {msg.status !== 'analyzing' && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {msg.message}
                                        </motion.span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <div className="flex space-x-1">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{
                                                duration: 0.6,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                <motion.button
                    className="w-full mt-4 bg-black text-white py-2 rounded-lg font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Try Ask Apua AI
                </motion.button>
            </motion.div>
        </motion.div>
    );
};