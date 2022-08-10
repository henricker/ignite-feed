import { CommentBox } from "./CommentBox";
import { ReactionComment } from "./ReactionComment";
import {
  LikesAndCommentBoxContainer,
  PostCommentAvatar,
  PostCommentContainer,
  PostContentContainer,
} from "./style";

type PostCommentProps = {
  id: number | string;
  profile: {
    srcAvatar: string;
    name: string;
    profession: string;
  };
  post_id: number | string;
  comment: string;
  likes: number;
  publishedAt: Date;
  isMe: boolean;

  handleDeleteComment: (data: {
    post_id: number | string;
    comment_id: number | string;
  }) => void;
};

export const PostComment = ({
  comment,
  isMe,
  profile,
  likes,
  publishedAt,
  post_id,
  id,
  handleDeleteComment,
}: PostCommentProps) => {
  return (
    <PostCommentContainer>
      <PostContentContainer>
        <PostCommentAvatar src={profile.srcAvatar} />
        <LikesAndCommentBoxContainer>
          <CommentBox
            publishedAt={publishedAt}
            comment={comment}
            isMe={isMe}
            name={profile.name}
            id={id}
            post_id={post_id}
            handleDeleteComment={handleDeleteComment}
          />
          <ReactionComment likes={likes} />
        </LikesAndCommentBoxContainer>
      </PostContentContainer>
    </PostCommentContainer>
  );
};
