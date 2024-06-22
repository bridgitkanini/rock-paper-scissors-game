import { motion } from "framer-motion";
import { FunctionComponent, useState, useEffect, Dispatch, SetStateAction } from "react";
import { GameRules } from "./../shared/rules.ts";
import { randomInt } from "./../shared/randomInt.ts";
import Button from "./Button.tsx";
import './Results.css';

type ResultsProps = {
  selected: number;
  advanced: boolean;
  setselected: Dispatch<SetStateAction<number>>;
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
  }, [advanced, selected, setscore]);

  return (
    <div
      className={
        show
          ? "results"
          : "pending"
      }
    >
      <div className="pick flex flex-col-reverse justify-evenly my-0 mx-4 items-center h-full p-1 ">
        <h3 className="p-3 mt-4">You Picked</h3>
        <motion.div
          className={
            result === "Win"
              ? "win relative rounded-[50%] scale-[9] duration-500 "
              : "house relative rounded-[50%] bg-slate-900 w-[100px] h-[100px] "
          }
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          <Button
            className={`${[
              GameRules[selected].value,
            ]} ${"Btn top-[50%] left-[50%] translate-x-[12.5%] translate-y-[12.5%] w-[80%] h-[80%] bg-white rounded-[50%] grid place-items-center"}`}
          >
            <img
              src={`./../../rock-paper-scissors-master/images/icon-${GameRules[selected].value}.svg`}
              alt=""
            />
          </Button>
        </motion.div>
      </div>

      <div className="pick flex flex-col-reverse justify-evenly my-0 mx-4 items-center h-full p-1 ">
        <h3>House Picked</h3>
        <motion.div
          className={
            result === "Lose"
              ? "win relative rounded-[50%] scale-[9] duration-500 "
              : "house relative rounded-[50%] bg-slate-900 w-[100px] h-[100px] "
          }
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          {house && (
            <Button
              className={`${[
                house,
              ]} ${"btn top-[50%] left-[50%] translate-x-[12.5%] translate-y-[12.5%] w-[80%] h-[80%] bg-white rounded-[50%] grid place-items-center"}`}
            >
              <img
                src={`./../../rock-paper-scissors-master/images/icon-${house}.svg`}
                alt=""
              />
            </Button>
          )}
        </motion.div>
      </div>
      <div className="result grid grid-cols-1 col-span-2 mb-20">
        {show && (
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}>
            <h2 className="text-3xl">You {result}</h2>
            <div
              className="playBtn bg-white text-slate-800 p-4 text-xl w-[35%] min-w-[60px] rounded-lg"
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
