import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type ButtonProps = {
  className: string;
  lid?: string;
  children?: React.ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({ className, children, lid }) => {
  return (
    <motion.div layoutId={lid} className={className}>
        <div className="top-[50%] left-[50%] translate-x-[12.5%] translate-y-[12.5%] w-[80%] h-[80%] bg-white rounded-[50%] grid place-items-center">{children}</div>
    </motion.div>
  );
};

export default Button;
