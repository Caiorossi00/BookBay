import React, { useState, useEffect } from "react";
import "./TopPicks.css";

const pickedBooks = [
  {
    titulo: "Admirável Mundo Novo",
    frase: `"As flores do campo e as paisagens têm um grave defeito: são gratuitas."`,
    capa: "https://m.media-amazon.com/images/I/61hOp6UFvCL._SY342_.jpg",
    foto: "https://t.ctcdn.com.br/ivo54iPU0HHvSwiik55nmEjGMcI=/750x422/smart/i297686.jpeg",
    sinopse: `Aldous Huxley apresenta uma distopia futurista onde a reprodução é controlada e as pessoas são condicionadas desde o nascimento. A chegada do "selvagem" John desafia as normas, expondo as falhas da busca pelo prazer e a falta de liberdade individual. A história mergulha nos dilemas éticos e existenciais, explorando as consequências de uma sociedade excessivamente controlada pelo governo.`,
  },
  {
    titulo: "O Estrangeiro",
    frase: `"Se algo vai acontecer comigo, eu quero estar lá para ver."`,
    capa: "https://m.media-amazon.com/images/I/91Sb5HdDL3L._SY466_.jpg",
    foto: "https://s26162.pcdn.co/wp-content/uploads/2020/04/81OaUF5PgLL.jpg",
    sinopse: `A narrativa acompanha a história de Meursault, um homem apático e desapegado das convenções sociais, que se vê envolvido em um crime aparentemente sem motivo. Ao longo da trama, somos levados a refletir sobre a alienação, a falta de sentido da existência e os limites da moralidade. A escrita de Camus é marcada pela simplicidade e pelo existencialismo, explorando questões profundas sobre a natureza humana e a condição do indivíduo na sociedade.`,
  },
  {
    titulo: "O Lobo da Estepe",
    frase: `"A maioria dos homens não quer nadar antes que o possa fazer. Não é engraçado? Naturalmente, não querem nadar. E, naturalmente não querem pensar: foram criados para viver e não para pensar! Isto mesmo! E quem pensa, quem faz do pensamento sua principal atividade, pode chegar muito longe com isso, mas sem dúvida estará confundindo a terra com água e um dia morrerá afogado."`,
    capa: "https://m.media-amazon.com/images/I/A1emmdNI8-L._AC_UF1000,1000_QL80_.jpg",
    foto: "https://i.pinimg.com/736x/8d/e1/85/8de185c1a243e4dc38bd195e6c634a11.jpg",
    sinopse: `Hermann Hesse mergulha nas profundezas da psique humana por meio das reflexões de um narrador alienado e autodepreciativo. Nesta obra, ele explora temas como o livre-arbítrio, a solidão e a natureza contraditória do ser humano, oferecendo uma análise penetrante da condição humana e das complexidades da existência.`,
  },
  {
    titulo: "O Homem que Passeia",
    frase: `“Quem hoje em dia se dá ao trabalho de subir em uma árvore descalço? De parar e observar as idas e vindas dos pássaros? De brincar nas poças d'água depois que a chuva passou? De devolver uma concha ao mar?”`,
    capa: "https://m.media-amazon.com/images/I/51MnWr4yTFL._SY445_SX342_.jpg",
    foto: "https://i0.wp.com/3.bp.blogspot.com/-TuXFmtcazP4/WuTc_Z2EkGI/AAAAAAAAJQU/22MiGXbb2yY4C3jyldblA1HjYiC2-5KbgCLcBGAs/s1600/20180421_162347.jpg?resize=503%2C260&ssl=1",
    sinopse: `Uma obra que explora o cotidiano e as reflexões de um homem solitário que encontra na caminhada uma forma de conexão com o mundo ao seu redor. Através das suas andanças pelas ruas de uma cidade japonesa, o protagonista encontra pequenos momentos de beleza, encontros fortuitos e reflexões sobre a vida e a passagem do tempo. Com traços delicados e uma narrativa contemplativa, Taniguchi nos convida a refletir sobre a simplicidade e a profundidade da existência humana.`,
  },
  {
    titulo: "Memórias do Subsolo",
    frase: `“Observai-vos melhor, senhores, e compreendereis que assim é. Imaginava, para mim mesmo, aventuras e inventava uma vida, para viver ao menos de algum modo. Quantas vezes me aconteceu, por exemplo, ficar ofendido não por um motivo determinado, mas intencionalmente!”`,
    capa: "https://m.media-amazon.com/images/I/81B8n0OCzTL._SY466_.jpg",
    foto: "https://i0.wp.com/theimaginativeconservative.org/wp-content/uploads/2020/06/Christ-in-the-Gethsemane-Garden-1.jpg?fit=750%2C425&ssl=1",
    sinopse: `Fiódor Dostoiévski mergulha nas profundezas da psique humana por meio das reflexões de um narrador alienado e autodepreciativo. Nesta obra, ele explora temas como o livre-arbítrio, a solidão e a natureza contraditória do ser humano, oferecendo uma análise penetrante da condição humana e das complexidades da existência.`,
  },
  {
    titulo: "O Sol é Para Todos",
    frase: `"Coragem é fazer uma coisa mesmo estando derrotado antes de começar e mesmo assim ir até o fim, apesar de tudo."`,
    capa: "https://m.media-amazon.com/images/I/91WKPd60P4L._SY466_.jpg",
    foto: "https://cdn.discordapp.com/attachments/1160998442001252543/1224793401501683773/image.png?ex=661ec8be&is=660c53be&hm=a484760d52358497cf6c698698b4c01cea71ac4e5089b653f083a3b281210a8e&",
    sinopse: `Ambientado na América dos anos 1930. A narrativa, vista pelos olhos da jovem Scout Finch, expõe as complexidades do sistema judicial e preconceitos raciais através do julgamento de um homem negro acusado injustamente. Com sensibilidade, a autora aborda temas como empatia, moralidade e justiça social, criando um retrato marcante da luta contra o preconceito e pela igualdade em uma sociedade dividida.`,
  },
  {
    titulo: "Os sofrimentos do jovem Werther",
    frase: `"É verdade que o caminho seria mais curto e mais cômodo se não fosse a montanha; mas a montanha existe e é preciso seguir viagem!"`,
    capa: "https://m.media-amazon.com/images/I/81YXaYDupkL._SY466_.jpg",
    foto: "https://www.ufsm.br/midias/arco/wp-content/uploads/sites/601/2019/09/goethe-meio-1024x668.jpg",
    sinopse: `Johann Wolfgang von Goethe narra a paixão arrebatadora de Werther por Charlotte, que é comprometida com outro homem. A história explora os temas do amor não correspondido, angústia existencial e desespero, levando o protagonista a um trágico destino. Esta obra seminal influenciou profundamente o movimento literário do romantismo.`,
  },
  {
    titulo: "Liga da Justiça: Crise de Identidade",
    frase: `"Quem se beneficia com a morte de um super herói?"`,
    capa: "https://m.media-amazon.com/images/I/91zwUt04ALL._SY466_.jpg",
    foto: "https://images.alphacoders.com/658/658229.jpg",
    sinopse: `Somos levados a uma jornada épica pelo universo dos super-heróis da DC Comics. Nesta graphic novel emocionante, uma tragédia abala a comunidade heroica, levando à revelação de segredos sombrios e traições chocantes. Enquanto a Liga da Justiça luta para enfrentar um inimigo misterioso, os heróis são confrontados com dilemas morais e questões de lealdade que ameaçam despedaçar sua união. Com reviravoltas inesperadas e momentos de grande impacto, esta história nos leva a questionar o verdadeiro significado do heroísmo e da justiça.`,
  },
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
    titulo: "O Escultor",
    frase: `“Paixão e dedicação são as chaves para desbloquear a grandeza”`,
    capa: "https://m.media-amazon.com/images/I/91P2sM-saJL._SY466_.jpg",
    foto: "https://media.wnyc.org/i/800/0/c/85/1/Sculptor-FINAL-98_MAIN.jpg",
    sinopse: `Scott McCloudconta a história de David Smith, um escultor talentoso que faz um pacto com a Morte para ter o poder de criar qualquer coisa com suas mãos, mas com a condição de ter apenas 200 dias de vida. A narrativa aborda temas como arte, mortalidade, amor e redenção, em uma jornada emocionante e reflexiva.`,
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
