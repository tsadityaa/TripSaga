"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Compass, Map, Globe, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);

  // const teamRef = useRef(null);
  // const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        

        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-primary mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl section-subtitle mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About TripSaga
          </motion.h1>
          {/* <motion.p
            className="text-lg md:text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting unforgettable journeys since 2015, we&apos;re passionate
            about transforming travel dreams into reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Our Journey
            </Button>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          style={{ opacity }}
        />
      </section>

      <motion.section
        ref={containerRef}
        className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
        style={{ opacity, y }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              TripSaga began with a simple idea: travel should be
              transformative, not transactional. Founded by a group of
              passionate travelers who believed that exploring the world should
              be accessible to everyone, we set out to create experiences that
              go beyond the ordinary.
            </p>
            <p className="text-muted-foreground mb-6">
              What started as a small team operating out of a tiny office has
              grown into a global community of travel enthusiasts, local
              experts, and cultural ambassadors. Yet, our mission remains
              unchanged – to connect people with authentic experiences that
              create lasting memories.
            </p>
            <Button variant="outline" className="mt-4">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="https://i.namu.wiki/i/kBobJDcw7LXN0tECxpFdEy17p7UEPQglVw7517nfpfA-MA8g06OPoZR4KXRWHpkMxuDA_Yw2KczKWAWfWdnuwg.webp"
              alt="Our journey"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-muted">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Countries", icon: Globe, delay: 0 },
              {
                number: "10k+",
                label: "Happy Travelers",
                icon: Users,
                delay: 0.2,
              },
              { number: "500+", label: "Destinations", icon: Map, delay: 0.4 },
              {
                number: "15+",
                label: "Years Experience",
                icon: Award,
                delay: 0.6,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: stat.delay }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At the heart of TripSaga are the values that guide everything we do.
            These principles shape our approach to travel and our relationships
            with our customers.
          </p>
        </motion.div>

        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Authenticity",
              description:
                "We believe in real experiences that connect travelers with local cultures and communities.",
              icon: Heart,
              delay: 0,
            },
            {
              title: "Sustainability",
              description:
                "We're committed to responsible travel that respects and preserves the places we visit.",
              icon: Globe,
              delay: 0.2,
            },
            {
              title: "Adventure",
              description:
                "We encourage curiosity and the spirit of discovery in every journey we create.",
              icon: Compass,
              delay: 0.4,
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: value.delay }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6 mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <section className="py-20 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind TripSaga who work tirelessly to
              create unforgettable travel experiences.
            </p>
          </motion.div>

          <div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "Alex Morgan", role: "Founder & CEO", delay: 0 },
              { name: "Jamie Chen", role: "Head of Experiences", delay: 0.2 },
              {
                name: "Sam Rodriguez",
                role: "Chief Adventure Officer",
                delay: 0.4,
              },
              {
                name: "Taylor Kim",
                role: "Customer Experience Lead",
                delay: 0.6,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: member.delay }}
                className="text-center"
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=${member.name}`}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
