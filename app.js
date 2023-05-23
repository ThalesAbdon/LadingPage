//várivel da language checkbox (INGLÊS ou PT-BR)
let checkbox = document.querySelector("#language");

//Itens da lista do HEADER
const listaItems = document.querySelectorAll("#item");
const Services = listaItems[1];
const Projects = listaItems[2];
const About = listaItems[3];
const Contact = listaItems[4];

//H1 e Button da SECTION Hello
const sectionHello = document.querySelector("#hello");
const h1Elements = sectionHello.querySelectorAll("h1");
const textos = [" ", "Olá", "Meu nome é"];
const buttonPortfolio = document.querySelector("#buttonPortfolio");

//Services Section
const servicesSectionTitleEN = document.getElementById(
  "servicesSectionTitleEN"
);

const servicesSectionTitleBR = document.getElementById(
  "servicesSectionTitleBR"
);

const servicesParagraph = document.getElementById("servicesParagraph");

const frontEndDeveloperParagraph = document.getElementById(
  "frontEndDeveloperParagraph"
);

const backEndDeveloperParagraph = document.getElementById(
  "backEndDeveloperParagraph"
);

const gameDeveloperParagraph = document.getElementById(
  "gameDeveloperParagraph"
);

const programmingTeacherParagraph = document.getElementById(
  "programmingTeacherParagraph"
);

//Projects Section
const projectsSectionTitleEN = document.getElementById(
  "projectsSectionTitleEN"
);
const projectsSectionTitleBR = document.getElementById(
  "projectsSectionTitleBR"
);

const oldPortfolioHead = document.getElementById("oldPortfolioHead");
const oldPortfolioParagraph = document.getElementById("oldPortfolioParagraph");
const pokemonGameParagraph = document.getElementById("pokemonGameParagraph");
const fightGameParagraph = document.getElementById("fightGameParagraph");

//About Section

const aboutTitleEN = document.getElementById("aboutTitleEN");
const aboutTitleBR = document.getElementById("aboutTitleBR");
const aboutSubTitle = document.getElementById("aboutSubTitle");
const aboutMeParagraph = document.getElementById("aboutMeParagraph");

//Contact
const contactTitleEN = document.getElementById("contactTitleEN");
const contactTitleBR = document.getElementById("contactTitleBR");

//Footer
const footerSubTitle = document.getElementById("footerSubTitle");

//HAMBURGUER MENU
const hamburguer = document.querySelector("#hamburguer");
const mobile_menu = document.querySelector("#mobile");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

