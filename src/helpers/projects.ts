import { Projects } from "../types/IProjects";

export const projects: Projects = [
  {
    title: "Halloween Responsive Website",
    description: {
      pt: {
        short: "Um site de halloween 100% responsivo e com mobile first",
        about:
          "Um site com temática de Halloween, interativo e com efeito de scroll reveal",
        experience:
          "Sempre deixo bem claro que o Halloween é a a minha data favorita do ano, e esse site foi super gostoso de fazer, consegui entender bem na pratica o conceito de Mobile First e também alguns truques de CSS",
      },
      en: {
        short: "A 100% responsive and mobile-first Halloween website.",
        about:
          "A Halloween themed website, interactive with scroll reveal effect.",
        experience:
          "I always make it clear that Halloween is my favorite date of the year, and this site was great to make, I was able to understand well in practice the concept of Mobile First and also some CSS tricks.",
      },
    },
    shortName: "halloweenwebsite",
    image: "https://i.postimg.cc/Hk3CWh7h/halloween-1.jpgv",
    links: {
      github: "https://github.com/ThiagoFang/responsive-halloween-website",
      external: "https://thiagofang.github.io/responsive-halloween-website/",
    },
    techs: ["html", "css", "javascript"],
  },
  {
    title: "Pokedex",
    description: {
      pt: {
        short:
          "Um site completamente dinâmico, com base em requisições a uma API Externa",
        about:
          "Um site completamente dinâmico, que mostra todos os pokémons(ou quase todos), com base em requisições a uma API Externa",
        experience:
          "Esse foi o meu primeiro projeto autoral sozinho no React usando Typescript, foi muito bom para aprender mais sobre requisições e funções assíncronas.",
      },
      en: {
        short:
          "A completely dynamic website based on requests to an external API.",
        about:
          "A completely dynamic website that shows all the pokemons (or almost all of them), based on requests to an external API.",
        experience:
          "This was my first solo authored project in React using TypeScript, it was great for learning more about requests and asynchronous functions.",
      },
    },
    shortName: "pokedex",
    image: "https://i.postimg.cc/dQGBkW2s/pokedex.jpg",
    links: {
      github: "https://github.com/ThiagoFang/pokemon-list",
      external: "https://pokemon-list-qkuo4vrqm-thiagofang.vercel.app/",
    },
    techs: ["html", "css", "javascript", "react"],
  },
  {
    title: "Watches Website",
    description: {
      pt: {
        short:
          "Um site de venda de relógios totalmente responsivo e com várias funções",
        about: "Um site de vendas de Relógios totalmente responsivo",
        experience:
          "Esse foi um dos primeiros tutoriais complexos que eu vi sobre HTML e CSS, serviu muito para aprimorar meu conhecimento e aprender sobre responsividade",
      },
      en: {
        short: "A fully responsive and multi-functional watch sales website.",
        about: "A completely responsive watch sales website.",
        experience:
          "This was one of the first complex tutorials I saw about HTML and CSS, it served a lot to enhance my knowledge and learn about responsiveness.",
      },
    },
    shortName: "watches",
    image: "https://i.postimg.cc/3NR4rx7b/watches-new.jpg",
    links: {
      github: "https://github.com/ThiagoFang/responsive-watches-website",
      external: "https://thiagofang.github.io/responsive-watches-website/",
    },
    techs: ["html", "css", "javascript"],
  },
  {
    title: "DevMemory",
    description: {
      pt: {
        short: "Um jogo da memoria desenvolvido com react + TypeScript",
        about:
          "Um joguinho da memoria completamente funcional, com timer e contator de jogadas.",
        experience:
          "Esse projeto foi ótimo para estudar sobre manipulação de listas dentro do react",
      },
      en: {
        short: "A memory game developed with React + TypeScript.",
        about: "A fully functional memory game, with timer and moves counter.",
        experience:
          "This project was great for studying about manipulating lists within React.",
      },
    },
    shortName: "devmemory",
    image: "https://i.postimg.cc/d1DQW8ZH/memory.jpg",
    links: {
      github: "https://github.com/ThiagoFang/react_devMemory",
      external: "https://react-dev-memory.vercel.app/",
    },
    techs: ["html", "css", "javascript", "typescript", "react"],
  },
  {
    title: "Death Stranding Landing",
    description: {
      pt: {
        short: "Uma landing page sobre o jogo Death Stranding",
        about: "",
        experience: "",
      },
      en: {
        short: "A landing page about the game Death Stranding",
        about:
          "A landing page about the game Death Stranding, designed to practice using video as a background in pure HTML and CSS.",
        experience:
          "This project was a great way to train my skills in creating in Figma and translating that into code",
      },
    },
    shortName: "deathstranding",
    image: "https://i.postimg.cc/V6LvxJ5T/deathstranding.jpg",
    links: {
      github: "https://github.com/ThiagoFang/death-stranding-landing",
      external: "https://thiagofang.github.io/death-stranding-landing/",
    },
    techs: ["html", "css"],
  },
  {
    title: "Fighting Game",
    description: {
      pt: {
        short: "Um Jogo de luta em HTML e Javascript",
        about:
          "Um Jogo de luta entre duas pessoas, criado usando HTML e JavaScript, Com sistemas como Tempo, HitBox e Controles para um segundo Jogador.",
        experience:
          "Esse projéto foi especial para mim, foi o primeiro grande tutorial em outra lingua que eu segui(inglês), serviu muito para entender sobre o Canva e Principalmente sobre POO, consegui reforçar coisas sobre o POO que nem mesmo os cursos que ja fiz conseguiram me ajudar.",
      },
      en: {
        short: "A fighting game in HTML and Javascript.",
        about:
          "A two-player fighting game created using HTML and Javascript, with systems such as Timer, Hitbox, and Controls for a second player.",
        experience:
          "This project was special to me, it was the first big tutorial in another language that I followed (English), it served a lot to understand about POO and especially about OOP, I was able to reinforce things about OOP that not even the courses I have taken could help me with.",
      },
    },
    shortName: "fightgame",
    image: "https://i.postimg.cc/GtwnnNmf/fight.jpg",
    links: {
      github: "https://github.com/ThiagoFang/fighting-game-javascript",
      external: "https://thiagofang-fighting-game.netlify.app/",
    },
    techs: ["html", "css"],
  },
];
