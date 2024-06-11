/* eslint-disable react/prop-types */
import Projects from "./Projects/Projects";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Portfolio({ mode }) {
  return (
    <section id="Portfolio" className={`${!mode && "text-black"} p-8`}>
      <p className="text-center text-sm opacity-[.5]">PORTFOLIO</p>
      <h1 className="text-center">
        Featured <span className="text-myColor">Projects</span>
      </h1>
      <div>
        <Projects mode={mode} />
        <motion.div
          variants={fadeIn("up", 0, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className={` flex gap-4 justify-center`}
        >
          <a
            href="https://www.linkedin.com/in/madhurpathak/"
            target="_blank"
            className="view relative"
          >
            View Linkedin
          </a>
          <a
            href="https://github.com/Madhur1707"
            target="_blank"
            className="view relative"
          >
            View Github
          </a>
        </motion.div>
      </div>
    </section>
  );
}
