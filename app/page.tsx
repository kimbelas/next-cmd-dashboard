"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Zap, TrendingUp, Check } from "lucide-react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection";
import { useCounter } from "@/lib/hooks/use-counter";
import { cn } from "@/lib/utils/cn";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <DashboardShowcase />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="brutalist-border border-b-[3px] border-l-0 border-r-0 border-t-0">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="brutalist-border brutalist-shadow-sm h-12 w-12 bg-[hsl(14,100%,60%)]"></div>
            <span className="text-2xl font-black uppercase tracking-tight">CMS</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="font-bold uppercase tracking-wide transition-all hover:translate-x-1">
              Features
            </a>
            <a href="#pricing" className="font-bold uppercase tracking-wide transition-all hover:translate-x-1">
              Pricing
            </a>
            <a href="#testimonials" className="font-bold uppercase tracking-wide transition-all hover:translate-x-1">
              Reviews
            </a>
          </div>

          <Link href="/admin">
            <button className="neo-btn bg-black text-white">
              Launch App
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32">
      <div className="grid-pattern absolute inset-0 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Typography */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block brutalist-border brutalist-shadow bg-[hsl(48,100%,71%)] px-4 py-2 font-mono text-sm font-bold uppercase"
            >
              Production Ready
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-7xl font-black leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl"
            >
              DASHBOARD
              <br />
              <span className="inline-block rotate-[-2deg] bg-black px-4 text-white">
                THAT
              </span>
              <br />
              PERFORMS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-lg text-xl font-medium leading-relaxed"
            >
              Built for modern teams who demand speed, reliability, and a UI that doesn&apos;t waste time.
              Zero fluff. Pure performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/admin">
                <button className="neo-btn bg-black text-white">
                  View Dashboard
                  <ArrowRight className="ml-2 inline h-5 w-5" />
                </button>
              </Link>
              <button className="neo-btn bg-white">
                Read Docs
              </button>
            </motion.div>

            {/* Stats Mini */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-6 pt-8"
            >
              <div>
                <div className="text-3xl font-black">50K+</div>
                <div className="font-mono text-sm uppercase">Users</div>
              </div>
              <div>
                <div className="text-3xl font-black">99.9%</div>
                <div className="font-mono text-sm uppercase">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-black">&lt;1.5s</div>
                <div className="font-mono text-sm uppercase">Load Time</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="brutalist-border brutalist-shadow-lg absolute right-0 top-20 h-[400px] w-[500px] rotate-3 bg-white p-6">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 bg-[hsl(14,100%,60%)]"></div>
                <div className="h-3 w-3 bg-[hsl(48,100%,71%)]"></div>
                <div className="h-3 w-3 bg-[hsl(173,65%,59%)]"></div>
              </div>
              <div className="space-y-3">
                <div className="brutalist-border h-12 w-3/4 bg-gray-100"></div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="brutalist-border h-20 bg-[hsl(14,100%,60%,0.2)]"></div>
                  <div className="brutalist-border h-20 bg-[hsl(173,65%,59%,0.2)]"></div>
                  <div className="brutalist-border h-20 bg-[hsl(48,100%,71%,0.2)]"></div>
                </div>
                <div className="brutalist-border h-32 bg-gray-50"></div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="brutalist-border brutalist-shadow absolute left-0 top-0 bg-[hsl(173,65%,59%)] p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                <div className="font-mono text-xl font-black">+127%</div>
              </div>
            </div>

            <div className="brutalist-border brutalist-shadow absolute bottom-20 right-20 bg-white p-4">
              <div className="font-mono text-sm font-bold uppercase">Real-time</div>
              <div className="text-2xl font-black">Analytics</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5, freezeOnceVisible: true });
  const users = useCounter(50000, 2000, 0, isIntersecting);
  const performance = useCounter(99, 2000, 0, isIntersecting);
  const widgets = useCounter(10, 2000, 0, isIntersecting);

  return (
    <section ref={ref} className="border-y-[3px] border-black bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 font-mono text-5xl font-black md:text-6xl">
              {users.toLocaleString()}+
            </div>
            <div className="font-bold uppercase tracking-wide">Active Users</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-mono text-5xl font-black md:text-6xl">{performance}%</div>
            <div className="font-bold uppercase tracking-wide">Performance</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-mono text-5xl font-black md:text-6xl">{widgets}+</div>
            <div className="font-bold uppercase tracking-wide">Widgets</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-mono text-5xl font-black md:text-6xl">24/7</div>
            <div className="font-bold uppercase tracking-wide">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Core Web Vitals optimized. LCP under 1.5s guaranteed.",
      color: "hsl(48,100%,71%)",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption. JWT auth. CSRF protection built-in.",
      color: "hsl(173,65%,59%)",
    },
    {
      icon: BarChart3,
      title: "Real-time Data",
      description: "Live dashboards. WebSocket updates. Zero refresh needed.",
      color: "hsl(14,100%,60%)",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          className="mb-20"
        >
          <div className="mb-4 font-mono text-sm font-bold uppercase tracking-wide">
            What You Get
          </div>
          <h2 className="max-w-3xl text-6xl font-black leading-tight md:text-7xl">
            FEATURES THAT ACTUALLY MATTER
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isIntersecting={isIntersecting}
            />
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="brutalist-border brutalist-shadow bg-white p-8">
            <h3 className="mb-2 text-2xl font-black">TypeScript Native</h3>
            <p className="font-medium text-gray-700">
              Fully typed. Auto-complete everywhere. Catch errors before deployment.
            </p>
          </div>
          <div className="brutalist-border brutalist-shadow bg-white p-8">
            <h3 className="mb-2 text-2xl font-black">Mobile Optimized</h3>
            <p className="font-medium text-gray-700">
              Touch-first design. Responsive from 320px to 4K displays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isIntersecting }: {
  feature: { icon: React.ComponentType<{ className?: string }>, title: string, description: string, color: string },
  index: number,
  isIntersecting: boolean
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="brutalist-border brutalist-shadow-lg group bg-white p-8 transition-all hover:-translate-y-2"
    >
      <div
        className="brutalist-border mb-6 inline-flex p-4"
        style={{ backgroundColor: feature.color }}
      >
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-3 text-3xl font-black">{feature.title}</h3>
      <p className="text-lg font-medium leading-relaxed text-gray-700">
        {feature.description}
      </p>
    </motion.div>
  );
}

