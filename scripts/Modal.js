const closeInModalBox = getById("close-modal-box");
const overlayBillboard = getById("overlay-billboard");
const overlayAll = getById("overlay-modal");
const modalTV = getById("modal-tv");
const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const billboardImages = document.querySelectorAll(".projects-billboards-content");
const tv = getById("tv-set");
const tvStand = getById("tv-stand");
const modalBoxContents = [
  {
    name: "projects-billboard-2",
    html: `<li class="slide">
    <img
      src="/images/projects/modal/modal-content/tetris/00.png"
      alt="tetris"
      class="img-content"
    />
  </li>
  <li class="slide">
    <img
      src="/images/projects/modal/modal-content/tetris/aboutTetris.png"
      alt="tetris"
      class="img-content"
    />
  </li>
  <li class="slide">
    <img
      src="./images/projects/modal/modal-content/tetris/Group 7.png"
      alt="tetris"
      class="img-content"
    />
  </li>
  <li class="slide">
    <img
      src="./images/projects/modal/modal-content/tetris/Group 8.png"
      alt="tetris"
      class="img-content"
    />
  </li>`,
  },
  {
    name: "projects-billboard-5",
    html: `<li class="slide">
    <img
      src="/images/projects/modal/modal-content/gamefolio/00.png"
      alt="tetris"
      class="img-content"
    />
  `,
  },
];

function showModalBox() {
  const billboardId = PROJECTS_SCENE.getStopId();

  if (billboardId === null) return;
  for (let i = 0; i < modalBoxContents.length; i++) {
    if (billboardId === modalBoxContents[i].name) {
      const modalContent = getById("slides-container");
      modalContent.innerHTML = modalBoxContents[i].html;
    }
  }
  modalTV.classList.add("show");
  overlayAll.classList.add("changeBackground");
  tv.classList.add("shift");
  tvStand.classList.add("shift");
}

closeInModalBox.addEventListener("click", () => {
  modalTV.classList.remove("show");
  overlayAll.classList.remove("changeBackground");
  slidesContainer.scrollLeft = 0;
  tv.classList.remove("shift");
  tvStand.classList.remove("shift");
});

nextButton.addEventListener("click", () => {
  const slide = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slide = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
