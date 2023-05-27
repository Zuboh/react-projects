import { Fragment, MouseEventHandler } from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <Fragment>
      <button onClick={onClick}>
        <WavingHandIcon className="color" />
      </button>
    </Fragment>
  );
};

export default Button;
