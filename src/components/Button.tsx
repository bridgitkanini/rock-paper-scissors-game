import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type ButtonProps = {
  className: string;
  lid?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  lid,
  onClick = () => {},
}) => {
  return (
    <motion.div onClick={() => onClick()} layoutId={lid} className={className}>
      <div className="inside top-[50%] left-[50%] translate-x-[12.5%] translate-y-[12.5%] w-[80%] h-[80%] bg-white rounded-[50%] grid place-items-center shadow-slate-900">
        {children}
      </div>
    </motion.div>
  );
};

export default Button;
