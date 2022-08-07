import { countDiffTime } from "../../../util/count-diff-time";
import { ProfilePost } from "./ProfilePost/ProfilePost";
import {
  LastPublishedCounterTime,
  PostContainer,
  PostContent,
  PostHeader,
  PostText,
} from "./style";

type PostProps = {
  profile: {
    srcAvatar: string;
    name: string;
    profession: string;
    publishedAt: Date;
  };
  text: string;
  portfolioLink: string;
};

export const Post = ({
  profile: { name, profession, publishedAt, srcAvatar },
  portfolioLink,
  text,
}: PostProps) => {
  return (
    <PostContainer>
      <PostContent>
        <PostHeader>
          <ProfilePost
            name={name}
            profession={profession}
            srcAvatar={srcAvatar}
          />
          <LastPublishedCounterTime>
            Publicado há {countDiffTime(publishedAt)}
          </LastPublishedCounterTime>
        </PostHeader>
        <PostText>{text}</PostText>
      </PostContent>
    </PostContainer>
  );
};
