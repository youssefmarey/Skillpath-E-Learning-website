import React from "react";
import Title from "../Title/Title";
import { benefitItems } from "./../../constant/data";
import { RiArrowRightUpLine } from "@remixicon/react";

// import motion
import { motion } from "motion/react";
import * as variants from "../../motion/animation";

const Benefits = () => {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Benefits"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
        />
        {/* Card Wrapper */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
          {benefitItems.map((item) => (
            // card
            <motion.div variants={variants.fadeInUp}
              className="bg-white p-10 flex flex-col rounded-xl"
              key={item.id}
            >
              {/* icon  */}
              <div className="bg-orange-75 w-[55%] h-24 flex justify-center items-center mx-auto rounded-xl mb-8">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>
              {/*  content */}
              <div className="mb-4 text-center space-y-3.5">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              {/* button */}
              <button className="mt-auto ml-auto border border-white-95 w-10 h-10 flex justify-center items-center rounded-md text-orange-50 transition-colors hover:bg-orange-50 hover:text-white">
                <RiArrowRightUpLine size={26} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
