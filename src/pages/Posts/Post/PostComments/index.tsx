import { CommentPostType } from "../../../../interfaces/posts";
import { PostComment } from "./PostComment";
import { PostCommentsContainer } from "./style";
import { useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type PostCommentsProps = {
  comments: CommentPostType[];
  showComments: boolean;
  handleDeleteComment: (data: {
    post_id: number | string;
    comment_id: number | string;
  }) => void;
};

export const PostComments = ({
  comments,
  showComments,
  handleDeleteComment,
}: PostCommentsProps) => {
  const [displayState, setDisplayState] = useState<string>("none");
  const [firstRender, setFirstRender] = useState(true);
  const animationOpenComments = {
    animate: {
      opacity: 1,
      y: 0,
    },
    initial: {
      y: -100,
      opacity: 0,
    },
  };

  const animationCloseComments = {
    animate: {
      opacity: 0,
      y: -100,
    },
    initial: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (showComments) {
      setDisplayState("block");
    }
  }, [showComments]);

  return (
    <PostCommentsContainer
      transition={{
        type: "spring",
        delay: 0.1,
      }}
      {...(showComments ? animationOpenComments : animationCloseComments)}
      onAnimationComplete={() => {
        !showComments && !firstRender && setDisplayState("none");
      }}
      style={{
        display: displayState,
      }}
    >
      {comments.length > 0 &&
        comments.map((comment) => (
          <PostComment
            key={comment.id}
            comment={comment.comment}
            isMe={comment.isMe}
            profile={comment.profile}
            publishedAt={comment.publishedAt}
            likes={comment.likes}
            handleDeleteComment={handleDeleteComment}
            id={comment.id}
            post_id={comment.post_id}
          />
        ))}
    </PostCommentsContainer>
  );
};
