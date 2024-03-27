const bookList = [
  {
    title: "1Q84",
    author: "Haruki Murakami",
    price: "R$9,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31Y33PweWWS._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "1984",
    author: "George Orwell",
    price: "R$18,00",
    imageUrl: "https://m.media-amazon.com/images/I/819js3EQwbL._SY466_.jpg",
    category: "Ficção",
  },
  {
    title: "A Arte da Guerra: Edição Completa",
    author: "Sun Tzu",
    price: "R$12,00",
    imageUrl: "https://m.media-amazon.com/images/I/51Fe45NGwkL._SY466_.jpg",
    category: "Filosofia",
  },
  {
    title: "A Desobediência Civil",
    author: "Henry David Thoreau",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41myzx6BxJL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "A Ética da Liberdade",
    author: "Murray Rothbard",
    price: "R$42,00",
    imageUrl: "https://m.media-amazon.com/images/I/71S2v4hDjBL._SY466_.jpg",
    category: "Filosofia",
  },
  {
    title: "A Identidade e Diferença",
    author: "Martin Heidegger",
    price: "R$5,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51b00BQ+hvL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "A Metamorfose, Cia das Letras",
    author: "Franz Kafka",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41GSDX15NYL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "A Metamorfose, Planeta",
    author: "Franz Kafka",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/516qKNlle4L._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "A Metamorfose, Antofágica",
    author: "Franz Kafka",
    price: "R$32,00",
    imageUrl: "https://m.media-amazon.com/images/I/71NLKLEEHvL._UX250_.jpg",
    category: "Ficção",
  },
  {
    title: "A Miscelânea de Esportes, Jogos e Ócio de Schott",
    author: "Ben Schott",
    price: "R$10,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41QmTO1wXQL._SY445_SX342_.jpg",
    category: "Outros",
  },
  {
    title: "A Odisseia",
    author: "Homero",
    price: "R$9,00",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_779315-MLU50499477326_062022-O.webp",
    category: "Aventura",
  },
  {
    title: "A Relíquia",
    author: "Eça de Queirós",
    price: "R$6,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31UZMI03KwL._SY445_SX342_.jpg",
    category: "Romance",
  },
  {
    title: "A Riqueza das Nações (Compêndio)",
    author: "Adam Smith",
    price: "R$12,00",
    imageUrl: "https://m.media-amazon.com/images/I/61BnHMB3PJL._SY466_.jpg",
    category: "Economia",
  },
  {
    title: "Admirável Mundo Novo",
    author: "Aldous Huxley",
    price: "R$24,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41IKTYiymKL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "Albert Camus: Primeiros Cadernos",
    author: "Albert Camus",
    price: "R$13,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_6ec68d86635250e5958cdb6575134e55294639c4.png",
    category: "Ficção",
  },
  {
    title: "Bioética, o Que é, Como Se Faz?",
    author: "Fernando Lolas",
    price: "R$4,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31at1mVv4EL._SX342_SY445_.jpg",
    category: "Filosofia",
  },
  {
    title: "Black Hole",
    author: "Charles Burns",
    price: "R$44,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/4143nh4iZsL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Breve História de Quase Tudo",
    author: "Bill Bryson",
    price: "R$24,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31J-8UEp5OL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Contos - Clarice Lispector",
    author: "Clarice Lispector",
    price: "R$69,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61I4foVI0zL._SY445_SX342_.jpg",
    category: "Contos",
  },
  {
    title: "Contos Gauchescos e Lendas do Sul",
    author: "Simões Lopes Neto",
    price: "R$9,00",
    imageUrl:
      "https://clandestini.org/wp-content/uploads/2020/08/CONTOS_GAUCHESCOS_E_LENDAS_DO_SUL_1257449886P.jpg",
    category: "Contos",
  },
  {
    title: "Contos Reunidos",
    author: "Fiódor Dostoiévski",
    price: "R$43,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51z0+cCThEL._SY445_SX342_.jpg",
    category: "Contos",
  },
  {
    title: "Copa Loca",
    author: "Jaime de Almeida",
    price: "R$18,00",
    imageUrl: "https://m.media-amazon.com/images/I/71YYEMdZs3L._SY466_.jpg",
    category: "Outros",
  },
  {
    title: "Crime e Castigo",
    author: "Fiódor Dostoiévski",
    price: "R$18,00",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/980922/crime_e_castigo_edicao_de_bolso_1043_1_08aa7936095d78a6ccc64c330b583e2a.jpg",
    category: "Ficção",
  },
  {
    title: "Crime e Castigo Volume 2",
    author: "Fiódor Dostoiévski",
    price: "R$4,00",
    imageUrl: "https://livrista.com.br/thumb/l600/capas/2011/3217/26183.jpg",
    category: "Ficção",
  },
  {
    title: "Demian",
    author: "Hermann Hesse",
    price: "R$28,00",
    imageUrl:
      "https://www.containercultura.com.br/imgs/produtos/25570/images/25570.jpg",
    category: "Ficção",
  },
  {
    title: "Discurso Sobre a Servidão Voluntária",
    author: "Étienne de La Boétie",
    price: "R$10,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51fqIkgV1KL._SX342_SY445_.jpg",
    category: "Filosofia",
  },
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    price: "R$6,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51RYiCR51-L._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "Dom Quixote: Volume 1",
    author: "Miguel de Cervantes",
    price: "R$9,00",
    imageUrl:
      "https://photos.enjoei.com.br/livro-dom-quixote-volume-1-86931677/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy84NTA3Mzg4L2Y3NWZlYmUyMGY2OGU0MDAwNWRhOGQwM2Q0NDM5NjI5LmpwZw",
    category: "Ficção",
  },
  {
    title: "Esquerda e Direita",
    author: "Murray Rothbard",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/416hbbZ7b4L._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: "R$28,00",
    imageUrl: "https://m.media-amazon.com/images/I/51tAD6LyZ-L._SY466_.jpg",
    category: "Ficção",
  },
  {
    title: "Guerra e Paz: Quadrinhos",
    author: "Liev Tolstói",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/610TWesl4lL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Guiness World Records 1995",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_7fc284fe517f14a55ef7ceb82137aa9685ae2145.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records 1997",
    author: "Vários",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41WHBtGdNxL._SY445_SX342_.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records 2007",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41WJLu+V9hL._SY445_SX342_.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records 2009",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51VhUlQoCIL._SY445_SX342_.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records 2011",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51n7KBYB4fL._SY445_SX342_.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records 2014",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61VhqmEUBTL._SX342_SY445_.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records Futebol 2010",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCVLJbRLOWDakVUw-nC23BDzaDsi7o6r7ZcEeZGXYzmkit-u9_KqR_PHaN2A9WKiX6D_0s1IFdUAkLN9kQpGlNiJjA9KOR&usqp=CAY",
    category: "Guiness Book",
  },
  {
    title: "Guiness World Records Futebol 2012",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/3155892120/imagens/recordes-do-futebol-mundial-2012/3155892120_1_xlarge.jpg",
    category: "Guiness Book",
  },
  {
    title: "Guinness World Records 2010 Games",
    author: "Guiness",
    price: "R$35,00",
    imageUrl: "https://m.media-amazon.com/images/I/31e7-31iNFL.jpg",
    category: "Guiness Book",
  },
  {
    title: "Hellraiser: Renascido do Inferno",
    author: "Clive Barker",
    price: "R$48,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51gRYU9z8CL._SY445_SX342_.jpg",
    category: "Terror",
  },
  {
    title: "Histórias de Bulka",
    author: "Lev Tolstói",
    price: "R$13,00",
    imageUrl: "https://m.media-amazon.com/images/I/61VFFgP1YzL._SY466_.jpg",
    category: "Contos",
  },
  {
    title: "Horror em Amityville",
    author: "Jay Anson",
    price: "R$18,00",
    imageUrl:
      "https://i0.wp.com/resenhandosonhos.com/wp-content/uploads/2015/10/horroremamityville-1.jpg?resize=302%2C450",
    category: "Terror",
  },
  {
    title: "Ilíada",
    author: "Homero",
    price: "R$9,00",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/livro-iliada/magazineluiza/228539700/9e11c08aee2cca10e7a147459b39700f.jpg",
    category: "Aventura",
  },
  {
    title: "Iniciação à História da Filosofia",
    author: "Mariano Artigas",
    price: "R$35,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/418a5YIE8IL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Liga da Justiça: Crise de Identidade",
    author: "Brad Meltzer",
    price: "R$45,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51UGPKwgLrL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Maus",
    author: "Art Spiegelman",
    price: "R$39,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51jq-ZU9yHL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Meditações",
    author: "Marco Aurélio",
    price: "R$13,00",
    imageUrl: "https://m.media-amazon.com/images/I/612B0id4gNL._SY466_.jpg",
    category: "Filosofia",
  },
  {
    title: "Memórias de Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: "R$7,00",
    imageUrl:
      "https://higinocultural.com.br/wp-content/uploads/2021/12/Memorias-De-Sherlock-Holmes-Sir-Arthur-Conan-Doyle.jpg",
    category: "Contos",
  },
  {
    title: "Memórias do Subsolo",
    author: "Fiódor Dostoiévski",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51q5HvjLe7L._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "Mercenário, Anatomia de um Assassino",
    author: "Benoît Delépine",
    price: "R$12,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61RkHEB78RL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Mindhunter",
    author: "John E. Douglas",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51xCJlGE0zL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "Naruto: O guia secreto do confronto",
    author: "Vários",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51oEo-mSfdL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Naruto vol.20",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51FD+PStD7L._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Naruto vol.22",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/81F-3-3LR4L._AC_UF1000,1000_QL80_.jpg",
    category: "HQ",
  },
  {
    title: "Naruto vol.28",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl: "https://m.media-amazon.com/images/I/818ozbslx8L._SY466_.jpg",
    category: "HQ",
  },
  {
    title: "Naruto vol.31",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51TBKOCmwtL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Naruto vol.36",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://down-br.img.susercontent.com/file/1b6713faa9dc8e7464cbf9000807d5b7",
    category: "HQ",
  },
  {
    title: "Naruto vol.41",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61K5bYqr2KL._AC_UF1000,1000_QL80_.jpg",
    category: "HQ",
  },
  {
    title: "Naruto vol.58",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://rika.vtexassets.com/arquivos/ids/163230-1200-auto?v=635314381891500000&width=1200&height=auto&aspect=true",
    category: "HQ",
  },
  {
    title: "O Auto da Barca do Inferno",
    author: "Gil Vicente",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41FJuHmglcL._SY445_SX342_.jpg",
    category: "Aventura",
  },
  {
    title: "O Código Bro",
    author: "Vários",
    price: "R$3,00",
    imageUrl: "https://m.media-amazon.com/images/I/71+IPNUX0dL._SY466_.jpg",
    category: "Outros",
  },
  {
    title: "O Código da Vinci: Edição Especial",
    author: "Dan Brown",
    price: "R$25,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41r5FM0oRdL._SX342_SY445_.jpg",
    category: "Ficção",
  },
  {
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    price: "R$9,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/516NYqZI67L._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    price: "R$8,00",
    imageUrl: "https://m.media-amazon.com/images/I/514tKci6HIL._SY466_.jpg",
    category: "Ficção",
  },
  {
    title: "O Escultor",
    author: "Scott McCloud",
    price: "R$49,00",
    imageUrl: "https://m.media-amazon.com/images/I/91P2sM-saJL._SY466_.jpg",
    category: "HQ",
  },
  {
    title: "O Estrangeiro",
    author: "Albert Camus",
    price: "R$19,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61cFRircgZL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "O Exorcista",
    author: "William Peter Blatty",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51nc43XKzfL._AC_UF1000,1000_QL80_.jpg",
    category: "Terror",
  },
  {
    title: "O Fantasma de Canterville",
    author: "Oscar Wilde",
    price: "R$8,00",
    imageUrl: "https://livralivro.com.br/uploads/book/img/180/8562287180.jpg",
    category: "Ficção",
  },
  {
    title: "O Homem que Caiu na Terra",
    author: "Walter Tevis",
    price: "R$42,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41Anc9NXYML._SX342_SY445_.jpg",
    category: "Ficção",
  },
  {
    title: "O Homem que Calculava",
    author: "Malba Tahan",
    price: "R$14,00",
    imageUrl:
      "https://m.aabbportoalegre.com.br/intranet/modulos/biblioteca/imgs/6819.jpg",
    category: "Ficção",
  },
  {
    title: "O Idiota",
    author: "Fiódor Dostoiévski",
    price: "R$32,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51EuSosoqJL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "O Livre Mercado e Seus Inimigos",
    author: "Ludwig von Mises",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51y2WDdIQoL._SY445_SX342_.jpg",
    category: "Economia",
  },
  {
    title: "O Lobo da Estepe",
    author: "Hermann Hesse",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1emmdNI8-L._AC_UF1000,1000_QL80_.jpg",
    category: "Ficção",
  },
  {
    title: "O Livro dos Manuais",
    author: "Paulo Coelho",
    price: "R$7,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/d187c640f271044e18ed71e457b12dc58e63f155.jpg",
    category: "Filosofia",
  },
  {
    title: "O Príncipe",
    author: "Maquiavel",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51fJp6IPGAL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "O Sol é Para Todos",
    author: "Harper Lee",
    price: "R$26,00",
    imageUrl: "https://m.media-amazon.com/images/I/91WKPd60P4L._SY466_.jpg",
    category: "Ficção",
  },
  {
    title: "O Universo Numa Casca de Noz",
    author: "Stephen Hawking",
    price: "R$25,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/314o1VN4iqL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Os Sofrimentos do Jovem Werther",
    author: "Johann Wolfgang von Goethe",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51SSEeTIXcL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "Os Sertões Volume 1 + Volume 2",
    author: "Euclides da Cunha",
    price: "R$18,00",
    imageUrl:
      "https://cdn.awsli.com.br/300x300/1832/1832888/produto/20186401226140ed57f.jpg",
    category: "Ficção",
  },
  {
    title: "O que o Governo Fez com o Nosso Dinheiro",
    author: "Murray Rothbard",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51sstEmjdML._SY445_SX342_.jpg",
    category: "Economia",
  },
  {
    title: "O Que Se Vê e o Que Não Se Vê",
    author: "Frédéric Bastiat",
    price: "R$24,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51BuPo24QOL._SY445_SX342_.jpg",
    category: "Economia",
  },
  {
    title: "One punch man vol.01",
    author: "Yusuke Murata",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51b1z-rl+zL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "One punch man vol.02",
    author: "Yusuke Murata",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51oe92OdrVL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "One punch man vol.03",
    author: "Yusuke Murata",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51Bgk-MWqOL._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "Por uma Nova Liberdade: O Manifesto Libertário",
    author: "Murray Rothbard",
    price: "R$68,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51f+DXtTN5L._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Seis propostas para o próximo milênio",
    author: "Italo Calvino",
    price: "R$8,00",
    imageUrl: "https://m.media-amazon.com/images/I/71cbh+sY+sL._SY466_.jpg",
    category: "Filosofia",
  },
  {
    title: "Senhora",
    author: "José de Alencar",
    price: "R$10,00",
    imageUrl: "https://m.media-amazon.com/images/I/91DTtYy0cUL._SY466_.jpg",
    category: "Ficção",
  },
  {
    title: "Sobre a Vida Feliz",
    author: "Sêneca",
    price: "R$5,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41tROqCfliL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Superman e Batman: Inimigos Públicos",
    author: "Jeff Loeb",
    price: "R$22,00",
    imageUrl:
      "https://a-static.mlcdn.com.br/450x450/superman-batman-inimigos-publicos-colecao-dc-comics-graphic-novels-eaglemoss/estacaodaspalavras/9788583781738/59a066e68dd0a6953638d4ad61e4ac7b.jpg",
    category: "HQ",
  },
  {
    title: "Superman: Entre a Foice e o Martelo",
    author: "Mark Millar",
    price: "R$35,00",
    imageUrl: "https://m.media-amazon.com/images/I/71POiMelFrL._SY466_.jpg",
  },
  {
    title: "Superman: Terra Um",
    author: "J. Michael Straczynski",
    price: "R$15,00",
    imageUrl: "https://m.media-amazon.com/images/I/81qQAE8-dxL._SY466_.jpg",
    category: "HQ",
  },
  {
    title: "Textos Básicos de Filosofia",
    author: "N/A",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51y8YEGql1L._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Textos Básicos de Sociologia",
    author: "N/A",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51-xZL-AHuL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Textos Cruéis Demais para Serem Lidos Rapidamente",
    author: "Various",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41WSVHqqbkL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "The Last of Us: Sonhos Americanos",
    author: "Neil Druckmann",
    price: "R$50,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/518pNeuW-+L._SY445_SX342_.jpg",
    category: "HQ",
  },
  {
    title: "The Merchant of Venice",
    author: "William Shakespeare",
    price: "R$15,00",
    imageUrl: "https://m.media-amazon.com/images/I/81sQC6Qi2aL._SY466_.jpg",
    category: "Ficção",
  },
  {
    title: "Uma Breve História do Tempo",
    author: "Stephen Hawking",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51FBILW8cWS._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Utilitarismo",
    author: "John Stuart Mill",
    price: "R$12,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31zMluQNWyL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Vícios Não São Crimes",
    author: "Lysander Spooner",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31Y3n7jzxVL._SY445_SX342_.jpg",
    category: "Filosofia",
  },
  {
    title: "Viagens de Gulliver",
    author: "Jonathan Swift",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51tfozW1xHL._SY445_SX342_.jpg",
    category: "Ficção",
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    price: "R$69,00",
    imageUrl: "https://m.media-amazon.com/images/I/81IOAiyRD+L._SY466_.jpg",
    category: "HQ",
  },
];

export default bookList;
