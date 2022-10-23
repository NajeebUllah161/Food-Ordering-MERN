import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/profile.jpeg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Najeeb Ullah Khan</h3>
        <p>
          Hey, Everyone I am Najeeb Ullah Khan, the founder of MBA Burger Wala.
          <br />
          Our aim is to make the most tasties burgers on planet
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
