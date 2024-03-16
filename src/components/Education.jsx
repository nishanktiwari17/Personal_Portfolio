import React from "react";
import Tilt from "react-tilt";
import syracuse from "../assets/syracuse.png"
import mumbai from "../assets/mumbai.svg"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Education = () => {
      return (
        <>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.div>
    
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 flex items-center">
            <motion.img
                src={syracuse}
                alt="Your Image"
                style={{ width: "100px", height: "auto" }}
                whileHover={{ scale: 1.1 }}
            />
            <motion.div>
            <motion.p
              className='mt-4 text-secondary text-[24px] max-w-3xl leading-[30px]'
            >
              Syracuse University | <span class="text-sm">Aug 2023 - May 2025</span>
            </motion.p>
            <motion.p
              className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              Master's in Computer and Information Sciences
            </motion.p>
            </motion.div>
          </motion.div>
    
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-8 flex items-center">
            <motion.img
                src={mumbai}
                alt="Your Image"
                style={{ width: "100px", height: "auto" }}
                whileHover={{ scale: 1.1 }}
            />
            <motion.div>
            <motion.p
              className='mt-4 text-secondary text-[24px] max-w-3xl leading-[30px]'
            >
              University of Mumbai | <span class="text-sm">Aug 2018 - May 2022</span>
            </motion.p>
            <motion.p
              className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              Bachelor's in Computer Engineering
            </motion.p>
            </motion.div>
          </motion.div>
        </>
      );
};

export default SectionWrapper(Education, "education");
