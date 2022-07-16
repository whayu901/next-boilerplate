import React from "react";
import { motion } from "framer-motion";

interface Props {
  children?: React.ReactNode;
  delay?: number;
  className?: any;
  id?: string;
}

const Section = ({ children, delay = 0.8, className, id }: Props) => (
  <motion.section
    id={id}
    className={className}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.8 }}
  >
    {children}
  </motion.section>
);

export default Section;
