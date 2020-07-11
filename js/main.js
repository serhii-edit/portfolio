
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


// xxxxxxxxxxx


// validate & mask

$(".contact-form").validate({
  errorClass: "error-form",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
    },
    userPhone: {
      required: true,
      minlength: 17,
    },
    userObject: {
      required: true,
      minlength: 3,
    },
    userMassage: {
      required: true,
      minlength: 150,
      maxlength: 350,
    },
    // compound rule
    userEmail: {
      required: true,
      email: true,
    },
  },
// xxxxxxxxxxxxxxxxxxxxx
    messages: {
      userMassage: {
       required: "Massage is required",
       minlength: "Type more...",
       maxlength: "Little Shorter",
      },
      userName: {
        required: "Name is required",
        minlength: "Not shorter than 1"
      },
      userPhone: "Phone is required",
      userObject: {
        required: "Object is required",
        minlength: "Not shorter than 3"
      },
      userEmail: {
        required: "Email is required",
        email: "Type in format: name@domain.com",
      },
  },
});

// mask for phone
$('[type=tel]').mask('+1 (000) 000-0000', {placeholder: "+1 (___) ___-____"});