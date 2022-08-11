import { Sidebar } from "../../components/Sidebar";
import { Post } from "./Post";
import { AllPostsContainer, ContentContainer, PostsContainer } from "./style";
import { usePosts, UsePostsProvider } from "./hooks/usePosts";

export const Posts = () => {
  const { posts } = usePosts();

  return (
    <PostsContainer>
      <ContentContainer>
        <Sidebar />
        <AllPostsContainer>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </AllPostsContainer>
      </ContentContainer>
    </PostsContainer>
  );
};
