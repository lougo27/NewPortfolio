//PARTIE CODE

const projects = [
  {
    title: "Mon univers - Portfolio",
    description: "Mon premier portfolio était surtout expérimental, un peu comme celui-ci d’ailleurs ! Mais il visait à me faire expérimenter les animations CSS et JS, et au final, il me correspondait parfaitement, que ce soit dans le graphisme ou avec le petit côté ludique (cartes à gratter, planète qui tourne…)",
    linkVideo: "Projets/Portfolio.mp4",
    link: "#"
  },
  {
    title: "Le cercle des poêtes disparus",
    description: "En binôme, nous avons conçu cette animation typographique en JavaScript dans le cadre de notre apprentissage. Nous avons choisi un texte qui nous tenait à cœur, puis imaginé une expérience visuelle autour de ses mots et de son message. <br><br> (PS: le projet est en maintenance, il y'a eu un problème avec la version en ligne !)",
    linkVideo: "Projets/V1_AnimationText.mp4",
    link: "#"
  },
  {
    title: "The Maze Game",
    description: "The Maze est le premier défi que je me suis lancé en apprenant JavaScript. En une après-midi, je me suis mise au défi de concevoir un jeu de labyrinthe complet, en passant par la génération aléatoire du labyrinthe, le déplacement du personnage, un minuteur, et une sauvegarde du meilleur temps via le local storage. <br> Mais je ne me suis pas arrêtée là : j’ai ensuite conçu rapidement une interface, puis composé une musique d’ambiance sur Soundtrap dans la dernière demi-heure. <br><br>Par la suite, j’ai simplement remarqué que le labyrinthe posait problème sur les écrans trop grands.",
    linkVideo: "Projets/The_maze_game.mp4",
    link: "#"
  },
  {
    title: "Jeu de la vie - revisité",
    description: "Un jour, je suis tombée sur une vidéo d’Ego sur YouTube qui présentait ce jeu et racontait son histoire. Ça m’a profondément marquée. Mais je n’ai pas pu m’empêcher de réfléchir à la manière de le programmer… et très vite, j’ai eu envie de créer ma propre version. <br> <br>À mon sens, il manquait une règle de gestion des couleurs, alors je l’ai ajoutée. C’est à partir de là que j’ai commencé à vraiment adorer ce jeu, au point d’y passer des heures ! Je me suis alors fixé un objectif : intégrer toutes les fonctionnalités et repenser le design pour le rendre attractif et accessible à tous.",
    linkVideo: "images/erreur.png",
    link: "#"
  },
  {
    title: "Game Muséeum",
    description: "Dans le cadre de mon apprentissage du JavaScript, nous devions créer une carte web avec un objet et générer les éléments grâce aux boucles. On devait aussi intégrer un switch au niveau du mode d'affichage. Comme j’avais déjà commencé à apprendre le JS en autodidacte, j’ai voulu aller plus loin en me lançant un défi : concevoir une borne d’arcade et intégrer cartes directement à l’écran en créant l'effet perspective de l'écran qui va avec !",
    linkVideo: "Projets/GameMuseum.mp4",
    link: "#"
  },
  {
    title: "Memmory Game",
    description: "En jouant au memory avec ma famille, j’ai été tout de suite intriguée par son fonctionnement. Très vite, une question m’est venue : comment pourrais-je coder un jeu comme celui-ci ? <br> <br>Curieuse d’explorer cette idée, j’ai rassemblé des photos de ma galerie et créé différentes catégories pour donner vie à ma propre version : une galerie photo façon Memory !",
    linkVideo: "Projets/Memory.mp4",
    link: "#"
  }
];

// const grid = document.getElementById("projectGrid");

// // Fonctions rotation aléatoire
// const rotations = ["rotate(-4deg)", "rotate(3deg)", "rotate(-6deg)"];

// projects.forEach(project => {
//   const block = document.createElement("div");
//   block.classList.add("block");

//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.style.transform = rotations[Math.floor(Math.random() * rotations.length)];

//   if (project.linkVideo) {
//     const video = document.createElement("video");
//     video.src = project.linkVideo;
//     video.controls = true;
//     video.autoplay = true;
//     video.loop = true;
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "none";
//     video.classList.add("videoCode");
//     video.style.width = "100%";
//     video.style.aspectRatio = "5 / 3";
//     card.appendChild(video);

//     video.pause(); // forcer la pause
// }

//   const text = document.createElement("div");
//   text.classList.add("text");
//   text.innerHTML = `
//     <strong>${project.title}</strong><br>${project.description}<br>
//     <a href="${project.link}" target="_blank">
//       <button class="voirProject">Voir le projet</button>
//     </a>
//   `;
  

//   block.appendChild(card);
//   block.appendChild(text);
//   grid.appendChild(block);
// });




const carousel2 = document.getElementById("carouselTWO");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("carousel-item2", "project-card");

  if (project.linkVideo) {
    const video = document.createElement("video");
    video.src = project.linkVideo;
    video.muted = true;
    video.controls = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.classList.add("project-video");
    card.appendChild(video);
  }

  const content = document.createElement("div");
  content.classList.add("project-content");
  content.innerHTML = `
    <h2 class="project-title">${project.title.split(" - ")[0].toUpperCase()}</h2>
    <h3 class="project-subtitle">${project.title.split(" - ")[1] || ""}</h3>
    <hr class="divider" />
    <p class="project-description">${project.description}</p>
    ${project.link ? `<a href="${project.link}" target="_blank"><button class="voirProject">Voir le projet</button></a>` : ""}
  `;

  card.appendChild(content);
  carousel2.appendChild(card);

  
});

initCarousel('carouselTWO', 'dotsTWO', 'prevTWO', 'nextTWO', 3, 'carousel-item2');

function initCarousel(carouselId, dotsId, prevBtnId, nextBtnId, centerIndex = 0, itemClass = 'carousel-item') {
  const carousel = document.getElementById(carouselId);
  const dotsContainer = document.getElementById(dotsId);
  let currentIndex = centerIndex;

  // Récupère tous les éléments .carousel-item à l’intérieur du carrousel
  function getItems() {
    return Array.from(carousel.getElementsByClassName(itemClass));
  }

  function updateCarousel() {
    const items = getItems();
    if (!items.length) return;

    items.forEach((item, index) => {
      item.classList.toggle('center', index === currentIndex);
    });

    //La galère pour centrer l'élément selectionné
    const selectedItem = items[currentIndex];
    const container = carousel.parentElement;
    const containerWidth = container.offsetWidth;
    const itemCenter = selectedItem.offsetLeft + selectedItem.offsetWidth / 2;
    const offset = itemCenter - containerWidth / 2;

    carousel.style.transform = `translateX(${-offset}px)`;

    updateDots(items);
  }

  function updateDots(items) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === currentIndex ? ' active' : '');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function next() {
    const items = getItems();
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function prev() {
    const items = getItems();
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  document.getElementById(nextBtnId).addEventListener('click', next);
  document.getElementById(prevBtnId).addEventListener('click', prev);

  updateCarousel();
}

// J'ai suivi un tuto mais ça ne marche pas j'imagine que c'est à cause des cartes
// Cette partie ne fonctionne pas et j'ai pas trop compris le truc faudra que j'étudie davantages le truc
function enableDragScroll(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('dragging');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('dragging');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // facteur de vitesse
    container.scrollLeft = scrollLeft - walk;
  });
}

enableDragScroll('.carousel');
enableDragScroll('.carouselTWO');


initCarousel('carousel', 'dots', 'prev', 'next', 3);

