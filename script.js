function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
}

const burger = document.querySelector(".burger"); // Cible le 1er élément avec la classe "burger"
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
});



const canvas = document.getElementById("canvas-bg");
const ctx = canvas.getContext("2d");
const hiddenSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
hiddenSVG.style.position = "absolute";
hiddenSVG.style.visibility = "hidden";
document.body.appendChild(hiddenSVG);

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const mouse = { x: -9999, y: -9999 };
let pointsList = [];

const shapes = [
// {
//     path: "M1388.95,1750.62c-108.71,127.24-299.99,170.93-580.41,26.12-309.66-159.92-73.31-272.72-429.74-121.37C22.38,1806.72-10.48,1412.63,2.15,1124.21c12.64-288.42,437.32-144.21,121.34-425.5C-192.49,417.42,251.15,288.92,560.81,53.32c309.66-235.59,409.51,402.65,725.49,121.37s731.81,501.17,544.75,585.42-74.57,219.89,214.87,606.83c263.9,352.79-109.96,478.88-656.98,383.68Z",
//     color: "#ff9f1c",
//     viewBox: {x: 0, y: 0, width: 2132.49, height: 1867.35},
//     x: 200, y: 300, // ← modifie ici pour changer l’emplacement
//     scale: 0.2 // ← respecte la valeur spécifique à chaque forme
// },
{//fleur
    path: "M1944.11,695.19c-70.84-218.01-229.68-361.79-483.58-279.29-21.51,6.99-42.24,15.16-62.16,24.35,2.58-21.79,3.94-44.03,3.94-66.64C1402.32,106.64,1216.49,0,987.26,0s-415.06,106.64-415.06,373.6c0,22.61,1.36,44.85,3.94,66.64-19.92-9.19-40.65-17.36-62.16-24.35-253.9-82.5-412.74,61.28-483.58,279.29-70.84,218.01-26.84,427.7,227.06,510.19,21.51,6.99,43.08,12.56,64.6,16.84-14.89,16.11-29.07,33.3-42.36,51.6-156.92,215.98-69.26,411.48,116.19,546.22,185.45,134.74,398.47,157.69,555.39-58.29,13.29-18.3,25.26-37.09,35.98-56.23,10.72,19.14,22.69,37.94,35.98,56.23,156.92,215.98,369.94,193.03,555.39,58.29,185.45-134.74,273.11-330.24,116.19-546.22-13.29-18.3-27.47-35.49-42.36-51.6,21.52-4.28,43.09-9.85,64.6-16.84,253.9-82.5,297.9-292.18,227.06-510.19Z",
    color: "#BF2E21",
    viewBox: {x: 0, y: 0, width: 1974.52, height: 1922.75},
    x: 900, y: 400, // ← modifie ici pour changer l’emplacement
    scale: 0.2
},
{//F1
  path: "M464.23,82.39c-.48-1.25-1.44-2.34-2.87-3l-61.94-22.22v-6.64c0-1.13-.91-2.04-2.04-2.04-.56,0-1.08.23-1.45.6-.37.37-.6.87-.6,1.44v5.17l-8.17-2.93c-4.67-2.15-9.5-3.9-14.43-5.25-.02-.01-.05-.01-.07-.02-2.08-.56-4.17-1.05-6.28-1.46-.02,0-.04,0-.06,0-5.94-1.19-12.01-1.79-18.1-1.79h-6.03l-23.65-15.24c-8.12-5.23-17.95-7.1-27.42-5.22l-58.86,11.68v-3.88l1.3-1.47c1.11-1.27,1.73-2.9,1.73-4.6V6.58h4.17c0-3.64-2.94-6.58-6.57-6.58h-17.79c0,3.63,2.95,6.58,6.58,6.58h1.25v5.38h-77.27l-59.72,24.03,7.64,9.13c.23.2.46.41.69.62,1.74,1.6,3.34,3.37,4.77,5.27l-.36.21-4.52-5.4-.58-.7c-6.83-6.02-15.72-9.66-25.44-9.66-6.19,0-12.05,1.48-17.25,4.11l-8.21-14.46H3.2l3.19,4.97c3.24,5.05-.39,11.68-6.39,11.68l6.25,13.07,12.96,27.14h10.42c2.09,12.99,10.28,23.87,21.47,29.44,5.15,2.56,10.93,4,17.04,4,6.67,0,12.95-1.71,18.44-4.73,0-.01.01-.01.01-.01,2.72-1.49,5.25-3.31,7.53-5.41h235.5v-7.55h-7.27v-15.93l.61-.31h5.03c.3,12.1,6.62,22.67,16.01,28.67,5.22,3.34,11.38,5.27,17.99,5.27s12.16-1.74,17.21-4.78c9.38-5.65,15.89-15.78,16.71-27.52l17.79,2.86v15.92h-2.01v4.88h56.43v-24.38h-3.89Z",
  color: "#F2C12E",
  viewBox: { x: 0, y: 0, width: 468.12, height: 115.41 },
  x: 50, y: 550,
  scale: 1.1 // 👈 Taille multipliée par 4
},
{//NOTE DOUBLE
  path: "M769.39,6.09v.52L253.98,111.63c-4.03.82-6.92,4.36-6.92,8.48v649.63c-37.68-18.74-95.25-15.34-149.5,12.87c-75.35,39.18-115.53,111.14-89.75,160.73c25.78,49.59,107.77,58.03,183.12,18.85c62.89-32.7,104.17-88.39,103.89-134.51V253.21c0-3.62,2.55-6.74,6.1-7.46l459.35-93.21c4.72-.96,9.12,2.65,9.12,7.46v479.15c-37.68-18.74-95.25-15.34-149.5,12.87c-75.35,39.18-115.53,111.14-89.75,160.73c25.78,49.59,107.77,58.03,183.13,18.85c62.89-32.7,101.12-88.21,97.1-134.51h.37V8.65c0-5.43-4.94-9.52-10.27-8.5l-31.07,5.94Z",
  color: "#F24130",
  viewBox: { x: 0, y: 0, width: 810.74, height: 986.83 },
  x: 950, y: 50,
  scale: 0.1
},
{//NOTE
  path: "M793.32,147.2c-51.32-109.53-143.54-181.06-260.07-120.66-28.48,14.76-55.65,33.11-80.27,53.98-16.76,14.21-39.72,22.09-61.23,24.58-3.83.44-7.58.6-11.24.5-10.69-4.39-19.49-10.21-24.66-22.58-3.6-8.61-3.32-16.76-4.58-25.67-1.06-7.48-1.51-15.03-1.97-22.57-.38-6.2.15-13.55-1.93-19.45-3.97-11.21-26.83-17.72-37.51-14.51-8.27,2.48-8.32,13.49-7.84,20.67.02.27,0,.53.02.8l-2.54,770.22c-45.68-23.46-115.47-19.2-181.23,16.12-91.35,49.06-140.06,139.17-108.8,201.26,31.26,62.09,110.27,75.67,201.61,26.61,76.24-40.95,126.29-110.67,125.94-168.43V300.34s-1.28-10.43-1.28-10.43c59.45,45.26,132.24,9,185.25-28.86,42.09-30.06,114.94-126.19,169.85-115.59,51.54,9.95,76.27,87.08,86.84,132.14,13.54,57.76,9.36,119.28-12.16,174.42-4.91,12.58-9.86,26.52-16.4,38.26-7.83,14.05-18.12,27.96-15.99,45.43,1.01,8.26,4.14,14.34,11.69,9.39,5.84-3.83,10.83-9.19,15.39-14.51,21.27-24.88,36.24-56.04,49.63-85.98.39-.87.77-1.73,1.16-2.6,2.55-4.93,4.67-9.74,6.09-14.25,28.38-90.88,16.19-195.34-23.74-280.55Z",
  color: "#F24130",
  viewBox: { x: 0, y: 0, width: 832.55, height: 1066.21 },
  x: 1100, y: 20,
  scale: 0.05
},
{//Pion echecs
  path: "M474.32,906.53c-2.33-17.55-18.45-29.88-35.99-27.55,17.54-2.33,29.88-18.45,27.55-36-3.08-23.19-24.6-29.71-43.19-37.62-8.56-3.63-16.91-7.76-25-12.35-8.07-4.57-15.88-9.61-23.38-15.06-3.85-2.79-7.6-5.71-11.28-8.72-.56-.46-2.18-1.85-3.94-3.37l9.75-15.56c2.46-6.15-2.61-12.68-9.18-11.81l-11.61,1.54c-50.31-82.54-85.37-182.16-99.02-284.97l26.07-3.46c1.66-.22,3.24-.63,4.75-1.18,9.65-3.52,15.91-13.37,14.5-23.97-1.41-10.61-9.74-21.3-24.33-19.37l-7.54,1.01c.19-.07.39-.14.58-.2,6.91-2.53,11.39-9.58,10.39-17.17-1.01-7.59-7.38-15.2-16.78-13.95l-7.12.94c-3.52-6.88-6.16-14.25-8.18-21.83,4.61-.95,7.76-5.31,7.13-10.06-.66-4.95-5.21-8.44-10.16-7.78l-.69.09c-1.09-6.78-1.87-13.58-2.52-20.22-5.64-43.32-4.4-85.86,3.14-126.46,7.54-40.61,21.39-79.28,40.97-114.84.59-1.39,1.14-2.8,1.74-4.2-7.04-7.02-17.12-10.79-27.73-9.38-5.54.73-10.87,2.87-15.36,6.21-3.75,2.79-6.57,6.48-8.87,10.48-16.87-26.13-45.54-43.36-77.49-45.14,2.04-4.12,2.92-8.86,2.27-13.76v-.02c-.05-.38-.11-.77-.18-1.14l-.02-.12c-.05-.27-.11-.53-.16-.79-.03-.09-.05-.19-.07-.29-.03-.14-.07-.26-.11-.4-.05-.24-.11-.47-.18-.69-.2-.71-.43-1.41-.7-2.09-.07-.18-.14-.36-.21-.53-.22-.53-.47-1.05-.72-1.56-.09-.17-.18-.35-.28-.53-.12-.22-.24-.44-.37-.67-.09-.17-.19-.34-.3-.5-.05-.1-.11-.19-.18-.29-.1-.17-.2-.34-.31-.5-.14-.21-.29-.41-.44-.62-.11-.16-.22-.32-.34-.47-.41-.55-.84-1.08-1.31-1.59-.23-.28-.47-.54-.73-.79-.24-.26-.5-.5-.75-.74-.2-.19-.4-.36-.61-.55-.25-.22-.5-.43-.76-.63-.07-.06-.14-.12-.22-.18-.15-.13-.31-.24-.46-.36-.06-.03-.11-.07-.17-.13-.36-.26-.74-.51-1.12-.77-.19-.12-.39-.25-.59-.36-.23-.14-.46-.28-.7-.41-.17-.1-.35-.2-.53-.3-.05-.03-.12-.06-.17-.08-.44-.23-.87-.44-1.31-.64-3.9-1.75-8.34-2.47-12.9-1.87-13.12,1.75-22.33,13.79-20.59,26.91.62,4.72,2.57,8.92,5.44,12.3h0s.02.04.04.05c.22.26.44.51.67.76-29.16,10.44-51.39,33.95-60.68,62.7-3.2-3.14-6.8-5.85-11.04-7.51-5.2-2.06-10.89-2.73-16.43-2-10.61,1.41-19.36,7.69-24.32,16.3.94,1.19,1.84,2.4,2.77,3.6,56.36,58.43,94.04,134.83,105.77,221.4l-.22.03c1.1,6.58,2.12,13.35,2.84,20.18l-.67.09c-4.96.66-8.45,5.2-7.79,10.16.63,4.75,4.81,8.13,9.5,7.85.04,7.84-.59,15.64-2.19,23.21l-7.51,1c-8.79,1.16-14.96,9.23-13.79,18.01,1.03,7.8,7.52,13.55,15.11,13.9l-5.47.73c-12.27,1.62-20.89,12.89-19.26,25.15,1.62,12.2,12.78,20.79,24.96,19.27h0s27.67-3.66,27.67-3.66c13.82,104.05,5.17,207.36-22.63,301.12l-11.61,1.54c-6.57.87-9.78,8.51-5.78,13.81l15.65,14.5c-.54.8-.97,1.42-1.19,1.73-2.76,3.86-5.64,7.66-8.62,11.36-5.82,7.22-12.04,14.12-18.64,20.63-6.61,6.55-13.6,12.71-20.92,18.46-15.87,12.48-34.95,24.39-31.87,47.58,2.33,17.55,18.44,29.89,36,27.56-5.82.77-11.07,3.05-15.4,6.41-8.73,6.76-13.72,17.85-12.16,29.58l4.22,31.78,439.77-58.39-4.22-31.78ZM110.76,357.04l-.03-.22c.2-.1.39-.2.59-.3.01.14.03.29.04.44l-.6.08Z",
  color: "#F2AE2E",
  viewBox: { x: 0, y: 0, width: 478.54, height: 996.7 },
  x: 1400, y: 100,
  scale: 0.2
}





];

