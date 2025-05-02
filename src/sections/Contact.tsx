import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Message sent successfully!');
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-cyan-400" />,
      title: "Email",
      value: "charugupta860@gmail.com",
      href: "mailto:charugupta860@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-cyan-400" />,
      title: "Phone",
      value: "6396401458",
      href: "tel:+91 6396401458"
    },
    {
      icon: <MapPin className="h-5 w-5 text-cyan-400" />,
      title: "Location",
      value: "Gurgaon, Haryana , India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/charugupta94",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/charug86/",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Have a project in mind or want to work together? Feel free to reach out."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-8 h-full">
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Connect With Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              <Button 
                text={isSubmitting ? "Sending..." : "Send Message"} 
                primary
                icon={<Send size={16} />} 
                className="w-full sm:w-auto"
              />
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;