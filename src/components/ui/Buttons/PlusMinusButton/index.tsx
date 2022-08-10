import { TransparentButton } from "../TransparentButton";
import { useEffect, useState } from "react";
import { PlusIcon } from "../../icons/Plus";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

type PlusMinusButtonProps = {
  OnPlusMessage: string;
  OnMinusMessage: string;
  isActive?: boolean;
  setIsActive?: (isActive: boolean) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PlusMinusButton({
  children,
  OnMinusMessage,
  OnPlusMessage,
  onClick,
  isActive,
  setIsActive,
  ...rest
}: PlusMinusButtonProps) {
  const [currentIcon, setCurrentIcon] = useState(<PlusIcon />);
  const [currentMessage, setCurrentMessage] = useState(OnPlusMessage);
  useEffect(() => {
    if (isActive) {
      setCurrentIcon(<AiOutlineMinusCircle color="#00B37E" size="1.5rem" />);
      setCurrentMessage(OnMinusMessage);
    } else {
      setCurrentIcon(<AiOutlinePlusCircle color="#00B37E" size="1.5rem" />);
      setCurrentMessage(OnPlusMessage);
    }
  }, [isActive]);

  function handleOnClick() {
    setIsActive && setIsActive(!isActive);
  }

  return (
    <TransparentButton
      style={{ fontSize: ".6rem" }}
      icon={currentIcon}
      onClick={handleOnClick}
      {...rest}
    >
      {currentMessage}
    </TransparentButton>
  );
}
