import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import PlayButtons from "./PlayButtons";
import bgpentagon from "./../../rock-paper-scissors-master/images/bg-pentagon.svg";
import bgtriangle from "./../../rock-paper-scissors-master/images/bg-triangle.svg";

type RulesProps = {
  advanced: boolean;
  setopen?: any;
  open?: boolean;
};

export const Play: FunctionComponent<RulesProps> = ({ advanced }) => {
  return (
    <motion.div
      initial={{ rotate: 360 }}
      animate={{ rotate: 0 }}
      exit={{ rotate: 360 }}
      className="w-[100%] h-[60vh] grid place-items-center relative"
    >
      {advanced ? (
        <img src={bgpentagon}/>
      ) : (
        <img src={bgtriangle}/>
      )}
      <PlayButtons advanced={advanced} />
    </motion.div>
  );
};
