import { PostHashtags, PostLinkProject, PostTextContent } from "./style";

type PostTextProps = {
  text: string;
  portfolioLink: string;
  hashtags: string[];
};

export const PostText = ({ hashtags, portfolioLink, text }: PostTextProps) => {
  return (
    <>
      <PostTextContent>{text}</PostTextContent>
      <PostLinkProject>👉 {portfolioLink}</PostLinkProject>
      {hashtags.length > 1 && (
        <PostHashtags>{hashtags.map((h) => h + " ")}</PostHashtags>
      )}
    </>
  );
};
