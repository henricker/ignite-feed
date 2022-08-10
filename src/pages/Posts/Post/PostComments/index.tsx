import { CommentPostType } from "../../../../interfaces/posts";
import { PostComment } from "./PostComment";
import { PostCommentsContainer } from "./style";
type PostCommentsProps = {
  comments: CommentPostType[];

  handleDeleteComment: (data: {
    post_id: number | string;
    comment_id: number | string;
  }) => void;
};

export const PostComments = ({
  comments,
  handleDeleteComment,
}: PostCommentsProps) => {
  return (
    <PostCommentsContainer>
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
