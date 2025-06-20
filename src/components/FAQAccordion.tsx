import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

// Utility to join Tailwind classes
function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export interface FaqAccordionProps {
    data: FAQItem[];
    className?: string;
    questionClassName?: string;
}

export function FaqAccordion({
    data,
    className,
    questionClassName,

}: FaqAccordionProps) {
    const [openItem, setOpenItem] = React.useState<string | null>(null);

    return (
        <div className={cn("mx-auto p-4 flex flex-col items-center", className)}>

            <Accordion.Root
                type="single"
                collapsible
                value={openItem || ""}
                onValueChange={(value: string) => setOpenItem(value)}
                className="w-full"
            >
                {data.map((item) => (
                    <Accordion.Item
                        value={item.id.toString()}
                        key={item.id}
                        className="mb-4"
                    >
                        <Accordion.Header>
                            <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4">
                                <div
                                    className={cn(
                                        "relative flex items-center space-x-2 rounded-xl p-2 transition-colors",
                                        "bg-gray-100 hover:bg-gray-200",
                                        openItem === item.id.toString()
                                            ? "bg-gray-100 hover:bg-gray-200"
                                            : "bg-gray-100 hover:bg-gray-200/10",
                                        "text-lg text-left",
                                        questionClassName
                                    )}
                                >

                                    {item.icon && (
                                        <span className="text-xl">{item.icon}</span>
                                    )}
                                    <span>{item.question}</span>

                                    <span className="ml-2 text-gray-400">
                                        {openItem === item.id.toString() ? (
                                            <Minus className="h-5 w-5" />
                                        ) : (
                                            <Plus className="h-5 w-5" />
                                        )}
                                    </span>
                                </div>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content asChild forceMount>
                            <motion.div
                                initial="collapsed"
                                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 },
                                }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                <div className="pl-12">
                                    <div className="bg-black text-white rounded-2xl px-5 py-3 mt-2 mb-4 w-fit text-base font-normal">
                                        {item.answer}
                                    </div>
                                </div>
                            </motion.div>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div >
    );
}