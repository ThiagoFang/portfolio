import { Projects } from "../types/IProjects";

export const projects: Projects = [
  {
    title: "Halloween Responsive Website",
    description: {
      short: "Um site de halloween 100% responsivo e com mobile first",
      about:
        "Um site com temática de Halloween, interativo e com efeito de scroll reveal",
      experience:
        "Sempre deixo bem claro que o Halloween é a a minha data favorita do ano, e esse site foi super gostoso de fazer, consegui entender bem na pratica o conceito de Mobile First e também alguns truques de CSS",
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
      short:
        "Um site completamente dinâmico, com base em requisições a uma API Externa",
      about:
        "Um site completamente dinâmico, que mostra todos os pokémons(ou quase todos), com base em requisições a uma API Externa",
      experience:
        "Esse foi o meu primeiro projeto autoral sozinho no React usando Typescript, foi muito bom para aprender mais sobre requisições e funções assíncronas.",
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
      short:
        "Um site de venda de relógios totalmente responsivo e com várias funções",
      about: "Um site de vendas de Relógios totalmente responsivo",
      experience:
        "Esse foi um dos primeiros tutoriais complexos que eu vi sobre HTML e CSS, serviu muito para aprimorar meu conhecimento e aprender sobre responsividade",
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
      short: "Um jogo da memoria desenvolvido com react + TypeScript",
      about:
        "Um joguinho da memoria completamente funcional, com timer e contator de jogadas.",
      experience:
        "Esse projeto foi ótimo para estudar sobre manipulação de listas dentro do react.",
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
      short: "Um jogo da memoria desenvolvido com react + TypeScript",
      about:
        "Uma landing page sobre o jogo Death Stranding, feita para Exercitar o uso de vídeo como background no HTML e CSS Puros",
      experience:
        "Esse projeto foi uma ótima maneira de treinar minhas habilidades em criar no Figma e repassar isso para o código.",
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
      short: "Um Jogo de luta em HTML e Javascript",
      about:
        "Um Jogo de luta entre duas pessoas, criado usando HTML e JavaScript, Com sistemas como Tempo, HitBox e Controles para um segundo Jogador.",
      experience:
        "Esse projéto foi especial para mim, foi o primeiro grande tutorial em outra lingua que eu segui(inglês), serviu muito para entender sobre o Canva e Principalmente sobre POO, consegui reforçar coisas sobre o POO que nem mesmo os cursos que ja fiz conseguiram me ajudar.",
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
