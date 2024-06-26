import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import PlayButtons from "./PlayButtons";
import bgtriangle from "./../assets/rock-paper-scissors-master/images/bg-triangle.svg";
import bgpentagon from "./../assets/rock-paper-scissors-master/images/bg-pentagon.svg";


type RulesProps = {
  advanced: boolean;
  setselected: any;
};

export const Play: FunctionComponent<RulesProps> = ({
  advanced,
  setselected,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      className="container w-[100%] h-[60vh] grid place-items-center relative"
    >
      {advanced ? <img src={bgpentagon} /> : <img src={bgtriangle} />}
      <PlayButtons
        onClick={(value: number) => setselected(value)}
        advanced={advanced}
      />
    </motion.div>
  );
};
