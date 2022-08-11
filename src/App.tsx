import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/auth";
import { Posts } from "./pages/Posts/Posts";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <Header />
        <Posts />
      </AuthContextProvider>
    </>
  );
}

export default App;
