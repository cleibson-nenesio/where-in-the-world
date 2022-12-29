import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <GlobalReset />
      <Header />
      <AppRoutes />
    </>
  );
}

const GlobalReset = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default App;
