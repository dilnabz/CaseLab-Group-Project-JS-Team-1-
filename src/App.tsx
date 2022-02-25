import React from "react";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  let pageContent;
  const menuValue = useSelector((state: RootState) => state.menu);

  switch (menuValue) {
    case "main":
      pageContent = <Main></Main>;
      break;
    case "menu":
      pageContent = <Menu></Menu>;
      break;
    case "contacts":
      pageContent = <Contacts></Contacts>;
      break;
    case "cart":
      pageContent = <Cart></Cart>;
      break;
    default:
      pageContent = <Main></Main>;
  }
  return (
    <div className="App">
      <Header></Header>
      {pageContent}
      <Footer></Footer>
    </div>
  );
}

export default App;
