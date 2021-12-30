const refs = {
  openModalBtn: document.querySelector(".js-open-modal-btn"),
  closeModalBtn: document.querySelector(".js-close-modal-btn"),
  backdrop: document.querySelector(".backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModalBtn);
refs.closeModalBtn.addEventListener("click", onCloseModalBtn);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalBtn(ev) {
  document.body.classList.add("show-modal");

  window.addEventListener("keydown", onEscKey);
}

function onCloseModalBtn(ev) {
  document.body.classList.remove("show-modal");

  window.removeEventListener("keydown", onEscKey);
}

function onBackdropClick(ev) {
  if (ev.currentTarget === ev.target) {
    onCloseModalBtn();
  }
}

function onEscKey(ev) {
  if (ev.code === "Escape") {
    onCloseModalBtn();
  }
}
