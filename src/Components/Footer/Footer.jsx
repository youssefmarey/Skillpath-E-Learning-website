import React from "react";
import { contactInfo, footerLists, socialIcons } from "../../constant/data";

// import motion
import { motion } from "motion/react";
import * as variants from "../../motion/animation";

const Footer = () => {
  return (
    <footer className="pt-14 pb-8 bg-white">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Footer Top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
          {/* Footer Brand */}
          <motion.div variants={variants.fadeInUp}>
            {/* Footer Logo */}
            <div>
              <img
                src="/images/logo.png"
                alt="footer logo"
                width={150}
                height={50}
              />
            </div>
            {/* Links */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors"
                >
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
          {/* Footer List */}

          {footerLists.map((item) => (
            <motion.div variants={variants.fadeInUp} className="space-y-3" key={item.id}>
              <p className="text-lg font-semibold">{item.title}</p>
              <ul className="space-y-3">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-orange-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Profiles */}
          <motion.div variants={variants.fadeInUp}>
            <p className="text-lg font-semibold">Social Pofiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button
                  className="p-3.5 secondary-btn bg-white-97 hover:bg-white-99 hover:shadow-md transition-all"
                  key={icon.id}
                >
                  <a href="#">{<icon.icon />}</a>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Footer Bottom */}
        <motion.p variants={variants.fadeInUp} className="mt-16 lg-mt-20 text-center">
          &copy; {new Date().getFullYear()} Skillbridge. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
