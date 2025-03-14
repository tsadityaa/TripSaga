"use client";

import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/hero";
import AboutUs from "@/components/home/about-us";
import { Button } from "@/components/ui/button";
import UpcomingTrips from "@/components/home/upcoming-trips";
import OurAssociation from "@/components/home/associations";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <HeroSection />
      <UpcomingTrips />
      <AboutUs />
      <OurAssociation />

      <section className="py-20 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-primary/5 p-12 rounded-xl border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have experienced the world with
            TripSaga. Your next unforgettable journey is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-primary section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Follow Our Journey
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  <Icon className="h-8 w-8" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
