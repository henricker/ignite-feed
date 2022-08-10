import { PostType } from "../../../interfaces/posts";
import { PostComments } from "./PostComments";
import { PostGiveFeedback } from "./PostGiveFeedback";
import { PostHeader } from "./PostHeader";
import { PostText } from "./PostText";
import { PostContainer, PostContent } from "./style";

type PostProps = {
  post: PostType;

  handleAddComment: (comment: any) => void;
  handleDeleteComment: (data: {
    post_id: number | string;
    comment_id: number | string;
  }) => void;
};

export const Post = ({
  post,
  handleAddComment,
  handleDeleteComment,
}: PostProps) => {
  return (
    <PostContainer>
      <PostContent>
        <PostHeader
          name={post.profile.name}
          profession={post.profile.profession}
          publishedAt={post.profile.publishedAt}
          srcAvatar={post.profile.srcAvatar}
        />
        <PostText
          hashtags={post.hashtags}
          portfolioLink={post.portfolioLink}
          text={post.text}
        />
        <PostGiveFeedback
          handleAddComment={handleAddComment}
          post_id={post.id}
        />
        <PostComments
          comments={post.comments}
          handleDeleteComment={handleDeleteComment}
        />
      </PostContent>
    </PostContainer>
  );
};
