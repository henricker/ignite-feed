import { createContext, useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth";
import { CommentPostType, PostType } from "../../../interfaces/posts";
import AvatarMocked2 from "../../../assets/mock/avatar2.svg";
import AvatarMocked3 from "../../../assets/mock/avatar3.png";

type UsePostsContextProps = {
  posts: PostType[];
  handleAddComment: (comment: CommentPostType) => void;
  handleDeleteComment: ({
    comment_id,
    post_id,
  }: {
    post_id: number | string;
    comment_id: number | string;
  }) => void;
};

const UsePostsContext = createContext({} as UsePostsContextProps);

export const UsePostsProvider = ({ children }: { children: any }) => {
  const auth = useContext(AuthContext);
  const [posts, setPosts] = useState([
    {
      id: 2,
      profile: {
        name: "Jim Brown",
        profession: "Dev Back-End",
        publishedAt: new Date("2022-08-10 00:00:00"),
        srcAvatar: AvatarMocked3,
      },
      portfolioLink: "jane.design/discordBotMusic",
      text: `Hi bros! 👋. I finish my project, your name is youtube discord bot!🚀`,
      hashtags: ["#newbot", "#nlw", "#everybotting"],
      comments: [
        {
          profile: {
            srcAvatar: auth.profile.srcAvatar,
            name: "Henrique Vieira",
            profession: "Web Developer",
          },
          post_id: 2,
          comment: "Very good ma babe",
          likes: 10,
          publishedAt: new Date("2022-08-08 13:00:00"),
          id: 1,
          isMe: true,
        },
      ],
    },
    {
      id: 1,
      profile: {
        name: "Jane Cooper",
        profession: "Dev Front-End",
        publishedAt: new Date("2022-08-07 00:00:00"),
        srcAvatar: AvatarMocked2,
      },
      portfolioLink: "jane.design/doctorcare",
      text: `Fala galeraa 👋. Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      hashtags: ["#novoprojeto", "#nlw", "#rocketseat"],
      comments: [
        {
          profile: {
            srcAvatar: auth.profile.srcAvatar,
            name: "Henrique Vieira",
            profession: "Web Developer",
          },
          post_id: 1,
          comment: "Great JOB!, I'm very happy with the result!",
          likes: 10,
          publishedAt: new Date("2022-08-08 13:00:00"),
          id: 1,
          isMe: true,
        },
      ],
    },
  ]);

  const handleAddComment = useCallback(
    (comment: CommentPostType) => {
      const post = { ...posts.find((post) => post.id === comment.post_id)! };
      post.comments.push(comment as any);
      const postsFilter = posts.filter((post) => post.id !== comment.post_id);

      setPosts([...postsFilter, post].sort((a, b) => b.id - a.id));
    },
    [posts]
  );

  const handleDeleteComment = useCallback(
    ({
      comment_id,
      post_id,
    }: {
      post_id: number | string;
      comment_id: number | string;
    }) => {
      console.log(comment_id, post_id);
      const post = { ...posts.find((post) => post.id === post_id)! };
      post.comments = post.comments.filter(
        (comment) => comment.id !== comment_id
      );

      console.log(post.comments);
      const postsFilter = posts.filter((post) => post.id !== post_id);

      setPosts([...postsFilter, post].sort((a, b) => b.id - a.id));
    },
    [posts]
  );

  return (
    <UsePostsContext.Provider
      value={{
        posts,
        handleAddComment,
        handleDeleteComment,
      }}
    >
      {children}
    </UsePostsContext.Provider>
  );
};

export const usePosts = () => useContext(UsePostsContext);
