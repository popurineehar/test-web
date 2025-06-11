import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  Star,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'about', 'testimonials', 'contact'];
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="text-black">
                <path d="M256 48C256 48 176 256 48 256C176 256 256 464 256 464C256 464 336 256 464 256C336 256 256 48 256 48Z" fill="black" />
              </svg>
              <span className="ml-2 text-xl font-bold text-black">Aupa AI</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Products', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-700 hover:text-black'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>



            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Products', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
              <button className="w-full mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ignite Your
              </span>
              <br />
              <span className="text-white">Imagination</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions that drive innovation,
              efficiency, and growth in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-60" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of innovative AI products designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Analytics Platform',
                description: 'Comprehensive AI-powered analytics solution with machine learning optimization and seamless integration capabilities.',
                icon: <Globe className="h-8 w-8" />,
                features: ['Auto-scaling', 'ML optimization', 'Multi-platform support']
              },
              {
                title: 'Intelligent Security',
                description: 'Advanced AI cybersecurity platform providing real-time threat detection and automated response systems.',
                icon: <Shield className="h-8 w-8" />,
                features: ['24/7 monitoring', 'AI threat detection', 'Compliance tools']
              },
              {
                title: 'Smart Insights',
                description: 'Powerful AI business intelligence platform with predictive analytics and interactive dashboards.',
                icon: <Zap className="h-8 w-8" />,
                features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards']
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200">
                <div className="text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-black mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI technology services to transform your business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: 'AI Digital Transformation',
                    description: 'Modernize your business processes with cutting-edge AI solutions'
                  },
                  {
                    title: 'Machine Learning Implementation',
                    description: 'Deploy custom ML models to automate and optimize your operations'
                  },
                  {
                    title: 'AI Strategy Consulting',
                    description: 'Strategic guidance to harness AI for competitive advantage'
                  },
                  {
                    title: 'Intelligent Automation',
                    description: 'Automate complex workflows with AI-powered solutions'
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white rounded-full p-2 mt-1">
                      <CheckCircle className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your business with our comprehensive AI technology solutions.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Innovation Meets Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                With cutting-edge AI expertise and a passion for innovation,
                we've helped hundreds of companies transform their operations and achieve
                unprecedented growth through intelligent automation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'AI Projects Completed' },
                  { number: '150+', label: 'Happy Clients' },
                  { number: '10+', label: 'Years Experience' },
                  { number: '24/7', label: 'AI Support Available' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-black">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative AI solutions that drive growth,
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-white" />
                <div>
                  <div className="font-semibold">Expert AI Team</div>
                  <div className="text-gray-300 text-sm">50+ certified AI professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CTO, TechCorp',
                content: 'Aupa AI transformed our entire infrastructure. The AI solutions exceeded our expectations and the team was incredible to work with.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'CEO, InnovateLab',
                content: 'Their AI solutions helped us automate 70% of our processes. The ROI was evident within the first quarter.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Director, DataFlow Inc',
                content: 'Outstanding AI implementation. We now have intelligent automation across all our operations.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to start your AI transformation journey?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">hello@aupa.ai</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-white" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">123 AI Innovation Drive, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex space-x-4">
                  <a href="#" className="bg-white text-black p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white text-black p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white text-black p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-black">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Tell us about your AI project..."
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-1 rounded-lg bg-white inline-block">
                  <svg width="26" height="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path d="M256 48C256 48 176 256 48 256C176 256 256 464 256 464C256 464 336 256 464 256C336 256 256 48 256 48Z" fill="black" />
                  </svg>
                </div>
                <span className="ml-2 text-xl font-bold">Aupa AI</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative AI solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Analytics Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intelligent Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Insights</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Machine Learning Implementation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Strategy Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intelligent Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aupa AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;