import { LayoutGroup, motion } from "framer-motion";
import { FunctionComponent } from "react";

type HeaderProps = {
  advanced: boolean;
  score?: number;
};


export const Header: FunctionComponent<HeaderProps> = ({ advanced, score }) => {
  return (
    <LayoutGroup>
      <div className="header flex justify-between items-center uppercase w-[80%] md:w-[50%] my-1 mx-auto p-4 border border-white rounded-lg text-2xl text-white">
        <motion.div
          className={`flex flex-col justify-center ${
            advanced ? "text-base" : ""
          }`}
          layout
        >
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
          {advanced && (
            <>
              <div>Lizard</div>
              <div>Spock</div>
            </>
          )}
        </motion.div>
        <div className="bg-white p-10 w-[25%] text-center grid place-items-center h-[30%]">
          <h4 className="text-blue-800 text-base self-end">Score</h4>
          <h1 className="text-blue-950 self-start w-[40%] md:w-full">{score}</h1>
        </div>
      </div>
    </LayoutGroup>
  );
};