language.addEventListener("click", () => {
  if (checkbox.checked) {
    //Nomes em português dos itens da lista no Header
    Services.textContent = "Serviços";
    Projects.textContent = "Projetos";
    About.textContent = "Sobre";
    Contact.textContent = "Contato";

    //Apresentação
    const textsH1 = [" ", "Olá,", "Meu nome é"];
    h1Elements.forEach((element, index) => {
      if (textos[index]) {
        element.textContent = textsH1[index];
      }
    });
    buttonPortfolio.textContent = "Portfólio";

    //Services
    servicesSectionTitleEN.style.display = "none";
    servicesSectionTitleBR.style.display = "block";
    servicesParagraph.textContent =
      "Tenho ampla experiência no desenvolvimento backend utilizando Node.js e GraphQL, garantindo a criação de APIs eficientes e escaláveis. No frontend, possuo habilidades em HTML e CSS para criar interfaces atraentes e responsivas. Além disso, tenho conhecimentos em desenvolvimento de jogos, utilizando C# e Unity para criar experiências imersivas. Também estudei Python, especialmente focado em conceitos de Inteligência Artificial, permitindo a criação de soluções inteligentes e automatizadas. Complementando minha expertise, desenvolvi jogos utilizando JavaScript, aproveitando a versatilidade dessa linguagem. Além disso, tive a oportunidade de ministrar aulas de programação para iniciantes, compartilhando meus conhecimentos e auxiliando outros na jornada de aprendizado. Estou pronto para colaborar em projetos desafiadores, aplicando meu conhecimento técnico e minha paixão pela programação para entregar soluções de alta qualidade.";
    frontEndDeveloperParagraph.textContent =
      "Sou um desenvolvedor front-end com experiência em HTML, CSS, React.js e Next.js. Tenho um amplo conhecimento na criação de interfaces de usuário atrativas e responsivas, com habilidades para trabalhar em diversos projetos e integrar APIs. Além disso, estou sempre atualizado com as últimas tendências e tecnologias para aprimorar a experiência do usuário e o desempenho.";
    backEndDeveloperParagraph.textContent =
      "Sou um desenvolvedor back-end experiente em tecnologias como JavaScript, Node.js, TypeScript, Nest.js e GraphQL. Possuo um sólido conhecimento em escrever testes unitários com Jest, além de habilidades em trabalhar em projetos complexos e criar soluções escaláveis. Estou sempre atualizado com as últimas tendências e tecnologias em desenvolvimento back-end para fornecer soluções eficazes e eficientes.";
    gameDeveloperParagraph.textContent =
      "Como desenvolvedor de jogos, tenho experiência em criar jogos de plataforma, luta e RPG usando JavaScript, Unity e C#. Trabalhei em projetos desafiadores, implementando mecânicas envolventes e gráficos impressionantes. Estou atualizado com as últimas tendências e tecnologias. Pronto para colaborar em projetos inovadores.";
    programmingTeacherParagraph.textContent =
      "Como instrutor, ensinei lógica de programação e JavaScript para estudantes iniciantes em cursos de Análise de Sistemas e Ciência da Computação. Foi gratificante contribuir para o início promissor deles na área de tecnologia, ajudando-os a construir uma base sólida e desenvolver habilidades essenciais.";
    //Projects
    projectsSectionTitleEN.style.display = "none";
    projectsSectionTitleBR.style.display = "block";
    oldPortfolioHead.textContent = "Meu primeiro Portfólio";
    oldPortfolioParagraph.textContent =
      "Este projeto representa o meu primeiro portfólio, desenvolvido utilizando HTML, CSS e JavaScript. Ele mostra minha jornada inicial como desenvolvedor web e demonstra minhas habilidades iniciais em desenvolvimento front-end.";
    pokemonGameParagraph.textContent =
      "Um projeto inspirado nos jogos de Pokémon da terceira geração (Fire Red/Leaf Green, Ruby/Sapphire, Emerald). Como um fã de jogos desde criança, Pokémon era um dos meus jogos favoritos. Jogá-lo no meu Game Boy despertou minha paixão pela programação. Decidi me desafiar ao tentar recriar uma experiência semelhante aos jogos da franquia.";
    fightGameParagraph.textContent =
      "Durante minha infância e adolescência, nos finais dos anos 90 e início dos anos 2000, jogar Street Fighter com amigos e primos era uma das melhores experiências que eu poderia ter. Essa nostalgia me motivou a tentar recriar um pequeno jogo de luta, como uma forma de homenagear essa época divertida e desafiadora.";
    //About
    aboutTitleEN.style.display = "none";
    aboutTitleBR.style.display = "block";
    aboutSubTitle.textContent = "Cientista da computação";
    aboutMeParagraph.textContent =
      "Olá, meu nome é Thales. Desde os meus 6 anos de idade, quando recebi meu primeiro console (um Mega Drive III), sou apaixonado por Tecnologia. Foi nesse momento que despertou em mim a curiosidade de entender como a mágica acontecia ao apertar um botão e fazer o Sonic pular ou correr. Meu primeiro contato com programação foi aos 11 anos, utilizando Lego NXT, e tive a experiência gratificante de ganhar um campeonato de robótica na escola. Desde então, meu interesse por esse mundo só cresceu. Amo programar, resolver problemas e aprender coisas novas todos os dias. Descobri minha paixão por programação e pelos desafios que ela proporciona.";
    //Contact
    contactTitleEN.style.display = "none";
    contactTitleBR.style.display = "block";
    //Footer
    footerSubTitle.textContent = "Só O Estudo Salva";
  } else {
    //Nomes em Inglês dos itens da lista no Header
    Services.textContent = "Services";
    Projects.textContent = "Projects";
    About.textContent = "About";
    Contact.textContent = "Contact";

    //Apresentação
    const textsH1 = [" ", "Hello,", "My name is"];
    h1Elements.forEach((element, index) => {
      // Verifica se há um texto correspondente no array e atribui ao elemento h1
      if (textos[index]) {
        element.textContent = textsH1[index];
      }
    });
    buttonPortfolio.textContent = "Portfolio";
    //Services
    servicesSectionTitleEN.style.display = "block";
    servicesSectionTitleBR.style.display = "none";
    servicesParagraph.textContent =
      "I have extensive experience in backend development using Node.js and GraphQL, ensuring the creation of efficient and scalable APIs. On the frontend, I have skills in HTML and CSS to create attractive and responsive interfaces. Additionally, I have knowledge in game development, using C# and Unity to create immersive experiences. I have also studied Python, with a special focus on Artificial Intelligence concepts, enabling the creation of intelligent and automated solutions. Complementing my expertise, I have developed games using JavaScript, leveraging the versatility of this language. Furthermore, I have had the opportunity to teach programming to beginners, sharing my knowledge and assisting others in their learning journey. I am ready to collaborate on challenging projects, applying my technical knowledge and passion for programming to deliver high-quality solutions.";
    frontEndDeveloperParagraph.textContent =
      "I am a front-end developer with experience in HTML, CSS, React.js, and Next.js. I have a strong knowledge of building attractive and responsive user interfaces, with skills to work on multiple projects and integrate APIs. Additionally, I am always up-to-date with the latest trends and technologies to improve user experience and performance.";
    backEndDeveloperParagraph.textContent =
      "I am an experienced back-end developer in technologies such as JavaScript, Node.js, TypeScript, Nest.js, and GraphQL. I have a solid knowledge of writing unit tests with Jest, as well as skills in working on complex projects and creating scalable solutions. I am always up to date with the latest trends and technologies in back-end development to provide effective and efficient solutions.";
    gameDeveloperParagraph.textContent =
      "As a game developer, I have experience in creating platform, fighting, and RPG games using JavaScript, Unity, and C#. I have worked on challenging projects, implementing engaging mechanics and impressive graphics. I stay updated with the latest trends and technologies. Ready to collaborate on innovative projects.";
    programmingTeacherParagraph.textContent =
      "As an instructor, I've taught programming logic and JavaScript to beginner students in Systems Analysis and Computer Science. Sharing knowledge, building foundations, and fostering essential skills for their promising tech journeys has been truly rewarding.";
    //Projects
    projectsSectionTitleEN.style.display = "block";
    projectsSectionTitleBR.style.display = "none";
    oldPortfolioHead.textContent = "First Portfolio";
    oldPortfolioParagraph.textContent =
      "This project represents my very first portfolio, developed using HTML, CSS, and JavaScript. It showcases my initial journey as a web developer and demonstrates my early skills in front-end development.";
    pokemonGameParagraph.textContent =
      "A project inspired by the third-generation Pokémon games. As a fan of gaming since childhood, Pokémon was one of my favorite games. Playing it on my Game Boy sparked my passion for programming. I decided to challenge myself by recreating a similar experience to the franchise's games.";
    fightGameParagraph.textContent =
      "During my childhood and adolescence, in the late 90s and early 2000s, playing Street Fighter with friends and cousins was one of the best experiences I could have. This nostalgia motivated me to try to recreate a small fighting game as a way to pay homage to that fun and challenging time.";
    //About
    aboutTitleEN.style.display = "block";
    aboutTitleBR.style.display = "none";
    aboutSubTitle.textContent = "Computer Scientist";
    aboutMeParagraph.textContent =
      "Hello, my name is Thales. Since I was 6 years old, when I received my first console (a Mega Drive III), I have been passionate about Technology. It was at that moment that I became curious about how the magic happened when pressing a button and making Sonic jump or run. My first contact with programming was at the age of 11, using Lego NXT, and I had the rewarding experience of winning a robotics championship at school. Since then, my interest in this world has only grown.I love coding, solving problems, and learning new things every day. I have discovered my passion for programming and the challenges it brings.";
    //Contact
    contactTitleEN.style.display = "block";
    contactTitleBR.style.display = "none";
    //Footer
    footerSubTitle.textContent = "Only Study Saves";
  }
});

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
