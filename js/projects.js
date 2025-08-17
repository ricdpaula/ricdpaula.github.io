projects = [
    {
        id: 1,
        title: "Landing page página de vendas fictícia",
        description:
            "Página de vendas fictícia feita utilizando apenas HTML, CSS e Javascript.",
        url: "https://dobrandolucrocomdesign-rpfront.netlify.app/",
        image: "img/pj1.png",
    },
    {
        id: 2,
        title: "Landing page Paulo Piccelli",
        description:
            "Landing page criada em HTML, CSS e Javascript para o advogado Paulo Piccelli.",
        url: "https://paulopiccelli.netlify.app/",
        image: "../img/pj2.png",
    },
    {
        id: 3,
        title: "Landing page Baterkap",
        description:
            "Landing page criada em HTML, CSS e Javascript para uma empresa de venda de baterias.",
        url: "https://baterkap.netlify.app/",
        image: "../img/pj3.png",
    },
    {
        id: 4,
        title: "Site Almeida&Mancini Advocacia",
        description:
            "Site institucional feito em HTML, CSS e Javascript para a advocacia Almeida&Mancini.",
        url: "https://www.almeidaemanciniadvocacia.com.br/",
        image: "../img/pj4.png",
    },
    {
        id: 5,
        title: "Tela de login e cadastro responsivo",
        description: "Página estática de login e cadastro de usuários em HTML e CSS.",
        url: "https://loginregisterm1-rpfront.netlify.app/",
        image: "../img/pj5.png",
    },
    {
        id: 6,
        title: "Meus filmes ReactJS",
        description:
            "Estudo de React. Página de cadastro de filmes separado por gênero.",
        url: "https://meusfilmes.vercel.app/",
        image: "../img/pj6.png",
    },
    {
        id: 7,
        title: "Biblioteca CSS estilo Bootstrap",
        description: "Biblioteca estilo Boostrap em HTML, CSS e Javascript.",
        url: "https://softlylite.netlify.app/",
        image: "../img/pj7.png",
    },
    {
        id: 8,
        title: "SquareBall VueJs",
        description:
            "Utilizando VueJS diretamente no HTML, fiz Estudo manipulação de elemento.",
        url: "https://squareball.netlify.app/",
        image: "../img/pj8.png",
    },
    {
        id: 9,
        title: "Spotify Clone",
        description:
            "Projeto fullstack do canal Hashtag Programação ensinou com aulas práticas a criação do projeto clone do Spotify. Feito com: React, Express, MongoDB, Javascript, HTML e CSS",
        url: "https://projeto-fullstack-spotify.vercel.app/",
        image: "../img/pj9.png",
    },
    {
        id: 10,
        title: "Thagurumi Wordpress",
        description:
            "Site feito para uma cliente em Wordpress, usando os plugins de WooCommerce e Elementor",
        url: "https://youtu.be/3ZMwSsZy4Zk",
        image: "../img/pj10.png",
    },
    {
        id: 11,
        title: "StoreReact Loja Virtual feito em React",
        description:
            "Aplicação de loja simples feita em React, TailWindCSS, Node, Express e Axios.",
        url: "https://storereact-frontend-ricdpaula.vercel.app/",
        image: "../img/pj11.png",
    },
    {
        id: 12,
        title: "Landing Page Legend Design",
        description:
            "Site feito em HTML, CSS, Javascript e Jquery para a minha agência digital focada em design.",
        url: "https://legenddesign.netlify.app/",
        image: "../img/pj12.png",
    },
    {
        id: 13,
        title: "Landing Page BikeSpace",
        description:
            "Site feito para uma loja de venda de e-bikes no Brasil. Utilizei HTML, CSS e Javascript",
        url: "https://bikespace-legenddesign.netlify.app/",
        image: "../img/pj13.png",
    },
];

const gallery = document.querySelector('.gallery')

for (i = 0; i <= projects.length; i++) {
    let projectBox = document.createElement('A');
    projectBox.classList.add('box-gallery');
    projectBox.style.backgroundImage =  `url(${projects[i].image})`;
    projectBox.target = "_blank"
    projectBox.href = projects[i].url;
    gallery.appendChild(projectBox);
}



