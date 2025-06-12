import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How accurate is Apua AI legal research?',
        answer: 'Our AI is trained on millions of legal documents and case law, achieving 95%+ accuracy in legal research tasks. It continuously learns from new legal precedents and regulations.'
    },
    {
        question: 'Can Ask Apua AI replace human lawyers?',
        answer: 'Apua AI is designed to augment, not replace, legal professionals. It handles research and document analysis, allowing lawyers to focus on strategy, client relations, and complex legal reasoning.'
    },
    {
        question: 'What types of legal documents can it analyze?',
        answer: 'Our AI can analyze contracts, case briefs, legal opinions, statutes, regulations, and more. It supports multiple jurisdictions and practice areas including corporate law, litigation, and compliance.'
    },
    {
        question: 'How secure is my data?',
        answer: 'We use enterprise-grade encryption and comply with all major data protection regulations. Your legal documents are processed securely and never stored permanently on our servers.'
    },
    {
        question: 'How quickly can I get results?',
        answer: 'Most legal research queries are completed within seconds to minutes, depending on complexity. Document analysis typically takes 1-5 minutes for comprehensive reports.'
    }
];

export const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                    <motion.button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        whileHover={{ backgroundColor: '#f9fafb' }}
                    >
                        <h3 className="text-lg font-semibold text-black pr-4">
                            {faq.question}
                        </h3>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {openIndex === index ? (
                                <Minus className="h-5 w-5 text-black" />
                            ) : (
                                <Plus className="h-5 w-5 text-black" />
                            )}
                        </motion.div>
                    </motion.button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6">
                                    <motion.p
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-gray-600 leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};