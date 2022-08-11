import { createContext, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth";
import { CommentPostType, PostType } from "../../../interfaces/posts";
import AvatarMocked2 from "../../../assets/mock/avatar2.svg";

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

  function handleAddComment(comment: CommentPostType) {
    const post = { ...posts.find((post) => post.id === comment.post_id)! };
    post.comments.push(comment as any);
    const postsFilter = posts.filter((post) => post.id !== comment.post_id);

    setPosts([...postsFilter, post]);
  }

  function handleDeleteComment({
    comment_id,
    post_id,
  }: {
    post_id: number | string;
    comment_id: number | string;
  }) {
    const post = { ...posts.find((post) => post.id === post_id)! };
    post.comments = post.comments.filter(
      (comment) => comment.id !== comment_id
    );
    const postsFilter = posts.filter((post) => post.id !== post_id);

    setPosts([...postsFilter, post]);
  }

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
