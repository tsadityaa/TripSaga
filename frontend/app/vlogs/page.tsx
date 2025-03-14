"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Play } from "lucide-react";

const vlogs = [
  {
    title: "Exploring the Streets of Jaipur",
    thumbnail:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800",
    duration: "15:30",
    views: "12K",
    type: "Travel Stories",
  },
  {
    title: "Kerala Backwaters Experience",
    thumbnail:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
    duration: "12:45",
    views: "8.5K",
    type: "Customer Experiences",
  },
  {
    title: "Hidden Gems of Ladakh",
    thumbnail:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
    duration: "18:20",
    views: "15K",
    type: "Destination Highlights",
  },
  {
    title: "Varanasi: A Spiritual Journey",
    thumbnail:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800",
    duration: "20:15",
    views: "10K",
    type: "Travel Stories",
  },
];

export default function Vlogs() {
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
            Travel Vlogs
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Experience destinations through our eyes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((vlog, index) => (
            <motion.div
              key={vlog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {vlog.duration}
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-primary mb-2 block">
                    {vlog.type}
                  </span>
                  <h3 className="font-semibold mb-2">{vlog.title}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {vlog.views} views
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
