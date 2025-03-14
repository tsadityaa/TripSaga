import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export default function UpcomingTrips() {
  const upcomingTrips = [
    {
      title: "Mystical Rajasthan",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800",
      price: "₹45,000",
      duration: "7 Days",
      location: "Jaipur, Udaipur, Jodhpur",
    },
    {
      title: "Kerala Backwaters",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
      price: "₹35,000",
      duration: "5 Days",
      location: "Alleppey, Munnar, Kochi",
    },
    {
      title: "Himalayan Adventure",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      price: "₹55,000",
      duration: "8 Days",
      location: "Manali, Leh, Ladakh",
    },
  ];

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
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 section-subtitle text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Trips
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {upcomingTrips.map((trip, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <CardContainer className="inter-var overflow-auto">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {trip.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {trip.location}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-primary font-bold">{trip.price}</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {trip.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      href="#!"
                      target="__blank"
                      className="py-2 rounded-xl text-xs font-normal dark:text-white hover:underline cursor-pointer"
                    >
                      View Details →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Book Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
