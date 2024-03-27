import React, { useState, useEffect } from "react";
import "./TopPicks.css";

const pickedBooks = [
  {
    titulo: "Watchmen",
    frase: `"O mundo vai olhar para cima e gritar 'Salvem-nos!'... e eu vou sussurrar 'Não'." Rorschach`,
    capa: "https://m.media-amazon.com/images/I/81IOAiyRD+L._AC_UF1000,1000_QL80_.jpg",
    foto: "https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2018/10/04/764601/20181004165541491942a.jpeg",
    sinopse: `
    Uma saga distópica que mergulha em uma América alternativa, onde vigilantes mascarados coexistem com a política global dos anos 1980. Após o assassinato de um ex-herói, uma trama complexa se desenrola, revelando uma conspiração que ameaça o mundo. Os personagens são confrontados com dilemas morais enquanto enfrentam suas próprias jornadas pessoais, explorando temas profundos como moralidade, poder e identidade em uma narrativa densa e multifacetada.
    `,
  },
  {
    titulo: "Farenheit 451",
    frase: `“Encha seus olhos de admiração. Viva como se fosse cair morto daqui a dez segundos. Veja o mundo. Ele é mais fantástico do que qualquer sonho que se possa produzir nas fábricas.”`,
    capa: "https://m.media-amazon.com/images/I/41PVVpQf-sL._SY445_SX342_.jpg",
    foto: "https://miro.medium.com/v2/resize:fit:600/1*XNNRuiQyceFOAXDF3njp4g.jpeg",
    sinopse: `Ray Bradbury retrata uma sociedade distópica onde os livros são proibidos e queimados pelos bombeiros. Montag, um desses bombeiros, questiona seu papel na destruição do conhecimento e começa a desafiar o status quo. Nessa jornada de autodescoberta, ele enfrenta as consequências de desafiar a autoridade e lutar pela liberdade intelectual.`,
  },
  {
    titulo: "Memórias do Subsolo",
    frase: `“O que é melhor, uma felicidade barata ou um sofrimento elevado?”`,
    capa: "https://m.media-amazon.com/images/I/81B8n0OCzTL._SY466_.jpg",
    foto: "https://humanumreview.com/uploads/images/Ale-Oni-Trudni.jpg",
    sinopse: `Fiódor Dostoiévski mergulha nas profundezas da psique humana por meio das reflexões de um narrador alienado e autodepreciativo. Nesta obra, ele explora temas como o livre-arbítrio, a solidão e a natureza contraditória do ser humano, oferecendo uma análise penetrante da condição humana e das complexidades da existência.`,
  },
  {
    titulo: "Os sofrimentos do jovem Werther",
    frase: `"É verdade que o caminho seria mais curto e mais cômodo se não fosse a montanha; mas a montanha existe e é preciso seguir viagem!"`,
    capa: "https://m.media-amazon.com/images/I/81YXaYDupkL._SY466_.jpg",
    foto: "https://www.ufsm.br/midias/arco/wp-content/uploads/sites/601/2019/09/goethe-meio-1024x668.jpg",
    sinopse: `Johann Wolfgang von Goethe narra a paixão arrebatadora de Werther por Charlotte, que é comprometida com outro homem. A história explora os temas do amor não correspondido, angústia existencial e desespero, levando o protagonista a um trágico destino. Esta obra seminal influenciou profundamente o movimento literário do romantismo.`,
  },
  {
    titulo: "O Escultor",
    frase: `“Paixão e dedicação são as chaves para desbloquear a grandeza”`,
    capa: "https://m.media-amazon.com/images/I/91P2sM-saJL._SY466_.jpg",
    foto: "https://media.wnyc.org/i/800/0/c/85/1/Sculptor-FINAL-98_MAIN.jpg",
    sinopse: `Scott McCloudconta a história de David Smith, um escultor talentoso que faz um pacto com a Morte para ter o poder de criar qualquer coisa com suas mãos, mas com a condição de ter apenas 200 dias de vida. A narrativa aborda temas como arte, mortalidade, amor e redenção, em uma jornada emocionante e reflexiva.`,
  },
  {
    titulo: "Black Hole",
    frase: `"O universo é um lugar muito grande, cheio de tudo o que você pode imaginar e muito mais além. E no meio disso tudo, não estamos sozinhos. Somos apenas um pequeno pedaço de um grande quebra-cabeça."`,
    capa: "https://m.media-amazon.com/images/I/61WeDSijomL._AC_UF1000,1000_QL80_.jpg",
    foto: "https://vitralizado.com/wp-content/uploads/2018/05/BlackHole2B.jpg",
    sinopse: `Uma graphic novel surreal e perturbadora que se passa em Seattle nos anos 1970. Quando uma estranha doença sexualmente transmissível começa a se espalhar entre os adolescentes, causando deformidades físicas bizarros, a cidade mergulha no caos. A história segue um grupo de jovens enquanto lidam com seus próprios medos, desejos e alienação, em meio a uma atmosfera sombria e inquietante.`,
  },
];

const TopPicks = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {pickedBooks.map((livro, index) => (
        <div className={`container-${index % 2 === 0 ? "1" : "2"}`} key={index}>
          <div className={`esquerda-${index % 2 === 0 ? "1" : "2"}`}>
            <img src={livro.capa} alt="" />
            <h1>
              {index + 1}. {livro.titulo}
            </h1>
            <div className={`texto-esquerda-${index % 2 === 0 ? "1" : "2"}`}>
              <hr />
              <p>{livro.frase}</p>
              <hr />
              {windowWidth < 768 && <p>{livro.sinopse}</p>}
            </div>
          </div>
          <div className={`direita-${index % 2 === 0 ? "1" : "2"}`}>
            {windowWidth >= 768 && <img src={livro.foto} alt="" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPicks;
