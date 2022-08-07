import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Posts } from "./pages/Posts/Posts";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Posts />
    </>
  );
}

export default App;
