import { useState } from "react";
import { PlusMinusButton } from "../../../components/ui/Buttons/PlusMinusButton";
import { PostType } from "../../../interfaces/posts";
import { PostComments } from "./PostComments";
import { PostGiveFeedback } from "./PostGiveFeedback";
import { PostHeader } from "./PostHeader";
import { PostText } from "./PostText";
import { PostContainer, PostContent } from "./style";

type PostProps = {
  post: PostType;
};

export const Post = ({ post }: PostProps) => {
  const [showComments, setShowComments] = useState(false);

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
          post_id={post.id}
          setShowComments={setShowComments}
          showComments={showComments}
        />
        <PostComments showComments={showComments} comments={post.comments} />
      </PostContent>
    </PostContainer>
  );
};