function setupPointsFromPath(shape) {
hiddenSVG.innerHTML = '';
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", shape.path);
hiddenSVG.appendChild(path);

const vb = shape.viewBox;
const scale = shape.scale || 1; // ← respecte la valeur spécifique à chaque forme

const pathLength = path.getTotalLength();
const pointCount = 200;

let pts = [];
for (let i = 0; i < pointCount; i++) {
    const pt = path.getPointAtLength((i / pointCount) * pathLength);
    const x = (pt.x - vb.x) * scale + shape.x;
    const y = (pt.y - vb.y) * scale + shape.y;
    pts.push({
    x, y, ox: x, oy: y,
    angle: Math.atan2(pt.y - vb.y - vb.height / 2, pt.x - vb.x - vb.width / 2)
    });
}
return pts;
}

function drawSmoothPath(points) {
ctx.beginPath();
const len = points.length;
for (let i = 0; i < len; i++) {
    const p0 = points[(i - 1 + len) % len];
    const p1 = points[i];
    const p2 = points[(i + 1) % len];
    const p3 = points[(i + 2) % len];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    if (i === 0) ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
}
ctx.closePath();
ctx.fill();
}

function animate(t) {
ctx.clearRect(0, 0, width, height);
for (const { points, color } of pointsList) {
    for (const p of points) {
    const wave = Math.sin(t * 0.001 + p.angle * 5) * 5;
    const dx = mouse.x - p.x;
    const dy = mouse.y - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const influence = dist < 100 ? (1 - dist / 100) * 20 : 0;
    const targetX = p.ox + Math.cos(p.angle) * wave + dx * 0.2 * influence;
    const targetY = p.oy + Math.sin(p.angle) * wave + dy * 0.2 * influence;

    p.x += (targetX - p.x) * 0.05;
    p.y += (targetY - p.y) * 0.05;
    }
    ctx.fillStyle = color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color + "99";
    drawSmoothPath(points);
    ctx.shadowBlur = 0;
}
requestAnimationFrame(animate);
}

