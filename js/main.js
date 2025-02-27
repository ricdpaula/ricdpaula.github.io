projects = [
  {
    id: 0,
    title: "Landing page página de vendas fictícia",
    description:
      "Página de vendas fictícia feita utilizando apenas HTML, CSS e Javascript.",
    url: "https://dobrandolucrocomdesign-rpfront.netlify.app/",
    image: "img/pj1.png",
  },
  {
    id: 1,
    title: "Landing page Paulo Piccelli",
    description:
      "Landing page criada em HTML, CSS e Javascript para o advogado Paulo Piccelli.",
    url: "https://paulopiccelli.netlify.app/",
    image: "../img/pj2.png",
  },
  {
    id: 2,
    title: "Landing page Baterkap",
    description:
      "Landing page criada em HTML, CSS e Javascript para uma empresa de venda de baterias.",
    url: "https://baterkap.netlify.app/",
    image: "../img/pj3.png",
  },
  {
    id: 3,
    title: "Site Almeida&Mancini Advocacia",
    description:
      "Site institucional feito em HTML, CSS e Javascript para a advocacia Almeida&Mancini.",
    url: "https://www.almeidaemanciniadvocacia.com.br/",
    image: "../img/pj4.png",
  },
  {
    id: 4,
    title: "Tela de login e cadastro responsivo",
    description: "Página estática de login e cadastro de usuários em HTML e CSS.",
    url: "https://loginregisterm1-rpfront.netlify.app/",
    image: "../img/pj5.png",
  },
  {
    id: 5,
    title: "Meus filmes ReactJS",
    description:
      "Estudo de React. Página de cadastro de filmes separado por gênero.",
    url: "https://meusfilmes.vercel.app/",
    image: "../img/pj6.png",
  },
  {
    id: 6,
    title: "Biblioteca CSS estilo Bootstrap",
    description: "Biblioteca estilo Boostrap em HTML, CSS e Javascript.",
    url: "https://softlylite.netlify.app/",
    image: "../img/pj7.png",
  },
  {
    id: 7,
    title: "SquareBall VueJs",
    description:
      "Utilizando VueJS diretamente no HTML, fiz Estudo manipulação de elemento.",
    url: "https://squareball.netlify.app/",
    image: "../img/pj8.png",
  },
  {
    id: 8,
    title: "Spotify Clone",
    description:
      "Projeto fullstack do canal Hashtag Programação ensinou com aulas práticas a criação do projeto clone do Spotify. Feito com: React, Express, MongoDB, Javascript, HTML e CSS",
    url: "https://projeto-fullstack-spotify.vercel.app/",
    image: "../img/pj9.png",
  },
  {
    id: 9,
    title: "Thagurumi Wordpress",
    description:
      "Site feito para uma cliente em Wordpress, usando os plugins de WooCommerce e Elementor",
    url: "https://youtu.be/3ZMwSsZy4Zk",
    image: "../img/pj10.png",
  },
];

function portfolio(pj) {
  let project = projects[pj.getAttribute("data-id")];
  document.querySelector(".modal").innerHTML = "";
  $(".container-modal").fadeIn().css({ display: "flex" });
  $(".modal").append("<img src=" + project.image + " />");
  $(".modal").append("<h3>" + project.title + "</h3>");
  $(".modal").append("<p>" + project.description + "</p>");
  $(".modal").append(
    "<a target='_blank' href=" + project.url + ">" + "Demo" + "</a>"
  );
}

$("#close-modal").click(() => {
  $(".container-modal").fadeOut();
});

$(".navigate").click(() => {
  $(".nav").animate({ width: "toggle" }, 250).css({ display: "flex" });
});

$("#close-menu").click(() => {
  $(".nav").animate({ width: "toggle" }, 250);
});

$(".scrollLink").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    800
  );
});

function colorMode() {
  let checkbox = document.getElementById("checkbox");

  if (checkbox.checked == true) {
    document.body.style.backgroundColor = "#EEEEEE";
    let allH1 = document.querySelectorAll("h1");
    allH1.forEach((h1) => {
      h1.classList.add("text-lightmode");
    });
    let allH2 = document.querySelectorAll("h2");
    allH2.forEach((h2) => {
      h2.classList.add("text-lightmode");
    });
    let allP = document.querySelectorAll("p");
    allP.forEach((p) => {
      p.classList.add("text-lightmode");
    });
    let allH4 = document.querySelectorAll("h4");
    allH4.forEach((h4) => {
      h4.classList.add("text-lightmode");
    });
    let allBoxSkill = document.querySelectorAll(".box-skill");
    allBoxSkill.forEach((boxSkill) => {
      boxSkill.classList.add("box-lightmode");
    });
    let allButton = document.querySelectorAll(".btn");
    allButton.forEach((btn) => {
      btn.classList.add("btn-lightmode");
    });
    let allSmall = document.querySelectorAll("small");
    allSmall.forEach((small) => {
      small.classList.add("text-lightmode");
    });
    let socialMedia = document.querySelector(".container-social-media");
    socialMedia.classList.add("bg-lightmode");
    let modal = document.querySelector(".modal");
    modal.classList.add("bg-lightmode");
    let boxGallery = document.querySelectorAll(".box-gallery");
    boxGallery.forEach((box) => {
      box.classList.add("box-lightmode");
    });
  } else {
    document.body.style.backgroundColor = "#151515";
    let allH1 = document.querySelectorAll("h1");
    allH1.forEach((h1) => {
      h1.classList.remove("text-lightmode");
    });
    let allH2 = document.querySelectorAll("h2");
    allH2.forEach((h2) => {
      h2.classList.remove("text-lightmode");
    });
    let allP = document.querySelectorAll("p");
    allP.forEach((p) => {
      p.classList.remove("text-lightmode");
    });
    let allH4 = document.querySelectorAll("h4");
    allH4.forEach((h4) => {
      h4.classList.remove("text-lightmode");
    });
    let allBoxSkill = document.querySelectorAll(".box-skill");
    allBoxSkill.forEach((boxSkill) => {
      boxSkill.classList.remove("box-lightmode");
    });
    let allButton = document.querySelectorAll(".btn");
    allButton.forEach((btn) => {
      btn.classList.remove("btn-lightmode");
    });
    let socialMedia = document.querySelector(".container-social-media");
    socialMedia.classList.remove("bg-lightmode");
    let modal = document.querySelector(".modal");
    modal.classList.remove("bg-lightmode");
    let allSmall = document.querySelectorAll("small");
    allSmall.forEach((small) => {
      small.classList.remove("text-lightmode");
    });
    let boxGallery = document.querySelectorAll(".box-gallery");
    boxGallery.forEach((box) => {
      box.classList.remove("box-lightmode");
    });
  }
}
