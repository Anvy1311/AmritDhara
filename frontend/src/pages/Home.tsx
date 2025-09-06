import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Bell, BarChart3, Users, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-ayursutra.jpg";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Automated Therapy Scheduling",
      description: "Intelligent scheduling system that optimizes therapy sessions and reduces conflicts."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Email, SMS, and in-app notifications for pre/post-procedure reminders."
    },
    {
      icon: BarChart3,
      title: "Real-Time Tracking",
      description: "Progress bars and session updates to monitor patient therapy progress."
    },
    {
      icon: Users,
      title: "Patient Feedback Loop",
      description: "Integrated symptom reporting and rating system for continuous improvement."
    },
    {
      icon: Shield,
      title: "Analytics & Visualization",
      description: "Comprehensive dashboards with graphs and reports for data-driven decisions."
    },
    {
      icon: Star,
      title: "Multi-Center SOPs",
      description: "Standardized operating procedures across multiple centers for consistency."
    }
  ];

  const stats = [
    { number: "500+", label: "Practitioners" },
    { number: "10k+", label: "Patients" },
    { number: "50+", label: "Centers" },
    { number: "98%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-secondary/40 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-primary/15 rounded-full animate-float" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-60 right-10 w-4 h-4 bg-accent/25 rounded-full animate-float" style={{animationDelay: "1.5s"}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{animationDelay: "0.2s"}}>
                  <span className="text-gradient">Modern Tech</span>
                  <br />
                  for Ancient Healing
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: "0.4s"}}>
                  Streamline your Panchakarma practice with intelligent scheduling, 
                  patient management, and therapy tracking designed for Ayurvedic practitioners.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
                <Button className="btn-hero text-lg px-8 py-4 hover-scale">
                  Book Demo
                </Button>
                <Button variant="outline" className="btn-secondary text-lg px-8 py-4 hover-scale">
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-fade-in" style={{animationDelay: "0.8s"}}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center hover-scale">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in" style={{animationDelay: "0.3s"}}>
              <img 
                src={heroImage} 
                alt="AyurSutra Panchakarma Management"
                className="rounded-2xl shadow-2xl w-full h-auto animate-float hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl animate-glow"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: "1s"}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Panchakarma Management</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern Ayurvedic practice efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card group hover-scale animate-fade-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join hundreds of Ayurvedic practitioners who have streamlined their 
            Panchakarma operations with AyurSutra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;