import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Stethoscope, User, Mail, Lock, Phone } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'patient' | 'practitioner'>('patient');

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">AyurSutra</h1>
          </div>
          <p className="text-muted-foreground">Modern Tech for Ancient Healing</p>
        </div>

        <Card className="shadow-card border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="bg-muted p-1 rounded-lg inline-flex">
                <button
                  onClick={() => setUserType('patient')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                    userType === 'patient' 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <User className="h-4 w-4" />
                  Patient
                </button>
                <button
                  onClick={() => setUserType('practitioner')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                    userType === 'practitioner' 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Stethoscope className="h-4 w-4" />
                  Practitioner
                </button>
              </div>
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? 'Welcome Back' : 'Join AyurSutra'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? `Sign in to your ${userType} account` 
                : `Create your ${userType} account`
              }
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={isLogin ? 'login' : 'signup'} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger 
                  value="login" 
                  onClick={() => setIsLogin(true)}
                  className="transition-all duration-300"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  onClick={() => setIsLogin(false)}
                  className="transition-all duration-300"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
                  </div>
                </div>
                <div className="text-right">
                  <Button variant="link" className="px-0 text-sm">
                    Forgot password?
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="signupEmail" type="email" placeholder="Enter your email" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" type="tel" placeholder="Enter your phone" className="pl-10" />
                  </div>
                </div>
                {userType === 'practitioner' && (
                  <div className="space-y-2">
                    <Label htmlFor="license">License Number</Label>
                    <Input id="license" placeholder="Enter your license number" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="signupPassword" type="password" placeholder="Create a password" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="confirmPassword" type="password" placeholder="Confirm your password" className="pl-10" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" size="lg">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardFooter>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Need help? Contact support at{' '}
            <a href="mailto:support@ayursutra.com" className="text-primary hover:underline">
              support@ayursutra.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;