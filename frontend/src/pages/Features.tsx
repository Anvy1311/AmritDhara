import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Bell, 
  BarChart3, 
  MessageSquare, 
  PieChart, 
  Settings,
  Clock,
  Users,
  Shield,
  Smartphone,
  Mail,
  Activity
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Calendar,
      title: "Automated Therapy Scheduling",
      description: "Intelligent scheduling system that automatically assigns therapies based on practitioner availability, patient needs, and treatment protocols.",
      features: [
        "Smart conflict detection",
        "Automated rescheduling",
        "Therapy sequence optimization",
        "Resource allocation"
      ],
      badge: "Core Feature"
    },
    {
      icon: Bell,
      title: "Pre/Post-Procedure Notifications",
      description: "Multi-channel notification system to keep patients and practitioners informed at every step of the treatment journey.",
      features: [
        "Email notifications",
        "SMS reminders",
        "In-app alerts",
        "Custom notification templates"
      ],
      badge: "Communication"
    },
    {
      icon: BarChart3,
      title: "Real-Time Therapy Tracking",
      description: "Monitor therapy progress with live updates, progress bars, and session tracking for complete visibility.",
      features: [
        "Live session monitoring",
        "Progress visualization",
        "Treatment milestones",
        "Completion tracking"
      ],
      badge: "Monitoring"
    },
    {
      icon: MessageSquare,
      title: "Integrated Patient Feedback Loop",
      description: "Capture patient feedback, symptoms, and ratings throughout the treatment process for continuous improvement.",
      features: [
        "Symptom reporting",
        "Treatment ratings",
        "Progress surveys",
        "Feedback analytics"
      ],
      badge: "Patient Care"
    },
    {
      icon: PieChart,
      title: "Analytics & Visualization Tools",
      description: "Comprehensive dashboards with graphs, charts, and reports to make data-driven decisions for your practice.",
      features: [
        "Treatment analytics",
        "Patient outcomes",
        "Revenue reports",
        "Performance metrics"
      ],
      badge: "Analytics"
    },
    {
      icon: Settings,
      title: "Multi-Center SOP Standardization",
      description: "Standardize operating procedures across multiple centers to ensure consistent, high-quality care delivery.",
      features: [
        "Protocol templates",
        "Quality standards",
        "Compliance tracking",
        "Training modules"
      ],
      badge: "Management"
    }
  ];

  const additionalFeatures = [
    { icon: Clock, title: "24/7 System Availability", description: "Access your system anytime, anywhere" },
    { icon: Users, title: "Multi-Role Access Control", description: "Role-based permissions for different user types" },
    { icon: Shield, title: "HIPAA Compliant Security", description: "Enterprise-grade security for patient data" },
    { icon: Smartphone, title: "Mobile-First Design", description: "Optimized for tablets and smartphones" },
    { icon: Mail, title: "Email Integration", description: "Seamless email communication workflows" },
    { icon: Activity, title: "Performance Monitoring", description: "Real-time system health and performance tracking" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="text-gradient">Features</span> for Modern Ayurveda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how AyurSutra's comprehensive feature set revolutionizes Panchakarma 
            practice management with intelligent automation and deep insights.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-12 mb-20">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">{feature.badge}</Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold">{feature.title}</h2>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="btn-hero">Learn More</Button>
              </div>

              <Card className="feature-card p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-16 w-16 text-primary/30" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            And Much <span className="text-gradient">More</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="feature-card text-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a personalized demo to see how AyurSutra can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Schedule Demo
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;