import { motion } from "framer-motion";
import { FunctionComponent, useState, useEffect } from "react";
import { GameRules } from "./../shared/rules.ts";
import { randomInt } from "./../shared/randomInt.ts";
import Button from "./Button.tsx";

type ResultsProps = {
  selected: number;
  advanced: boolean;
  setselected: any;
  setscore: (callback: (score: number) => number) => void;
};

export const Results: FunctionComponent<ResultsProps> = ({
  selected,
  setselected,
  setscore,
  advanced,
}) => {
  const [result, setResult] = useState("");
  const [house, setHouse] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const randomNum = randomInt(advanced ? 5 : 3);
    const userSelected = GameRules[selected].value;

    setTimeout(() => {
      setShow(true);
      setHouse(GameRules[randomNum].value);
      if (GameRules[randomNum].beats.includes(userSelected)) {
        setResult("Lose");
        setscore((score) => score - 1);
      } else {
        if (GameRules[randomNum].value === userSelected) {
          setResult("Tie");
        } else {
          setResult("Win");
          setscore((score) => score + 1);
        }
      }
    }, 2000);
  }, []);

  return (
    <div
      className={
        show
          ? "mt-[15%] text-white w-full grid grid-cols-2 grid-rows-2 text-center items-center max-h-[560px] h-[60vh] uppercase "
          : "mt-[15%] text-white w-full grid grid-cols-2 grid-rows-2 text-center items-center max-h-[560px] h-[60vh] uppercase "
      }
    >
      <div className="flex flex-col-reverse justify-evenly my-0 mx-4 items-center h-full p-1 ">
        <h3 className="p-3 mt-4">You Picked</h3>
        <motion.div
          className={
            result === "Win"
              ? "relative rounded-[50%] scale-[9] duration-500 "
              : "rounded-[50%] bg-slate-900 w-[100px] h-[100px] "
          }
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          <Button
            className={`${[
              GameRules[selected].value,
            ]} ${"top-[50%] left-[50%] translate-x-[12.5%] translate-y-[12.5%] w-[80%] h-[80%] bg-white rounded-[50%] grid place-items-center"}`}
          >
            <img
              src={`./../../rock-paper-scissors-master/images/icon-${GameRules[selected].value}.svg`}
              alt=""
            />
          </Button>
        </motion.div>
      </div>

      <div>
        <h3>House Picked</h3>
        <motion.div
          className={
            result === "Lose"
              ? "relative rounded-[50%] scale-[9] duration-500 "
              : "rounded-[50%] bg-slate-900 w-[100px] h-[100px] "
          }
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          {house && (
            <Button
              className={`${[
                house,
              ]} ${"top-[50%] left-[50%] translate-x-[12.5%] translate-y-[12.5%] w-[80%] h-[80%] bg-white rounded-[50%] grid place-items-center"}`}
            >
              <img
                src={`./../../rock-paper-scissors-master/images/icon-${house}.svg`}
                alt=""
              />
            </Button>
          )}
        </motion.div>
      </div>
      <div className="grid-cols-1 col-span-2">
        {show && (
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}>
            <h2 className="text-3xl">You {result}</h2>
            <div
              className="bg-white text-slate-800 p-4 text-xl w-[35%] mn-w-[60px] rounded-lg grid place-items-center uppercase gap-3 "
              onClick={() => {
                setselected(-1);
                setResult("");
              }}
            >
              Play again
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
