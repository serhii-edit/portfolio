
  var modal = document.querySelector(".modal");
  var modald = document.querySelector(".modal__dialog")
  var modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const modalClose = document.querySelector(".modal__close");
  const toggleModal = () => {
    modal.classList.toggle("modal-visible");
  };

$(document).ready(function () {
  
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

$('a').click(function(e){
  if($(this).attr('href').indexOf('#') != -1){ // Проверяем, является и ссылка действительно якорной ссылкой.
  e.preventDefault(); // Отменяем событие перехода.
        var href = $(this).attr('href').replace('#', ''); // Получаем из якорной ссылки нужный ID элемента, к которому будет происходить переход.
  
  if($('#'+href).length > 0){ // Проверяем, существует ли на странице нужный нам элемент.
          var tophref = $('body').find('#'+href).offset().top; // Получаем координаты элемента, относительно начала страницы.
          $('html, body').animate({scrollTop: tophref}, 800); // Создаём анимацию скрола к нужному элементу.
  }
}
});


// xxxxxxxxxxxxxxxxxxxxx


$(".scrollup").fadeOut();
  
  // setting for scroll(up) (down)

  $(function () {
    // On click on .scrollup
    $(".scrollup").click(function () {
      // switch to top of page
      $("html, body").animate({
        scrollTop: 0,
      },1000)
    });
  });

  // When scroll (window) - (down)
  $(window).scroll(function () {
    // If user scrolled page more than 200px
    if ($(this).scrollTop () > 300) {
      // Make a .scrollup fadein
      $(".scrollup").fadeIn();
    }
    // else fadeout .scrollup
    else {
      $(".scrollup").fadeOut();
    }
  });



});