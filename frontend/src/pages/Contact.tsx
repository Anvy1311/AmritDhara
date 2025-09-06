import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Calendar,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@ayursutra.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Wellness Street, Health City, HC 12345",
      action: "Get Directions"
    }
  ];

  const supportOptions = [
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "See AyurSutra in action with a personalized demo session",
      action: "Book Demo"
    },
    {
      icon: Users,
      title: "Sales Consultation",
      description: "Discuss pricing and implementation for your practice",
      action: "Contact Sales"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with technical issues or questions",
      action: "Get Support"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we get started with AyurSutra?",
      answer: "Implementation typically takes 1-2 weeks, including data migration and staff training."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes, we provide comprehensive training and ongoing support to ensure smooth adoption."
    },
    {
      question: "Is AyurSutra compliant with healthcare regulations?",
      answer: "Absolutely. We're HIPAA compliant and meet all healthcare data security standards."
    },
    {
      question: "Can AyurSutra integrate with our existing systems?",
      answer: "Yes, we offer API integrations with most healthcare management systems and EMRs."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your Panchakarma practice? We're here to help you get started 
            with AyurSutra and answer any questions you may have.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="feature-card text-center">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mx-auto mb-4">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              <p className="font-medium text-sm mb-4">{method.contact}</p>
              <Button variant="outline" size="sm" className="btn-secondary">
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="feature-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Practice/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your practice name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <select 
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="general">General Inquiry</option>
                  <option value="demo">Schedule Demo</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Support Options & Info */}
          <div className="space-y-8">
            {/* Support Options */}
            <Card className="feature-card p-6">
              <h3 className="text-xl font-semibold mb-6">How Can We Help?</h3>
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                      <option.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{option.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                      <Button size="sm" variant="outline" className="btn-secondary text-xs">
                        {option.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="feature-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Emergency support available 24/7 for existing customers
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="feature-card p-8 mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-medium">{faq.question}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-primary-foreground">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a personalized demo and see how AyurSutra can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
              Schedule Free Demo
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;