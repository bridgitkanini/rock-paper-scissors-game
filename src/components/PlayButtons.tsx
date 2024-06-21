import { LayoutGroup, motion } from "framer-motion";
import { FunctionComponent } from "react";
import Button from "./Button";
import rock from "./../../rock-paper-scissors-master/images/icon-rock.svg";
import paper from "./../../rock-paper-scissors-master/images/icon-paper.svg";
import scissors from "./../../rock-paper-scissors-master/images/icon-scissors.svg";
import lizard from "./../../rock-paper-scissors-master/images/icon-lizard.svg";
import spock from "./../../rock-paper-scissors-master/images/icon-spock.svg";
type PlayButtonProps = {
  advanced: boolean;
};

const PlayButtons: FunctionComponent<PlayButtonProps> = ({ advanced }) => {
  return (
    <LayoutGroup>
      <motion.div className="absolute top-0 left-0 grid place-items-center h-full w-full">
        {advanced ? (
          <div className="h-full w-[360px] grid grid-rows-3">
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-center bg-gradient-to-r from-purple-500 to-pink-500" lid="rock">
              <img src={rock} alt="rock" />
            </Button>
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-end bg-gradient-to-r from-sky-500 to-indigo-500" lid="paper">
              <img src={paper} alt="paper" />
            </Button>
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-start -mt-24 bg-gradient-to-r from-yellow-500 to-orange-500" lid="scissors">
              <img src={scissors} alt="scissors" />
            </Button>
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-end mr-10 bg-gradient-to-r from-purple-500 to-indigo-500" lid="lizard">
              <img src={lizard} alt="lizard" />
            </Button>
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible -mt-24 ml-10 bg-gradient-to-r from-green-500 to-teal-500" lid="spock">
              <img src={spock} alt="spock" />
            </Button>
          </div>
        ) : (
          <div className="h-[360px] w-[380px] grid grid-rows-2">
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-start bg-gradient-to-r from-purple-500 to-pink-500" lid="rock">
              <img src={rock} alt="rock" />
            </Button>
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-end -mt-32 bg-gradient-to-r from-sky-500 to-indigo-500" lid="paper">
              <img src={paper} alt="paper" />
            </Button>
            <Button className="rounded-[50%] w-[100px] h-[100px] relative bg-white !visible justify-self-center self-end bg-gradient-to-r from-yellow-500 to-orange-500" lid="scissors">
              <img src={scissors} alt="scissors" />
            </Button>
          </div>
        )}
      </motion.div>
    </LayoutGroup>
  );
};

export default PlayButtons;
