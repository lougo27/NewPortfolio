// GRILLE GRAPHISME 
const mediaItems = [
  {
    type: "video",
    src: "Projets/Logo_anime.mp4",
    classes: [],
    buttons: ["Logo Animé", "Hype"]
  },
  {
    type: "image",
    src: "Projets/fleur_rose.jpg",
    classes: [],
    buttons: ["Illustration" , "Digital"]
  },
  {
    type: "image",
    src: "Projets/fleur_transate.jpg",
    classes: [],
    buttons: ["ToteBag", "Mockups"]
  },
  {
    type: "image",
    src: "Projets/carroussel.jpg",
    classes: ["tall"],
    buttons: ["Carrousel", "Instagram", "Réseaux Sociaux"]
  },
  {
    type: "video",
    src: "Projets/bubble_video.MOV",
    classes: ["tall"],
    buttons: ["Bubble Game", "Graphisme & Conception jeu vidéo"]
  },
  {
    type: "video",
    src: "Projets/baniere.mp4",
    classes: ["wide"],
    buttons: ["Bannière animé", "Motion"]
  },
  {
    type: "image",
    src: "Projets/Montre_LouaneGouin-100.jpg",
    classes: [],
    buttons: ["Illustration", "Digital"]
  },
  {
    type: "image",
    src: "Projets/pochetteCD.png",
    classes: [],
    buttons: ["Pochette CD"]
  },
  {
    type: "image",
    src: "Projets/LogoLigne.png",
    classes: ["two"],
    buttons: ["Logo", "Identité Visuelle"]
  },
  {
    type: "image",
    src: "Projets/LogoRond.png",
    classes: ["end"],
    buttons: ["Logo", "Identité Visuelle"]
  }
];

const gridContainer = document.querySelector(".grid2");

  mediaItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item", ...item.classes);

    let mediaElement;
    if (item.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = item.src;
      mediaElement.autoplay = true;
      mediaElement.muted = true;
      mediaElement.loop = true;
      mediaElement.playsInline = true;
      mediaElement.preload = "auto";
    } else {
      mediaElement = document.createElement("img");
      mediaElement.src = item.src;
      mediaElement.alt = "";
      mediaElement.className = "img";
    }

    mediaElement.classList.add("media");
    itemDiv.appendChild(mediaElement);

    // Overlay (j'essaye de donner un max de noms anglais mais y'a certains j'ai gardé le reflexe du français)
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    item.buttons.forEach(label => {
      const btn = document.createElement("button");
      btn.classList.add("overlay-btn");
      btn.textContent = label;
      overlay.appendChild(btn);
    });

    itemDiv.appendChild(overlay);
    gridContainer.appendChild(itemDiv);
  });