function resize() {
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
pointsList = shapes.map(shape => ({
    points: setupPointsFromPath(shape),
    color: shape.color
}));
}

window.addEventListener("resize", resize);
window.addEventListener("mousemove", e => {
mouse.x = e.clientX;
mouse.y = e.clientY;
});
window.addEventListener("mouseleave", () => {
mouse.x = -9999;
mouse.y = -9999;
});

resize();
animate(0);




//PARTIE CODE

const projects = [
  {
    title: "Mon univers - Portfolio",
    description: "Mon premier portfolio était surtout expérimental, un peu comme celui-ci d’ailleurs ! Mais il visait à me faire expérimenter les animations CSS et JS, et au final, il me correspondait parfaitement, que ce soit dans le graphisme ou avec le petit côté ludique (cartes à gratter, planète qui tourne…)",
    linkVideo: "Projets/Portfolio.mp4",
  },
  {
    title: "Jeu de la vie - revisité",
    description: "Un autre projet intéressant.",
    link: "#"
  },
  {
    title: "The Maze Game",
    description: "Encore un projet cool.",
    linkVideo: "Projets/The_maze_game.mp4",
    link: "#"
  },
  {
    title: "Game Muséeum",
    description: "Un quatrième projet.",
    linkVideo: "Projets/GameMuseum.mp4",
  },
  {
    title: "Le cercle des poêtes disparus",
    description: "Du code et des idées.",
    linkVideo: "Projets/V1_AnimationText.mp4",
    link: "Projets/V1_AnimationText.mp4"
  },
  {
    title: "Memmory Game",
    description: "Dernier projet en date.",
    linkVideo: "Projets/Memory.mp4",
  }
];

