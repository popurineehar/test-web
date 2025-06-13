import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  FileText,
  Brain,
  Search,
  Shield,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  MessageCircle,
  BookOpen,
  Gavel,
  CheckCircle,
  Cloud,
  FolderOpen
} from 'lucide-react';

import { AnimatedBackground } from './components/AnimatedBackground';
import { ChatDemo } from './components/ChatDemo';
import { ScrollProgress } from './components/ScrollProgress';
import { ProductCard } from './components/ProductCard';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FAQAccordion } from './components/FAQAccordion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'demo', 'use-cases', 'integrations', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <ScrollProgress />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="text-blue-900">
                <path d="M256 48C256 48 176 256 48 256C176 256 256 464 256 464C256 464 336 256 464 256C336 256 256 48 256 48Z" fill="#0D47A1" />
              </svg>
              <span className="ml-2 text-xl font-bold text-blue-900">Aupa AI</span>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Products', 'Demo', 'Use Cases', 'Integrations', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative ${activeSection === item.toLowerCase().replace(' ', '-')
                      ? 'text-blue-900'
                      : 'text-gray-700 hover:text-blue-900'
                      }`}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    {activeSection === item.toLowerCase().replace(' ', '-') && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
                        layoutId="activeTab"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              className="hidden md:block bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(30, 58, 138, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Products', 'Demo', 'Use Cases', 'Integrations', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <AnimatedBackground />

        <motion.div
          className="relative z-10 flex items-center justify-center min-h-screen"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                initial={{ letterSpacing: '0.2em' }}
                animate={{ letterSpacing: '0.05em' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Ignite your
              </motion.span>
              <br />
              <motion.span
                className="text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                imagination
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Revolutionary AI-powered legal research and document automation.
              Transform your legal practice with intelligent case analysis, automated document review,
              and instant access to comprehensive legal insights.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                className="bg-white text-blue-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-300 flex items-center group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Ask AI Lawyer</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('products')}
        >
          <ChevronDown className="h-8 w-8 text-white opacity-60 hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">AI Legal Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI-powered tools designed to revolutionize legal research,
              document analysis, and case preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Legal Research AI"
              description="Instantly search through millions of cases, statutes, and legal precedents with AI-powered analysis and relevance ranking."
              icon={Search}
              features={['Case law analysis', 'Precedent matching', 'Citation verification', 'Multi-jurisdiction support']}
              index={0}
            />
            <ProductCard
              title="Document Analyzer"
              description="Automated contract review, risk assessment, and clause analysis with intelligent recommendations and compliance checking."
              icon={FileText}
              features={['Contract analysis', 'Risk assessment', 'Clause extraction', 'Compliance checking']}
              index={1}
            />
            <ProductCard
              title="Case Intelligence"
              description="Advanced case strategy development with predictive analytics, outcome modeling, and comprehensive case briefing."
              icon={Gavel}
              features={['Strategy development', 'Outcome prediction', 'Case briefing', 'Evidence analysis']}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section id="demo" className="py-20 bg-gray-50 relative">
        <ChatDemo />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-blue-900 mb-6">See AI in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven legal research with our interactive demo
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                  Intelligent Legal Assistant
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Brain, text: 'AI-powered case analysis' },
                    { icon: Search, text: 'Instant legal research' },
                    { icon: FileText, text: 'Document automation' },
                    { icon: Shield, text: 'Compliance monitoring' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-900 mr-2" />
                  <span className="font-semibold">Try a sample query:</span>
                </div>
                <div className="space-y-3">
                  {[
                    "What are the elements of breach of contract?",
                    "Find cases similar to Smith v. Jones (2023)",
                    "Analyze this NDA for potential risks"
                  ].map((query, index) => (
                    <motion.button
                      key={index}
                      className="w-full text-left p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {query}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6">Transform Your Practice</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how AI can revolutionize every aspect of your legal work
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: 'Litigation Support',
                  description: 'Comprehensive case research, evidence analysis, and strategy development'
                },
                {
                  title: 'Contract Management',
                  description: 'Automated review, risk assessment, and compliance monitoring'
                },
                {
                  title: 'Due Diligence',
                  description: 'Rapid document analysis and risk identification for M&A transactions'
                },
                {
                  title: 'Regulatory Compliance',
                  description: 'Stay current with changing regulations and ensure full compliance'
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-full p-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-blue-100">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-3xl p-8 border border-blue-600"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-3xl font-bold mb-6">Ready to Transform?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Join thousands of legal professionals who have already revolutionized
                their practice with Aupa AI. Experience the future of legal work today.
              </p>
              <motion.button
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-blue-900 mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Storage',
                description: 'Integrate with Google Drive, Dropbox, and OneDrive for seamless document management',
                icon: Cloud,
                integrations: ['Google Drive', 'Dropbox', 'OneDrive', 'Box']
              },
              {
                title: 'Legal Databases',
                description: 'Direct access to Westlaw, LexisNexis, and other major legal research platforms',
                icon: BookOpen,
                integrations: ['Westlaw', 'LexisNexis', 'Bloomberg Law', 'Fastcase']
              },
              {
                title: 'Practice Management',
                description: 'Sync with popular legal practice management and billing software',
                icon: FolderOpen,
                integrations: ['Clio', 'MyCase', 'PracticePanther', 'TimeSolv']
              }
            ].map((integration, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-blue-900 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <integration.icon className="h-12 w-12" />
                </motion.div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">{integration.title}</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>

                <div className="space-y-2">
                  {integration.integrations.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <CheckCircle className="h-4 w-4 text-blue-900 mr-2" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-blue-900 mb-6">Trusted by Legal Professionals</h2>
            <p className="text-xl text-gray-600">Real results from real law firms</p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-blue-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Aupa AI</p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6">Get Started Today</h2>
            <p className="text-xl text-blue-100">Ready to revolutionize your legal practice?</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">hello@aupaai.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">123 Legal Tech Drive, Innovation City, IC 12345</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Github, href: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="bg-white text-blue-900 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 text-gray-900"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                    placeholder="john@lawfirm.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Law Firm</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                    placeholder="Your Law Firm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
                    placeholder="Tell us about your legal practice needs..."
                  ></textarea>
                </div>
                <motion.button
                  className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">

                <div className="p-1 rounded-lg bg-white inline-block">
                  <svg width="26" height="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="#0D47A1">
                    <path d="M256 48C256 48 176 256 48 256C176 256 256 464 256 464C256 464 336 256 464 256C336 256 256 48 256 48Z" fill="#0D47A1" />
                  </svg>
                </div>

                <span className="ml-2 text-xl font-bold">Aupa AI</span>
              </div>
              <p className="text-blue-100">
                Revolutionizing legal practice through artificial intelligence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Legal Research AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Document Analyzer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Intelligence</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Use Cases</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Litigation Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contract Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Due Diligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2025 Aupa AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;