function DashboardShowcase() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 font-mono text-sm font-bold uppercase tracking-wide">
            See It In Action
          </div>
          <h2 className="text-5xl font-black md:text-6xl">PREVIEW THE DASHBOARD</h2>
        </div>

        <Link href="/admin">
          <div className="brutalist-border brutalist-shadow-lg group mx-auto max-w-5xl cursor-pointer overflow-hidden bg-white transition-all hover:-translate-y-2">
            <div className="brutalist-border border-b-[3px] border-l-0 border-r-0 border-t-0 bg-gray-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[hsl(14,100%,60%)]"></div>
                <div className="h-3 w-3 bg-[hsl(48,100%,71%)]"></div>
                <div className="h-3 w-3 bg-[hsl(173,65%,59%)]"></div>
                <div className="ml-4 font-mono text-sm font-bold">localhost:3000/admin</div>
              </div>
            </div>
            <div className="grid-pattern aspect-video bg-white p-12">
              <div className="flex h-full items-center justify-center">
                <button className="neo-btn bg-black text-white">
                  Launch Dashboard
                  <ArrowRight className="ml-2 inline h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This is the only dashboard we use now. Everything else feels slow.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
    },
    {
      quote: "Finally, a CMS that doesn't get in the way. Just works.",
      author: "Michael Ross",
      role: "Lead Developer",
    },
    {
      quote: "Cut our load times by 60%. Team productivity up 40%.",
      author: "Emily Johnson",
      role: "Product Manager",
    },
  ];

  return (
    <section id="testimonials" className="py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 font-mono text-sm font-bold uppercase tracking-wide">
              Testimonials
            </div>
            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              TRUSTED BY TEAMS WHO SHIP FAST
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-xl font-medium text-gray-700">
              Join thousands of developers and companies using our platform to build better products.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="brutalist-border brutalist-shadow bg-white p-6"
            >
              <div className="mb-6 text-4xl font-black">&quot;</div>
              <p className="mb-6 text-lg font-bold leading-relaxed">{testimonial.quote}</p>
              <div className="border-t-[3px] border-black pt-4">
                <div className="font-black">{testimonial.author}</div>
                <div className="font-mono text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      features: ["5 Team Members", "10GB Storage", "Basic Analytics", "Email Support"],
    },
    {
      name: "Pro",
      price: "99",
      popular: true,
      features: ["20 Team Members", "100GB Storage", "Advanced Analytics", "Priority Support"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Members", "Unlimited Storage", "Custom Features", "24/7 Support"],
    },
  ];

  return (
    <section id="pricing" className="bg-black py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-sm font-bold uppercase tracking-wide text-gray-400">
            Pricing
          </div>
          <h2 className="text-5xl font-black md:text-6xl">PICK YOUR PLAN</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "brutalist-border brutalist-shadow relative bg-white p-8 text-black",
                plan.popular && "bg-[hsl(14,100%,60%)] text-white"
              )}
            >
              {plan.popular && (
                <div className="brutalist-border absolute -right-3 -top-3 bg-black px-4 py-1 font-mono text-sm font-bold uppercase text-white">
                  Popular
                </div>
              )}
              <div className="mb-2 font-mono text-sm font-bold uppercase">{plan.name}</div>
              <div className="mb-6 flex items-baseline gap-1">
                {plan.price === "Custom" ? (
                  <div className="text-5xl font-black">{plan.price}</div>
                ) : (
                  <>
                    <div className="text-2xl font-black">$</div>
                    <div className="text-6xl font-black">{plan.price}</div>
                    <div className="font-bold">/mo</div>
                  </>
                )}
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 font-bold">
                    <Check className="mt-1 h-5 w-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "neo-btn w-full",
                  plan.popular ? "bg-black text-white" : "bg-black text-white"
                )}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="brutalist-border brutalist-shadow-lg bg-[hsl(48,100%,71%)] p-12 text-center md:p-20">
          <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            READY TO BUILD FASTER?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl font-bold">
            Start using the dashboard platform built for performance. No credit card required.
          </p>
          <Link href="/admin">
            <button className="neo-btn bg-black text-xl text-white">
              Launch Dashboard Now
              <ArrowRight className="ml-2 inline h-6 w-6" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="brutalist-border h-12 w-12 bg-[hsl(14,100%,60%)]"></div>
              <span className="text-2xl font-black uppercase">CMS</span>
            </div>
            <p className="font-medium text-gray-700">
              Production-ready dashboard platform. Built with Next.js and TypeScript.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-sm font-bold uppercase">Product</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-sm font-bold uppercase">Company</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-sm font-bold uppercase">Legal</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t-[3px] border-black pt-8 text-center font-mono text-sm font-bold">
          © 2024 CMS DASHBOARD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
