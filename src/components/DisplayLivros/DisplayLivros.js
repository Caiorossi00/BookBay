import React from "react";
import "./DisplayLivros.css";
import BookList from "../BookList/BookList";
import AddToCartButton from "../AddToCart/AddToCart";

const DisplayLivros = ({ adicionarAoCarrinho }) => {
  const livrosDisponiveis = BookList.filter(
    (livro) => livro.disponivel === "sim"
  );
  const livrosIndisponiveis = BookList.filter(
    (livro) => livro.disponivel === "não"
  );

  return (
    <div>
      <main id="livros-container">
        {livrosDisponiveis.map((livro) => (
          <div key={livro.id} className="livro">
            <img src={livro.imageUrl} alt={livro.title} />
            <h1>{livro.title}</h1>
            <p>{livro.author}</p>
            <p>{livro.price}</p>
            <AddToCartButton onClick={() => adicionarAoCarrinho(livro)} />
          </div>
        ))}
        {livrosIndisponiveis.map((livro) => (
          <div key={livro.id} className="livro">
            <img
              src={livro.imageUrl}
              alt={livro.title}
              style={{ filter: "grayscale(100%)" }}
            />
            <h1>{livro.title}</h1>
            <p style={{ marginBottom: "2em" }}>{livro.author}</p>
            {livro.disponivel === "sim" && <p>{livro.price}</p>}
          </div>
        ))}
      </main>
    </div>
  );
};

export default DisplayLivros;
