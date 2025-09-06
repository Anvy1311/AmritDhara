import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Leaf, 
  Brain, 
  Globe, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const visionPoints = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Bridging ancient Ayurvedic wisdom with modern healthcare technology for complete patient care."
    },
    {
      icon: Brain,
      title: "Intelligent Innovation",
      description: "Leveraging AI and automation to enhance the efficiency and effectiveness of traditional healing."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making authentic Panchakarma therapy accessible to patients worldwide through digital transformation."
    }
  ];

  const teamValues = [
    {
      title: "Patient-Centered Care",
      description: "Every feature is designed with patient outcomes and wellness at the forefront.",
      icon: Heart
    },
    {
      title: "Practitioner Empowerment", 
      description: "Tools that enhance rather than replace the skills of experienced Ayurvedic practitioners.",
      icon: Users
    },
    {
      title: "Continuous Innovation",
      description: "Constantly evolving our platform based on user feedback and healthcare advances.",
      icon: Lightbulb
    },
    {
      title: "Quality & Compliance",
      description: "Maintaining the highest standards of security, privacy, and regulatory compliance.",
      icon: Award
    }
  ];

  const achievements = [
    { metric: "500+", label: "Practitioners Served" },
    { metric: "10,000+", label: "Patients Treated" },
    { metric: "50+", label: "Centers Powered" },
    { metric: "98%", label: "Customer Satisfaction" }
  ];

  const impactStats = [
    {
      icon: Target,
      title: "Reduced Administrative Time",
      value: "60%",
      description: "Average reduction in administrative tasks for practitioners"
    },
    {
      icon: Star,
      title: "Improved Patient Satisfaction",
      value: "95%", 
      description: "Patient satisfaction rate with digital scheduling and tracking"
    },
    {
      icon: CheckCircle,
      title: "Treatment Completion Rate",
      value: "92%",
      description: "Patients who complete their full Panchakarma program"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm">Our Story</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Where <span className="text-gradient">Ancient Wisdom</span> Meets Modern Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AyurSutra was born from a vision to preserve and enhance the timeless healing traditions 
            of Ayurveda through innovative technology solutions.
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming healthcare through the perfect blend of Ayurvedic principles and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <Card key={index} className="feature-card text-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mx-auto mb-6">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">The Beginning</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                From Traditional Practice to <span className="text-gradient">Digital Innovation</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by a team of Ayurvedic practitioners and technology experts, AyurSutra emerged 
                  from the real-world challenges faced in managing Panchakarma centers. We witnessed 
                  the inefficiencies of manual scheduling, paper-based records, and fragmented communication.
                </p>
                <p>
                  Our founders recognized that while Ayurveda's principles are timeless, the tools used 
                  to deliver these healing therapies could benefit from modern innovation. This insight 
                  led to the creation of AyurSutra - a platform that honors ancient wisdom while embracing 
                  technological advancement.
                </p>
                <p>
                  Today, we're proud to serve hundreds of practitioners and thousands of patients, 
                  helping them achieve better outcomes through seamless digital experiences that 
                  complement traditional healing practices.
                </p>
              </div>
              <Button className="btn-hero">Learn More About Our Journey</Button>
            </div>

            <Card className="feature-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-8">
                <div className="text-center">
                  <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Founded in 2021</h3>
                  <p className="text-muted-foreground">With a mission to modernize Ayurvedic healthcare</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{achievement.metric}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AyurSutra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Our <span className="text-gradient">Impact</span> on Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in healthcare delivery and patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="feature-card text-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Built by <span className="text-gradient">Healthcare Innovators</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Our diverse team combines deep Ayurvedic knowledge with cutting-edge technology expertise.
            </p>

            <div className="bg-muted/30 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Combined Ayurveda Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Technology Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Certified Ayurvedic Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Dedicated Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-primary-foreground">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of the revolution that's transforming Ayurvedic healthcare for the better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;