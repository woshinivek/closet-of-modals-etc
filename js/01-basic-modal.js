const refs = {
  openModalBtn: document.querySelector(".js-modal-btn"),
};

refs.openModalBtn.addEventListener("click", (ev) => {
  const btnElement = ev.target;

  console.dir(btnElement);
});

// // refs.openModalBtn.ontransitionend = () => {

// // };

// console.dir(refs.openModalBtn.style);

// console.dir(refs.openModalBtn);
