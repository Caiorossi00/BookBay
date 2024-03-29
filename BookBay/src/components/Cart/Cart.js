import React from "react";
import "./Cart.css";

const Cart = ({ carrinho, removerItemCarrinho }) => {
  const totalPrice = Object.values(carrinho)
    .reduce((total, item) => {
      return total + parseFloat(item.price.slice(2));
    }, 0)
    .toFixed(2);

  const handleComprar = () => {
    const itensCarrinho = Object.values(carrinho).map((item) => {
      return `${item.title} - R$${item.price.slice(2)}`;
    });

    const mensagem = encodeURIComponent(
      `Estou interessado nos seguintes livros: ${itensCarrinho}`
    );
    const link = `https://wa.me/53984158694/?text=${mensagem}`;
    window.open(link);
  };

  return (
    <>
      <div className="cart-message">
        <h1>Seu carrinho:</h1>
      </div>
      <div className="cart-container">
        {Object.values(carrinho).map((item) => (
          <div className="item-cart" key={item.id}>
            <div className="item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="cart-item-details">
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => {
                console.log("Removendo o item:", item);
                removerItemCarrinho(item);
              }}
            >
              {window.innerWidth > 768 ? "Remover" : "x"}
            </button>
          </div>
        ))}
        {parseFloat(totalPrice) > 0 && (
          <div className="buy-container">
            <span className="total">Total: R${totalPrice}</span>
            <button className="buy-button" onClick={handleComprar}>
              Comprar
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
