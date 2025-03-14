"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Award,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: "airline" | "hotel" | "tour" | "insurance";
}

const partners: Partner[] = [
  {
    id: 1,
    name: "SkyWings Airlines",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Premium airline partner offering exclusive discounts for TripSaga customers.",
    category: "airline",
  },
  {
    id: 2,
    name: "LuxStay Hotels",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Luxury accommodations worldwide with special packages for our travelers.",
    category: "hotel",
  },
  {
    id: 3,
    name: "AdvenTours",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Expert-guided tours in exotic destinations with priority booking.",
    category: "tour",
  },
  {
    id: 4,
    name: "SafeJourney Insurance",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Comprehensive travel protection plans tailored for global explorers.",
    category: "insurance",
  },
  {
    id: 5,
    name: "OceanView Cruises",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Unforgettable cruise experiences with exclusive onboard amenities.",
    category: "tour",
  },
  {
    id: 6,
    name: "MountainRetreat Resorts",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description: "Scenic mountain getaways with special seasonal offers.",
    category: "hotel",
  },
  {
    id: 7,
    name: "GlobalPass",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Multi-destination travel passes with priority access to attractions.",
    category: "tour",
  },
  {
    id: 8,
    name: "AirConnect",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=200",
    description:
      "Regional airline partner specializing in remote destination access.",
    category: "airline",
  },
];

export default function OurAssociation() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visiblePartners, setVisiblePartners] = useState<Partner[]>(partners);
  const [currentPage, setCurrentPage] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const partnersPerPage = 4;
  const totalPages = Math.ceil(visiblePartners.length / partnersPerPage);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (activeFilter === "all") {
      setVisiblePartners(partners);
    } else {
      setVisiblePartners(
        partners.filter((partner) => partner.category === activeFilter)
      );
    }
    setCurrentPage(0);
  }, [activeFilter]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentPartners = visiblePartners.slice(
    currentPage * partnersPerPage,
    (currentPage + 1) * partnersPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-primary mb-4 section-subtitle">
            Our Trusted Associations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TripSaga partners with leading travel industry providers to ensure
            exceptional experiences for our customers worldwide.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="rounded-full"
          >
            All Partners
          </Button>
          <Button
            variant={activeFilter === "airline" ? "default" : "outline"}
            onClick={() => setActiveFilter("airline")}
            className="rounded-full"
          >
            Airlines
          </Button>
          <Button
            variant={activeFilter === "hotel" ? "default" : "outline"}
            onClick={() => setActiveFilter("hotel")}
            className="rounded-full"
          >
            Hotels
          </Button>
          <Button
            variant={activeFilter === "tour" ? "default" : "outline"}
            onClick={() => setActiveFilter("tour")}
            className="rounded-full"
          >
            Tours & Cruises
          </Button>
          <Button
            variant={activeFilter === "insurance" ? "default" : "outline"}
            onClick={() => setActiveFilter("insurance")}
            className="rounded-full"
          >
            Insurance
          </Button>
        </motion.div>

        {/* Partners Grid */}
        <div className="relative" ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + currentPage}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              exit={{ opacity: 0 }}
            >
              {currentPartners.map((partner) => (
                <motion.div key={partner.id} variants={itemVariants}>
                  <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <motion.div
                        className="mb-4 p-4 bg-white rounded-lg"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          height={500}
                          width={500}
                          alt={`${partner.name} logo`}
                          className="h-20 object-contain mx-auto"
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {partner.name}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {partner.description}
                      </p>
                      <motion.div
                        className="mt-4 w-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500"></div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled
                onClick={handlePrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous page</span>
              </Button>
              <div className="flex items-center gap-1 px-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={i === currentPage ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(i)}
                    disabled
                    className={`w-8 h-8 p-0 ${
                      i === currentPage ? "" : "text-gray-500"
                    } rounded-full`}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                disabled
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          )}
        </div>

        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-2"
            >
              <Globe className="h-10 w-10 text-sky-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-800"
            >
              50+
            </motion.h3>
            <p className="text-gray-600">Global Partners</p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-2"
            >
              <Award className="h-10 w-10 text-indigo-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-800"
            >
              12
            </motion.h3>
            <p className="text-gray-600">Industry Awards</p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-2"
            >
              <Shield className="h-10 w-10 text-emerald-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-gray-800"
            >
              100%
            </motion.h3>
            <p className="text-gray-600">Secure Bookings</p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-2"
            >
              <Users className="h-10 w-10 text-amber-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold text-gray-800"
            >
              1M+
            </motion.h3>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
