import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import iconclose from "./../../rock-paper-scissors-master/images/icon-close.svg";
import rulesforadvanced from "./../../rock-paper-scissors-master/images/image-rules-bonus.svg";
import rulesfornormal from "./../../rock-paper-scissors-master/images/image-rules.svg";

type RulesProps = {
  advanced: boolean;
  setopen?: any;
  open?: boolean;
};

export const Rules: FunctionComponent<RulesProps> = ({
  open,
  advanced,
  setopen,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="rules absolute top-0 lg:top-[50%] left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] w-[100%] lg:w-[40%] h-[100%] lg:h-[65%] bg-white p-5 lg:p-8 max-h-[100%] lg:max-h-[650px] shadow-xl "
          onClick={() => setopen()}
        >
          <div className="title flex justify-between items-center text-blue-900 uppercase">
            <h1>Rules</h1>
            <img src={iconclose} alt="close" width="100" height="100" className="w-[6%] h-[6%] grid place-items-center " />
          </div>
          <div className="w-full h-full grid place-items-center">
            {advanced ? (
              <img src={rulesforadvanced} alt="rules for advanced" />
            ) : (
              <>
                <img src={rulesfornormal} alt="rules for normal" />
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
