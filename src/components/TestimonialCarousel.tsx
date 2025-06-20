import React from "react";
import { TestimonialsColumn } from "./ui/TestimonialsColumn";
import { motion } from "framer-motion";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        name: "Briana Patton",
        role: "Operations Manager",
    },
    {
        text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        name: "Bilal Ahmed",
        role: "IT Manager",
    },
    {
        text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        name: "Saman Malik",
        role: "Customer Support Lead",
    },
    {
        text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        name: "Omar Raza",
        role: "CEO",
    },
    {
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        name: "Zainab Hussain",
        role: "Project Manager",
    },
    {
        text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our business functions improved with a user-friendly design and positive customer feedback.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        name: "Sana Sheikh",
        role: "Sales Manager",
    },
    {
        text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        name: "Hassan Ali",
        role: "E-commerce Manager",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-white my-20 relative">
            <div className="container z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                        What our users say
                    </h2>
                    <p className="text-center mt-5 opacity-75">
                        See what our customers have to say about us.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 