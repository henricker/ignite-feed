import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/auth";
import { UsePostsProvider } from "./pages/Posts/Post/hooks/usePosts";
import { Posts } from "./pages/Posts/Posts";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <Header />
        <UsePostsProvider>
          <Posts />
        </UsePostsProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
