import React from 'react'

// import motion
import { motion } from "motion/react";
import * as variants from "../../motion/animation";

const Title = ({title , text , link}) => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-4' >
        <div className="">
            <motion.h2 variants={variants.fadeInUp}>{title}</motion.h2>
            <motion.p variants={variants.fadeInUp} className='max-w-[640px] mt-4 mb-6' >{text}</motion.p>
        </div>

        <motion.button variants={variants.fadeInUp} className='secondary-btn' >{link}</motion.button>
    </div>
  )
}

export default Title