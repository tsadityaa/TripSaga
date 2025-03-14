"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Globe, Compass } from "lucide-react";
import Image from "next/image";

const guides = [
  {
    title: "Best Time to Visit India",
    category: "Travel Tips",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800",
    description:
      "Learn about the ideal seasons and weather conditions for visiting different regions in India.",
  },
  {
    title: "Understanding Indian Culture",
    category: "Cultural Insights",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800",
    description:
      "A comprehensive guide to Indian customs, traditions, and etiquette for travelers.",
  },
  {
    title: "Local Transportation Guide",
    category: "Travel Tips",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800",
    description:
      "Navigate through India's diverse transportation options with our expert tips.",
  },
  {
    title: "Indian Cuisine Guide",
    category: "Food & Dining",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800",
    description:
      "Explore the rich flavors and regional specialties of Indian cuisine.",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Destination Insights",
    description: "In-depth information about popular destinations",
  },
  {
    icon: Calendar,
    title: "Seasonal Guides",
    description: "Best times to visit different locations",
  },
  {
    icon: Globe,
    title: "Cultural Tips",
    description: "Understanding local customs and traditions",
  },
  {
    icon: Compass,
    title: "Travel Routes",
    description: "Recommended itineraries and routes",
  },
];

export default function Guide() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl text-primary section-subtitle mb-4">
            Travel Guide
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Your comprehensive guide to traveling in India
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <feature.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary mb-2 block">
                    {guide.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {guide.description}
                  </p>
                  <Button className="w-full">Read More</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
