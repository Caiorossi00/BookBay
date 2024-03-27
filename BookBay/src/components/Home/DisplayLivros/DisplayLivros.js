import React from "react";
import "./DisplayLivros.css";
import BookList from "../BookList/BookList";
import AddToCartButton from "../AddToCart/AddToCart";

const DisplayLivros = ({ adicionarAoCarrinho }) => {
  return (
    <div>
      <main id="livros-container">
        {BookList.map((book) => (
          <div key={book.id} className="livro">
            <img src={book.imageUrl} alt={book.title} />
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <AddToCartButton onClick={() => adicionarAoCarrinho(book)} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default DisplayLivros;
