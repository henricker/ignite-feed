import { PostGiveFeedback } from "./PostGiveFeedback";
import { PostHeader } from "./PostHeader";
import { PostText } from "./PostText";
import { PostContainer, PostContent } from "./style";

type PostProps = {
  profile: {
    srcAvatar: string;
    name: string;
    profession: string;
    publishedAt: Date;
  };
  text: string;
  portfolioLink: string;
  hashtags: string[];
};

export const Post = ({
  profile: { name, profession, publishedAt, srcAvatar },
  portfolioLink,
  text,
  hashtags,
}: PostProps) => {
  return (
    <PostContainer>
      <PostContent>
        <PostHeader
          name={name}
          profession={profession}
          publishedAt={publishedAt}
          srcAvatar={srcAvatar}
        />
        <PostText
          hashtags={hashtags}
          portfolioLink={portfolioLink}
          text={text}
        />
        <PostGiveFeedback />
      </PostContent>
    </PostContainer>
  );
};
