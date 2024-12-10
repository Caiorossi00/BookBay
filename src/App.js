import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TopPicks from "./components/Picks/TopPicks";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import DisplayLivros from "./components/DisplayLivros/DisplayLivros";

const App = () => {
  const [carrinho, setCarrinho] = useState({});
  const [currentContent, setCurrentContent] = useState("home");

  const adicionarAoCarrinho = (item) => {
    let itemExistente = false;
    for (const cartItem of Object.values(carrinho)) {
      if (cartItem === item) {
        itemExistente = true;
        break;
      }
    }

    if (itemExistente) {
      alert("Este item já está no carrinho!");
      return;
    }

    setCarrinho((prevCarrinho) => {
      const novoCarrinho = Array.isArray(prevCarrinho)
        ? [...prevCarrinho, item]
        : [item];
      return novoCarrinho;
    });

    alert("Seu livro foi adicionado ao carrinho!");
  };

  const removerItemCarrinho = (item) => {
    const novoCarrinho = Object.values(carrinho).filter(
      (cartItem) => cartItem.title !== item.title
    );
    setCarrinho(novoCarrinho);
  };

  const renderContent = () => {
    switch (currentContent) {
      case "home":
        return <DisplayLivros adicionarAoCarrinho={adicionarAoCarrinho} />;
      case "topPicks":
        return <TopPicks />;
      case "cart":
        return (
          <Cart carrinho={carrinho} removerItemCarrinho={removerItemCarrinho} />
        );
      default:
        return <DisplayLivros />;
    }
  };

  return (
    <div>
      <Navbar setCurrentContent={setCurrentContent} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;
