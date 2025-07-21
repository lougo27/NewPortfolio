let title = document.title;
window.addEventListener("blur", () => {
  document.title = "Contactez-moi ;)";
});

window.addEventListener("focus", () => {
  document.title = title;
});


function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
}
const burger = document.querySelector(".burger"); // Cible le 1er élément avec la classe "burger"
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.messagedefilant');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const text = container.querySelector('.title');

        // Empêche de relancer l'animation
        if (text.classList.contains('anim-started')) return;

        text.classList.add('anim-started');

        const containerWidth = container.offsetWidth;
        const textWidth = text.scrollWidth;

        const distance = textWidth + containerWidth;
        const speed = 150; // pixels/sec
        const duration = distance / speed;

        // Positionne le texte hors écran à droite
        text.style.transform = `translateX(${containerWidth}px)`;

        // Force reflow pour garantir l'application du style avant l'animation
        void text.offsetWidth;

        // Lancement de l'animation
        const animation = text.animate(
          [
            { transform: `translateX(${containerWidth}px)` },
            { transform: `translateX(-${textWidth}px)` }
          ],
          {
            duration: duration * 1000,
            iterations: Infinity,
            easing: "linear"
          }
        );

        // Rend visible seulement après l'initialisation
        container.style.visibility = 'visible';
      }
    });
  }, {
    threshold: 0.6 // déclenche quand au moins 60% est visible
  });

  elements.forEach(el => {
    el.style.visibility = 'hidden'; // par défaut caché
    observer.observe(el);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";

  // initialisation de l'observer sur les vidéos déjà présentes
  //initVideoObserver();
});


// fonction pour créer une vidéo et l'ajouter + observer
function createVideo(project, card) {
  if (project.linkVideo) {
    const video = document.createElement("video");
    video.src = project.linkVideo;
    video.controls = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "none";
    video.classList.add("videoCode");
    video.style.width = "100%";
    video.style.aspectRatio = "5 / 3";

    card.appendChild(video);

    // video.pause(); // on met la vidéo en pause explicitement

    // // on observe la nouvelle vidéo pour le IntersectionObserver
    // if (observer2) {
    //   observer2.observe(video);
    // }
  }
}



// FOOTER


// window.addEventListener("scroll", () => {
//   document.querySelectorAll("video").forEach(video => video.pause());
// });


