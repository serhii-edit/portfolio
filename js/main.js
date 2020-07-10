
  var modal = document.querySelector(".modal");
  var modald = document.querySelector(".modal__dialog")
  var modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const modalClose = document.querySelector(".modal__close");
  const toggleModal = () => {
    modal.classList.toggle("modal-visible");
  };
  
  modalBtn.forEach(element => {
    element.addEventListener("click", toggleModal);
      console.log("click");
    });

modalClose.addEventListener("click", toggleModal);

window.onclick = function (event) {
  if (event.target == modal) {
  toggleModal();
  }
};

// modal.onkeydown = function(event) {
//   if (event.which == 27) {
//     toggleModal();
//   }
// };

// modal.addEventListener("onkeydown == 27", toggleModal);