const grid = document.getElementById("projectGrid");

// Fonctions rotation aléatoire
const rotations = ["rotate(-4deg)", "rotate(3deg)", "rotate(-6deg)"];

projects.forEach(project => {
  const block = document.createElement("div");
  block.classList.add("block");

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.transform = rotations[Math.floor(Math.random() * rotations.length)];

  if (project.linkVideo) {
    const video = document.createElement("video");
    video.src = project.linkVideo;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.classList.add("videoCode");
    video.style.width = "100%";
    video.style.aspectRatio = "5 / 3";
    card.appendChild(video);
  }

  const text = document.createElement("div");
  text.classList.add("text");
  text.innerHTML = `
    <strong>${project.title}</strong><br>${project.description}<br>
    <a href="${project.link}" target="_blank">
      <button class="voirProject">Voir le projet</button>
    </a>
  `;
  

  block.appendChild(card);
  block.appendChild(text);
  grid.appendChild(block);
});

// Animation au scroll avec IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.block').forEach(el => observer.observe(el));

// Graphisme

const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
let items = Array.from(carousel.children);
let currentIndex = 3; // item central au départ

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.toggle('center', index === currentIndex);
  });

  // Calcul du décalage pour centrer l'item courant
  const itemWidth = items[0].offsetWidth + 20; // largeur + margin*2 (10px de chaque côté)
  const offset = (currentIndex - 2) * itemWidth;
  carousel.style.transform = `translateX(${-offset}px)`;

  updateDots();
}

function updateDots() {
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
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);

updateCarousel();


// FOOTER


