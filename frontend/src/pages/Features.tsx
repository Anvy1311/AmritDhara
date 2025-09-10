import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import {
  CalendarIcon,
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
  Activity,
  Star,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const mockAppointments = [
    { time: "09:00", patient: "John D.", therapy: "Abhyanga" },
    { time: "11:30", patient: "Sarah M.", therapy: "Shirodhara" },
    { time: "14:00", patient: "Mike R.", therapy: "Panchakarma" }
  ];

  const mockNotifications = [
    { type: "reminder", message: "Appointment in 30 minutes", time: "2 mins ago" },
    { type: "complete", message: "Therapy session completed", time: "1 hour ago" },
    { type: "schedule", message: "New appointment scheduled", time: "3 hours ago" }
  ];

  const therapyProgress = [
    { name: "Abhyanga", progress: 75 },
    { name: "Shirodhara", progress: 45 },
    { name: "Panchakarma", progress: 90 }
  ];

  const renderFeatureDemo = (index: number) => {
    switch (index) {
      case 0: // Calendar
        return (
          <div className="space-y-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border mx-auto scale-85"
            />
            <div className="space-y-2 text-sm">
              <h4 className="font-medium text-primary">Today's Schedule</h4>
              {mockAppointments.map((apt, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-2 bg-muted/50 rounded"
                >
                  <span className="font-medium">{apt.time}</span>
                  <span className="text-muted-foreground">{apt.patient}</span>
                  <Badge variant="outline" className="text-xs">
                    {apt.therapy}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        );


      case 1: // Notifications
        return (
          <div className="space-y-3">
            {mockNotifications.map((notif, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                <Bell className={`h-4 w-4 mt-1 ${notif.type === 'complete' ? 'text-green-500' : 'text-primary'}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{notif.message}</p>
                  <p className="text-xs text-muted-foreground">{notif.time}</p>
                </div>
              </div>
            ))}
            <Button size="sm" className="w-full">View All Notifications</Button>
          </div>
        );

      case 2: // Progress Tracking
        return (
          <div className="space-y-4">
            <h4 className="font-medium text-primary">Active Therapies</h4>
            {therapyProgress.map((therapy, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{therapy.name}</span>
                  <span className="text-muted-foreground">{therapy.progress}%</span>
                </div>
                <Progress value={therapy.progress} className="h-2" />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="text-center p-2 bg-green-50 rounded">
                <div className="text-lg font-bold text-green-600">24</div>
                <div className="text-xs text-green-600">Completed</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">8</div>
                <div className="text-xs text-blue-600">In Progress</div>
              </div>
            </div>
          </div>
        );

      case 3: // Patient Feedback
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="font-medium text-primary mb-2">Treatment Rating</h4>
              <div className="flex justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">4.8/5 Average Rating</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-muted/50 rounded">
                <p className="font-medium">Recent Feedback:</p>
                <p className="text-muted-foreground">"Excellent Shirodhara session!"</p>
              </div>
              <div className="p-2 bg-muted/50 rounded">
                <p className="font-medium">Symptom Improvement:</p>
                <p className="text-green-600">Stress levels reduced by 40%</p>
              </div>
            </div>
          </div>
        );

      case 4: // Analytics
        return (
          <div className="space-y-4">
            <h4 className="font-medium text-primary">Performance Dashboard</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded">
                <BarChart3 className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <div className="text-sm font-bold">Revenue</div>
                <div className="text-lg font-bold text-blue-600">₹2.4L</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded">
                <PieChart className="h-6 w-6 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-bold">Patients</div>
                <div className="text-lg font-bold text-green-600">156</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly Growth</span>
                <span className="text-green-600 font-medium">+23%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        );

      case 5: // SOP Standardization
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-primary">Quality Checklist</h4>
            {[
              "Equipment Sterilization",
              "Oil Temperature Check",
              "Patient Consultation",
              "Post-therapy Documentation"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 p-2 bg-muted/30 rounded">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
            <div className="mt-3 p-2 bg-green-50 rounded text-center">
              <div className="text-green-600 font-semibold">100% Compliance</div>
              <div className="text-xs text-green-600">All centers following SOP</div>
            </div>
          </div>
        );

      default:
        return (
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
            <CalendarIcon className="h-16 w-16 text-primary/30" />
          </div>
        );
    }
  };
  const renderAdditionalFeatureDemo = (index: number) => {
    switch (index) {
      case 0: // 24/7 System Availability
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">System Online</span>
            </div>
            <div className="text-xs text-muted-foreground">Uptime: 99.9%</div>
            <div className="text-xs text-muted-foreground">Last 30 days</div>
          </div>
        );
      case 1: // Multi-Role Access Control
        return (
          <div className="space-y-2">
            <div className="flex justify-center space-x-1">
              {['Admin', 'Doctor', 'Staff'].map((role, i) => (
                <Badge key={i} variant="outline" className="text-xs">{role}</Badge>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">Role-based permissions</div>
          </div>
        );
      case 2: // HIPAA Compliant Security
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-1">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">Secured</span>
            </div>
            <div className="text-xs text-muted-foreground">256-bit Encryption</div>
          </div>
        );
      case 3: // Mobile-First Design
        return (
          <div className="space-y-2">
            <div className="flex justify-center space-x-2">
              <div className="w-4 h-6 bg-primary/20 rounded-sm"></div>
              <div className="w-6 h-4 bg-primary/20 rounded-sm"></div>
            </div>
            <div className="text-xs text-muted-foreground">Responsive Design</div>
          </div>
        );
      case 4: // Email Integration
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-1">
              <Mail className="h-4 w-4 text-blue-500" />
              <span className="text-xs">124 sent today</span>
            </div>
            <div className="text-xs text-muted-foreground">Auto notifications</div>
          </div>
        );
      case 5: // Performance Monitoring
        return (
          <div className="space-y-2">
            <div className="flex justify-center">
              <Activity className="h-6 w-6 text-green-500 animate-pulse" />
            </div>
            <div className="text-xs text-green-600 font-medium">All systems operational</div>
          </div>
        );
      default:
        return (
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mx-auto">
            <Clock className="h-8 w-8 text-primary" />
          </div>
        );
    }
  };

  const mainFeatures = [
    {
      icon: CalendarIcon,
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
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
                }`}
            >
              {/* LEFT SIDE: TEXT ONLY */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {feature.badge}
                    </Badge>
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

              {/* RIGHT SIDE: CARD WITH DEMO (CALENDAR FOR index 0) */}
              <Card className="group feature-card p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                {renderFeatureDemo(index)}
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
              <Card key={index} className="group feature-card text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 relative overflow-hidden">
                <div className="mb-4">
                  {renderAdditionalFeatureDemo(index)}
                </div>
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-foreground">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
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
    </div >
  );
};

export default Features;