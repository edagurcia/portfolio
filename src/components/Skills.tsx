import { motion } from "motion/react";
import { Skill } from "@/components/Skill";
import { mytools } from "@/constants/toolbox";

export const Skills = () => {
  return (
    <div className="w-full overflow-hidden py-12">
      <motion.div
        className="flex"
        animate={{
          x: [-100, -(mytools.length * 224)],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...mytools, ...mytools].map((tool, i) => (
          <Skill
            key={i}
            title={tool.title}
            icon={tool.icon}
            width={tool.width}
            height={tool.height}
            className={tool.className}
          />
        ))}
      </motion.div>
    </div>
  );
};
