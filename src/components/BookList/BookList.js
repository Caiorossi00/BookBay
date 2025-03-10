const bookList = [
  {
    title: "A Rainha Vermelha - Edição de colecionador",
    author: "Victoria Aveyard",
    price: "35,00",
    imageUrl:
      "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/200040-1000-1000/846757_ampliada.jpg?v=637254405227730000",
    disponivel: "sim",
  },
  {
    title: "Espada de Vidro",
    author: "Victoria Aveyard",
    price: "35,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41+kbxl3HeL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Droga do Amor",
    author: "Pedro Bandeira",
    price: "20,00",
    imageUrl: "https://m.media-amazon.com/images/I/51uN4xgOn7L._SX445_.jpg",
    disponivel: "sim",
  },
  {
    title: "Animais Fantásticos e Onde Habitam",
    author: "J.K. Rowling",
    price: "35,00",
    imageUrl: "https://m.media-amazon.com/images/I/91ZsuvQIJjL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O poderoso chefão",
    author: "Mario Puzo",
    price: "20,00",
    imageUrl: "https://m.media-amazon.com/images/I/81TajSiaeHL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "1Q84",
    author: "Haruki Murakami",
    price: "R$9,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31Y33PweWWS._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "1984",
    author: "George Orwell",
    price: "R$18,00",
    imageUrl: "https://m.media-amazon.com/images/I/819js3EQwbL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Arte da Guerra: Edição Completa",
    author: "Sun Tzu",
    price: "R$12,00",
    imageUrl: "https://m.media-amazon.com/images/I/51Fe45NGwkL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Desobediência Civil",
    author: "Henry David Thoreau",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41myzx6BxJL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Ética da Liberdade",
    author: "Murray Rothbard",
    price: "R$42,00",
    imageUrl: "https://m.media-amazon.com/images/I/71S2v4hDjBL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Identidade e Diferença",
    author: "Martin Heidegger",
    price: "R$5,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51b00BQ+hvL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Metamorfose, Cia das Letras",
    author: "Franz Kafka",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41GSDX15NYL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Metamorfose, Planeta",
    author: "Franz Kafka",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/516qKNlle4L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Metamorfose, Antofágica",
    author: "Franz Kafka",
    price: "R$32,00",
    imageUrl: "https://m.media-amazon.com/images/I/71NLKLEEHvL._UX250_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Miscelânea de Esportes, Jogos e Ócio de Schott",
    author: "Ben Schott",
    price: "R$10,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41QmTO1wXQL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Odisseia",
    author: "Homero",
    price: "R$9,00",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_779315-MLU50499477326_062022-O.webp",
    disponivel: "sim",
  },
  {
    title: "A Relíquia",
    author: "Eça de Queirós",
    price: "R$6,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31UZMI03KwL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A Riqueza das Nações",
    author: "Adam Smith",
    price: "R$12,00",
    imageUrl: "https://m.media-amazon.com/images/I/61BnHMB3PJL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Admirável Mundo Novo",
    author: "Aldous Huxley",
    price: "R$24,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41IKTYiymKL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Albert Camus: Primeiros Cadernos",
    author: "Albert Camus",
    price: "R$13,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_6ec68d86635250e5958cdb6575134e55294639c4.png",
    disponivel: "sim",
  },
  {
    title: "Bioética, o Que é, Como Se Faz?",
    author: "Fernando Lolas",
    price: "R$4,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31at1mVv4EL._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "Black Hole",
    author: "Charles Burns",
    price: "R$44,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/4143nh4iZsL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Breve História de Quase Tudo",
    author: "Bill Bryson",
    price: "xx,xx",
    imageUrl:
      "https://m.media-amazon.com/images/I/31J-8UEp5OL._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Contos Clarice Lispector",
    author: "Clarice Lispector",
    price: "R$69,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61I4foVI0zL._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Contos Gauchescos e Lendas do Sul",
    author: "Simões Lopes Neto",
    price: "R$9,00",
    imageUrl:
      "https://clandestini.org/wp-content/uploads/2020/08/CONTOS_GAUCHESCOS_E_LENDAS_DO_SUL_1257449886P.jpg",
    disponivel: "não",
  },
  {
    title: "Contos Reunidos",
    author: "Fiódor Dostoiévski",
    price: "R$43,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51z0+cCThEL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Copa Loca",
    author: "Jaime de Almeida",
    price: "R$18,00",
    imageUrl: "https://m.media-amazon.com/images/I/71YYEMdZs3L._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Crime e Castigo",
    author: "Fiódor Dostoiévski",
    price: "R$18,00",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/980922/crime_e_castigo_edicao_de_bolso_1043_1_08aa7936095d78a6ccc64c330b583e2a.jpg",
    disponivel: "sim",
  },
  {
    title: "Crime e Castigo Volume 2",
    author: "Fiódor Dostoiévski",
    price: "R$4,00",
    imageUrl: "https://livrista.com.br/thumb/l600/capas/2011/3217/26183.jpg",
    disponivel: "sim",
  },
  {
    title: "Demian",
    author: "Hermann Hesse",
    price: "R$28,00",
    imageUrl:
      "https://www.containercultura.com.br/imgs/produtos/25570/images/25570.jpg",
    disponivel: "sim",
  },
  {
    title: "Discurso Sobre a Servidão Voluntária",
    author: "Étienne de La Boétie",
    price: "R$10,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51fqIkgV1KL._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    price: "R$6,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51RYiCR51-L._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Dom Quixote: Volume 1",
    author: "Miguel de Cervantes",
    price: "R$9,00",
    imageUrl:
      "https://photos.enjoei.com.br/livro-dom-quixote-volume-1-86931677/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy84NTA3Mzg4L2Y3NWZlYmUyMGY2OGU0MDAwNWRhOGQwM2Q0NDM5NjI5LmpwZw",
    disponivel: "sim",
  },
  {
    title: "Esquerda e Direita",
    author: "Murray Rothbard",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/416hbbZ7b4L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: "R$28,00",
    imageUrl: "https://m.media-amazon.com/images/I/51tAD6LyZ-L._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Guerra e Paz: Quadrinhos",
    author: "Liev Tolstói",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/610TWesl4lL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records 1995",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_7fc284fe517f14a55ef7ceb82137aa9685ae2145.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records 1997",
    author: "Vários",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41WHBtGdNxL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records 2007",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41WJLu+V9hL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records 2009",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51VhUlQoCIL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records 2011",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51n7KBYB4fL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records 2014",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61VhqmEUBTL._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records Futebol 2010",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCVLJbRLOWDakVUw-nC23BDzaDsi7o6r7ZcEeZGXYzmkit-u9_KqR_PHaN2A9WKiX6D_0s1IFdUAkLN9kQpGlNiJjA9KOR&usqp=CAY",
    disponivel: "sim",
  },
  {
    title: "Guiness World Records Futebol 2012",
    author: "Guiness",
    price: "R$13,00",
    imageUrl:
      "https://images-americanas.b2w.io/produtos/3155892120/imagens/recordes-do-futebol-mundial-2012/3155892120_1_xlarge.jpg",
    disponivel: "sim",
  },
  {
    title: "Hellraiser: Renascido do Inferno",
    author: "Clive Barker",
    price: "R$48,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51gRYU9z8CL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Guinness World Records 2010 Games",
    author: "Guiness",
    price: "R$35,00",
    imageUrl: "https://m.media-amazon.com/images/I/31e7-31iNFL.jpg",
    disponivel: "sim",
  },
  {
    title: "Histórias de Bulka",
    author: "Lev Tolstói",
    price: "R$13,00",
    imageUrl: "https://m.media-amazon.com/images/I/61VFFgP1YzL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Horror em Amityville",
    author: "Jay Anson",
    price: "R$18,00",
    imageUrl:
      "https://i0.wp.com/resenhandosonhos.com/wp-content/uploads/2015/10/horroremamityville-1.jpg?resize=302%2C450",
    disponivel: "sim",
  },
  {
    title: "Ilíada",
    author: "Homero",
    price: "R$9,00",
    imageUrl:
      "https://a-static.mlcdn.com.br/800x560/livro-iliada/magazineluiza/228539700/9e11c08aee2cca10e7a147459b39700f.jpg",
    disponivel: "não",
  },
  {
    title: "Iniciação à História da Filosofia",
    author: "Mariano Artigas",
    price: "R$35,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/418a5YIE8IL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Liga da Justiça: Crise de Identidade",
    author: "Brad Meltzer",
    price: "R$48,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51UGPKwgLrL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Maus",
    author: "Art Spiegelman",
    price: "R$39,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51jq-ZU9yHL._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Meditações",
    author: "Marco Aurélio",
    price: "R$13,00",
    imageUrl: "https://m.media-amazon.com/images/I/612B0id4gNL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Memórias de Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: "R$7,00",
    imageUrl:
      "https://higinocultural.com.br/wp-content/uploads/2021/12/Memorias-De-Sherlock-Holmes-Sir-Arthur-Conan-Doyle.jpg",
    disponivel: "sim",
  },
  {
    title: "Memórias do Subsolo",
    author: "Fiódor Dostoiévski",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51q5HvjLe7L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Mercenário, Anatomia de um Assassino",
    author: "Benoît Delépine",
    price: "R$12,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61RkHEB78RL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Mindhunter",
    author: "John E. Douglas",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51xCJlGE0zL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto: O guia secreto do confronto",
    author: "Vários",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51oEo-mSfdL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.20",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51FD+PStD7L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.22",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/81F-3-3LR4L._AC_UF1000,1000_QL80_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.28",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl: "https://m.media-amazon.com/images/I/818ozbslx8L._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.31",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51TBKOCmwtL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.36",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://down-br.img.susercontent.com/file/1b6713faa9dc8e7464cbf9000807d5b7",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.41",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61K5bYqr2KL._AC_UF1000,1000_QL80_.jpg",
    disponivel: "sim",
  },
  {
    title: "Naruto vol.58",
    author: "Masashi Kishimoto",
    price: "R$7,00",
    imageUrl:
      "https://rika.vtexassets.com/arquivos/ids/163230-1200-auto?v=635314381891500000&width=1200&height=auto&aspect=true",
    disponivel: "sim",
  },
  {
    title: "O Auto da Barca do Inferno",
    author: "Gil Vicente",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41FJuHmglcL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Código Bro",
    author: "Vários",
    price: "R$3,00",
    imageUrl: "https://m.media-amazon.com/images/I/71+IPNUX0dL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Código da Vinci: Edição Especial",
    author: "Dan Brown",
    price: "R$25,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41r5FM0oRdL._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    price: "R$9,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/516NYqZI67L._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    price: "R$8,00",
    imageUrl: "https://m.media-amazon.com/images/I/514tKci6HIL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "O Escultor",
    author: "Scott McCloud",
    price: "R$49,00",
    imageUrl: "https://m.media-amazon.com/images/I/91P2sM-saJL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Estrangeiro",
    author: "Albert Camus",
    price: "R$19,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61cFRircgZL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Exorcista",
    author: "William Peter Blatty",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51nc43XKzfL._AC_UF1000,1000_QL80_.jpg",
    disponivel: "não",
  },
  {
    title: "O Fantasma de Canterville",
    author: "Oscar Wilde",
    price: "R$8,00",
    imageUrl: "https://livralivro.com.br/uploads/book/img/180/8562287180.jpg",
    disponivel: "não",
  },
  {
    title: "O Homem que Caiu na Terra",
    author: "Walter Tevis",
    price: "R$42,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41Anc9NXYML._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Homem que Calculava",
    author: "Malba Tahan",
    price: "R$14,00",
    imageUrl:
      "https://m.aabbportoalegre.com.br/intranet/modulos/biblioteca/imgs/6819.jpg",
    disponivel: "sim",
  },
  {
    title: "O Idiota",
    author: "Fiódor Dostoiévski",
    price: "R$32,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51EuSosoqJL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Livre Mercado e Seus Inimigos",
    author: "Ludwig von Mises",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51y2WDdIQoL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Lobo da Estepe",
    author: "Hermann Hesse",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1emmdNI8-L._AC_UF1000,1000_QL80_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Livro dos Manuais",
    author: "Paulo Coelho",
    price: "R$7,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/d187c640f271044e18ed71e457b12dc58e63f155.jpg",
    disponivel: "sim",
  },
  {
    title: "O Príncipe",
    author: "Maquiavel",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51fJp6IPGAL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Sol é Para Todos",
    author: "Harper Lee",
    price: "R$26,00",
    imageUrl: "https://m.media-amazon.com/images/I/91WKPd60P4L._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Universo Numa Casca de Noz",
    author: "Stephen Hawking",
    price: "R$25,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/314o1VN4iqL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Os Sofrimentos do Jovem Werther",
    author: "Johann Wolfgang von Goethe",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51SSEeTIXcL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Os Sertões Volume 1 + Volume 2",
    author: "Euclides da Cunha",
    price: "R$18,00",
    imageUrl:
      "https://cdn.awsli.com.br/300x300/1832/1832888/produto/20186401226140ed57f.jpg",
    disponivel: "sim",
  },
  {
    title: "O que o Governo Fez com o Nosso Dinheiro",
    author: "Murray Rothbard",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51sstEmjdML._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Que Se Vê e o Que Não Se Vê",
    author: "Frédéric Bastiat",
    price: "R$24,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51BuPo24QOL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "One punch man vol.01",
    author: "Yusuke Murata",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51b1z-rl+zL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "One punch man vol.02",
    author: "Yusuke Murata",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51oe92OdrVL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "One punch man vol.03",
    author: "Yusuke Murata",
    price: "R$14,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51Bgk-MWqOL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Por uma Nova Liberdade: O Manifesto Libertário",
    author: "Murray Rothbard",
    price: "R$68,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51f+DXtTN5L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Seis propostas para o próximo milênio",
    author: "Italo Calvino",
    price: "R$8,00",
    imageUrl: "https://m.media-amazon.com/images/I/71cbh+sY+sL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Senhora",
    author: "José de Alencar",
    price: "R$10,00",
    imageUrl: "https://m.media-amazon.com/images/I/91DTtYy0cUL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Sobre a Vida Feliz",
    author: "Santo Agostinho",
    price: "R$5,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41tROqCfliL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Superman e Batman: Inimigos Públicos",
    author: "Jeff Loeb",
    price: "R$22,00",
    imageUrl:
      "https://a-static.mlcdn.com.br/450x450/superman-batman-inimigos-publicos-colecao-dc-comics-graphic-novels-eaglemoss/estacaodaspalavras/9788583781738/59a066e68dd0a6953638d4ad61e4ac7b.jpg",
    disponivel: "sim",
  },
  {
    title: "Superman: Entre a Foice e o Martelo",
    author: "Mark Millar",
    price: "R$35,00",
    imageUrl: "https://m.media-amazon.com/images/I/71POiMelFrL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Superman: Terra Um",
    author: "J. Michael Straczynski",
    price: "R$15,00",
    imageUrl: "https://m.media-amazon.com/images/I/81qQAE8-dxL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Textos Básicos de Filosofia",
    author: "Danilo Marcondes",
    price: "R$34,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51y8YEGql1L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Textos Básicos de Sociologia",
    author: "Celso Castro",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51-xZL-AHuL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Textos Cruéis Demais para Serem Lidos Rapidamente",
    author: "Various",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41WSVHqqbkL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "The Last of Us: Sonhos Americanos",
    author: "Neil Druckmann",
    price: "R$50,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/518pNeuW-+L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "The Merchant of Venice",
    author: "William Shakespeare",
    price: "R$15,00",
    imageUrl: "https://m.media-amazon.com/images/I/81sQC6Qi2aL._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Uma Breve História do Tempo",
    author: "Stephen Hawking",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51FBILW8cWS._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Utilitarismo",
    author: "John Stuart Mill",
    price: "R$12,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31zMluQNWyL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Vícios Não São Crimes",
    author: "Lysander Spooner",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/31Y3n7jzxVL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Viagens de Gulliver",
    author: "Jonathan Swift",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51tfozW1xHL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    price: "R$69,00",
    imageUrl: "https://m.media-amazon.com/images/I/81IOAiyRD+L._SY466_.jpg",
    disponivel: "sim",
  },
  {
    title: "Elite da Tropa",
    author: "Luiz Eduardo Soares",
    price: "R$22,00",
    imageUrl: "https://m.media-amazon.com/images/I/918AS00M7fL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Elite da Tropa 2",
    author: "Luiz Eduardo Soares",
    price: "R$7,00",
    imageUrl: "https://m.media-amazon.com/images/I/61fSOGQXUjL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Globalização",
    author: "Fernando Alcoforado",
    price: "R$4,00",
    imageUrl:
      "https://books.google.com.vc/books/content?id=248O2U0emgoC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE738kRdyQ7YqEPiOpijtn18Qu2B4wnrQUZsSBZNKNesSj9NCKUNeRLAL_pHXAztbVpZscUZs4Bf39ahDrpbS6FGtyqVfsTflRdHDxXox65LrXd5nq_5Nrms64oeUBHwtPI9WJ6mJ",
    disponivel: "sim",
  },
  {
    title: "Não tenha vergonha de ser Bonita",
    author: "Dr. Rolando Zani",
    price: "R$4,00",
    imageUrl: "https://m.media-amazon.com/images/I/51NPKhxX8YL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Os erros fatais do socialismo",
    author: "F.A Hayek",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51NLWtvXinL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Assassinato de reputações",
    author: "Romeu Tuma Junior",
    price: "R$12,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41jn+yyM32L._AC_UF1000,1000_QL80_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Banquete",
    author: "Platão",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41pQZn-QpoL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Drogas! Entenda esse Mundo",
    author: "Gilberto Olivier",
    price: "R$4,00",
    imageUrl: "https://i.zst.com.br/thumbs/12/20/33/14366381.jpg",
    disponivel: "sim",
  },
  {
    title: "Valente para Todas",
    author: "Vitor Cafaggi",
    price: "R$7,00",
    imageUrl: "https://m.media-amazon.com/images/I/51QxQB5ZcbL._SX550_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Menino Maluquinho",
    author: "Ziraldo",
    price: "R$12,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51LjfgMU-SL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Os Direitos dos Pais",
    author: "Tania Zagury",
    price: "R$4,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41b+Z9QcacL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Sagarana",
    author: "Guimarães Rosa",
    price: "R$12,00",
    imageUrl: "https://m.media-amazon.com/images/I/81-u5WrGvrL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Primo Basílio",
    author: "Eçá de Queirós",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41+6IixOklL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Volta ao Mundo em 52 histórias",
    author: "Philip Mistry",
    price: "R$39,00",
    imageUrl: "https://m.media-amazon.com/images/I/81d4fLS1uaS._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A mentalidade Anticapitalista",
    author: "Ludwig von Mises",
    price: "R$25,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51wKpFrtIEL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "MacArthur",
    author: "Sydney L. Mayer",
    price: "R$5,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/ef1294d435a478d4985e585c6e81ccca315c8535.jpg",
    disponivel: "sim",
  },
  {
    title: "O Documento Holcroft",
    author: "Robert Ludlum",
    price: "R$6,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_b074842aaf47ccc12e7cfaa54237dee7b75b8432.png",
    disponivel: "sim",
  },
  {
    title: "A Ética protestante e o Espírito do Capitalismo",
    author: "Max Weber",
    price: "R$22,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51yA6fNKeKS._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Sonho de uma Noite de Verão",
    author: "William Shakespeare",
    price: "R$13,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41qaFxnzLeL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A arte de ter razão: 38 estratagemas",
    author: "Arthur Schopenhauer",
    price: "R$7,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51Bi4-urSgL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Club Athletico Paulistano",
    author: "N/A",
    price: "R$9,00",
    imageUrl:
      "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/3512fbc477ed0104b24024f06728023040b7886a.jpg",
    disponivel: "sim",
  },
  {
    title: "Legado Olímpico",
    author: "N/A",
    price: "R$18,00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovVfxo2gt2I9rzFzbK08aMf1bamK1WCXMoOutlEoT_w&s",
    disponivel: "sim",
  },
  {
    title: "História da Música Clássica",
    author: "Ediciones del Prado",
    price: "R$28,00",
    imageUrl:
      "https://down-br.img.susercontent.com/file/sg-11134201-7rbmf-ln1ota2ca9o83a",
    disponivel: "sim",
  },
  {
    title: "Fronteiras do Desconhecido",
    author: "Vários Autores",
    price: "R$9,00",
    imageUrl:
      "https://down-br.img.susercontent.com/file/5f1845af5b66c80240bbda8b60365897",
    disponivel: "sim",
  },
  {
    title: "A Origem das Espécies",
    author: "Charles Darwin",
    price: "R$46,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51JMj5S+4qL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Homem que Passeia",
    author: "Jiro Taniguchi",
    price: "R$48,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51MnWr4yTFL._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Os últimos dias de Krypton",
    author: "Kevin J. Anderson",
    price: "R$22,00",
    imageUrl: "https://m.media-amazon.com/images/I/51wY6cw0V2L._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Iniciação à história da Filosofia",
    author: "Danilo Marcondes",
    price: "R$34,00",
    imageUrl: "https://m.media-amazon.com/images/I/51uS3ufStDL._SY342_.jpg",
    disponivel: "sim",
  },
  {
    title: "Essencial Mundo de Oz Box Lacrado",
    author: "L. Frank Baum",
    price: "R$14,00",
    imageUrl: "https://m.media-amazon.com/images/I/818Ikc8kqnS._SY342_.jpg",
    disponivel: "não",
  },
  {
    title: "Como Morrem os Pobres e outros ensaios",
    author: "George Orwell",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/51E7+g0BJkS._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "A revolução dos bichos",
    author: "George Orwell",
    price: "R$8,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "50 Ideias de economia que você precisa conhecer",
    author: "Edmund Conway",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/412AZoC1SdL._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "50 Ideias de histórias do mundo que você precisa conhecer",
    author: "Ian Crofton",
    price: "R$18,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/417kuBo3W6L._SY445_SX342_.jpg",
    disponivel: "sim",
  },
  {
    title: "50 Ideias de filosofia do mundo que você precisa conhecer",
    author: "Ian Crofton",
    price: "R$28,00",
    imageUrl:
      "https://m.media-amazon.com/images/I/41gXqzYGZjL._SX342_SY445_.jpg",
    disponivel: "sim",
  },
  {
    title: "O Declínio de um Homem",
    author: "Osamu Dazai",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/81sblL-t2iL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Confissões de uma Máscara",
    author: "Yukio Mishima",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/81nnYIdpdnL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Grandes Contos",
    author: "H.P Lovecraft",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/719HCFvTyvL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Medo Clássico Vol.1",
    author: "H.P Lovecraft",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/61dK-0GVAHL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Medo Clássico Vol.2",
    author: "H.P Lovecraft",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/81ae17sPluL._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Tomie",
    author: "Junji Ito",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/81QDxVfY65L._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Uzumaki",
    author: "Junji Ito",
    price: "xx,xx",
    imageUrl:
      "https://m.media-amazon.com/images/I/51yF5Itm-9L._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Fragmentos do Horror",
    author: "Junji Ito",
    price: "xx,xx",
    imageUrl:
      "https://m.media-amazon.com/images/I/517+BU8AcvL._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Calafrios",
    author: "Junji Ito",
    price: "xx,xx",
    imageUrl:
      "https://m.media-amazon.com/images/I/51H+j1I8b6L._SY445_SX342_.jpg",
    disponivel: "não",
  },
  {
    title: "Medo Clássico",
    author: "Edgar Allan Poe",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/71FMcvWL19L._SY466_.jpg",
    disponivel: "não",
  },
  {
    title: "Medo Clássico 2",
    author: "Edgar Allan Poe",
    price: "xx,xx",
    imageUrl: "https://m.media-amazon.com/images/I/61ot+NTV4nL._SY466_.jpg",
    disponivel: "não",
  },
];

export default bookList;
