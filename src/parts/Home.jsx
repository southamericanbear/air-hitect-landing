import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div className="title">
          <div className="lines"></div>
          <h1
            style={{
              fontWeight: "900",
            }}
          >
            dedicated to the future
          </h1>
          <div className="lines"></div>
        </div>
        <h1 className="second-h1">web template</h1>
      </motion.div>
    </div>
  );
}
