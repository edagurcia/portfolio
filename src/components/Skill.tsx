import { motion } from "motion/react";
import { IconsProvider } from "@/components/IconsProvider";
import { ToolBox } from "@/types";

export const Skill = ({ title, icon, width, height, className }: ToolBox) => {
  return (
    <div className="w-48 h-48 flex-shrink-0 mx-4">
      <motion.div
        className="w-full h-full bg-white dark:bg-neutral-800 rounded-xl shadow-lg flex flex-col items-center justify-center p-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IconsProvider
          icon={icon}
          width={width}
          height={height}
          className={className}
        />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
      </motion.div>
    </div>
  );
};
