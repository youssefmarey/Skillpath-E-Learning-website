import React, { useState } from "react";
import Title from "../Title/Title";
import { faqItems } from "../../constant/data";
import { RiAddLine } from "@remixicon/react";

// import motion
import { motion } from "motion/react";
import * as variants from "../../motion/animation";

const FaqSec = () => {
  const [openId, setOpenId] = useState(faqItems[0].id ?? null);
  const handeClick = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="section pb-[90px] lg:pb-[160px] ">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10">
          {/* Title */}
          <Title
            title="Frequently Asked Questions"
            text="Still you have any questions? Contact our Team via support@skillpath.com"
            link="See All FAQ’s"
          />
          {/* Qustion */}
          <div className="border border-white-95 grid p-6">
            {faqItems.map((item) => (
              // Qustion
              <motion.div variants={variants.fadeInUp} className="space-y-3.5" key={item.id}>
                {/* title */}
                <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                  <h4 className="text-lg sm:text-xl">{item.title}</h4>
                  <button
                    onClick={() => handeClick(item.id)}
                    className="w-10 h-10 bg-orange-75 flex items-center justify-center rounded-xl aspect-square hover:bg-orange-75/80 transition-colors"
                  >
                    <RiAddLine
                      className={` transition ${
                        openId === item.id ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </div>
                {/* text */}
                <div
                  className={`max-h-0 overflow-y-hidden transition-all ${
                    openId === item.id ? "max-h-[200px]" : ""
                  }`}
                >
                  <p className="px-5 pb-3">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSec;
