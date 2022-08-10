export type CommentPostType = {
  profile: {
    srcAvatar: string;
    name: string;
    profession: string;
  };
  post_id: number;
  comment: string;
  likes: number;
  publishedAt: Date;
  id: number | string;
  isMe: boolean;
};

export type PostType = {
  id: number;
  profile: {
    name: string;
    profession: string;
    publishedAt: Date;
    srcAvatar: string;
  };
  portfolioLink: string;
  text: string;
  hashtags: string[];
  comments: CommentPostType[];
};
