import { ApplaudText, ReactionCommentContainer } from "./style";
import { useState } from "react";
import { GrLike } from "react-icons/gr";
import { LikeIcon } from "../../../../../../components/ui/icons/Like";

type ReactionCommentProps = {
  likes: number;
};

export const ReactionComment = ({ likes }: ReactionCommentProps) => {
  const [active, setActive] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  function handleClick() {
    setActive(!active);

    if (active) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  }

  return (
    <ReactionCommentContainer isSelected={active}>
      <LikeIcon color={active ? "#00B37E" : "#8d8d99"} onClick={handleClick} />
      <ApplaudText>Aplaudir • {likesCount}</ApplaudText>
    </ReactionCommentContainer>
  );
};
