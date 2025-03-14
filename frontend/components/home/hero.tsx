"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Plane, Calendar } from "lucide-react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beautiful travel destination"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
      </div>

      <motion.div
        className="absolute top-20 right-20 z-10 hidden md:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Plane className="h-16 w-16 text-white/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 z-10 hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <MapPin className="h-16 w-16 text-white/30" />
      </motion.div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <motion.h1
            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Your Next <br />
            <span className="text-primary">Adventure</span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl mx-auto text-lg text-white/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore breathtaking destinations around the world with TripSaga.
            Your journey begins with a single step.
          </motion.p>
        </motion.div>

        {/* Search form */}
        <motion.div
          className="w-full max-w-4xl rounded-xl bg-white/10 backdrop-blur-md p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2  text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Where to?"
                  className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Check in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="Select date"
                  className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">
                Check out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="flex items-end">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Featured destinations */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {["Bali", "Paris", "Tokyo", "New York"].map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                {city}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
