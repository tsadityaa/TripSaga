"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = [
  {
    title: "India Inbound",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800",
    packages: [
      { name: "Golden Triangle Tour", duration: "6 Days", price: "₹30,000" },
      { name: "Kerala Experience", duration: "7 Days", price: "₹35,000" },
    ],
  },
  {
    title: "Domestic Travel",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800",
    packages: [
      { name: "Goa Beach Holiday", duration: "4 Days", price: "₹20,000" },
      { name: "Kashmir Valley", duration: "5 Days", price: "₹25,000" },
    ],
  },
  {
    title: "India Outbound",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800",
    packages: [
      { name: "Dubai Delights", duration: "5 Days", price: "₹45,000" },
      { name: "Singapore Splendor", duration: "6 Days", price: "₹50,000" },
    ],
  },
  {
    title: "International Trips",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=800",
    packages: [
      { name: "European Explorer", duration: "10 Days", price: "₹1,50,000" },
      { name: "Thailand Adventure", duration: "7 Days", price: "₹55,000" },
    ],
  },
  {
    title: "India Pilgrimage",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800",
    packages: [
      { name: "Char Dham Yatra", duration: "12 Days", price: "₹45,000" },
      { name: "Varanasi Special", duration: "4 Days", price: "₹20,000" },
    ],
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen pt-20 bg-muted dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl text-primary mb-4 section-subtitle">
            Travel Packages
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our curated collection of travel experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  {category.packages.map((pkg, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{pkg.name}</h4>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">
                          {pkg.price}
                        </span>
                        <Button size="sm">Book Now</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
