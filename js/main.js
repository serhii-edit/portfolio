
$(document).ready(function () {

  var modal = document.querySelector(".modal");
  var modalBtn = document.querySelector(".portfolio__slide-1");
  var modalClose = document.querySelector(".modal__close");

  modalBtn.onclick = function () {
    modal.style.visibility="visible";
  };

  modalClose.onclick = function ()  {
    modal.style.visibility="hidden";
  };

  modal.onclick = function (event) {
    if (event.target == modal)
    modal.style.visibility="hidden";
  };

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
  submitHandler: function(form) {
    $.ajax({
      // $(form).ajaxSubmit();
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      // dataType: "dataType",
      success: function (response) {
        console.log("Good", + response)
        alert("Submited Succesful");
        $(form)[0].reset();
      },
      error: function (response) {
        alert("The form does't work please call: +1 (828) 380-5185, to us or try send form later" + response)
      }
    });
  }
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

  // var modal = document.querySelector(".modal");
  // var modalBtn = document.querySelector(".portfolio__slide-1");
  // var modalClose = document.querySelector(".modal__close");

  // modalBtn.onclick = function () {
  //   modal.style.visibility="visible";
  // };

  // modalClose.onclick = function ()  {
  //   modal.style.visibility="hidden";
  // };

  // window.onclick = function (event) {
  //   if (event.target == modal)
  //   modal.style.visibility="hidden";
  // };

  // window.onkeydown = function(event) {
  //   if (event.which == 27) {
  //     modala.style.visibility="hidden";
  //   }
  // };

  var modala = document.querySelector(".modala");

  var modalBtna = document.querySelector(".portfolio__slide-2");
  var modalClosea = document.querySelector(".modal__closea");

  modalBtna.onclick = function () {
    modala.style.visibility="visible";
  };

  modalClosea.onclick = function ()  {
    modala.style.visibility="hidden";
  };

  modala.onclick = function (event) {
    if (event.target == modala)
    modala.style.visibility="hidden";
  };

  // window.onkeydown = function(event) {
  //   if (event.which == 27) {
  //     modala.style.visibility="hidden";
  //   }
  // };


  // xxxx

  // modal B
  var modalb = document.querySelector(".modalb");

  var modalBtnb = document.querySelector(".portfolio__slide-3");
  var modalCloseb = document.querySelector(".modal__closeb");

  modalBtnb.onclick = function () {
    modalb.style.visibility="visible";
  };

  modalCloseb.onclick = function ()  {
    modalb.style.visibility="hidden";
  };

  modalb.onclick = function (event) {
    if (event.target == modalb)
    modalb.style.visibility="hidden";
  };
  // modal end (B)

  // modal C
  var modalc = document.querySelector(".modalc");

  var modalBtnc = document.querySelector(".portfolio__slide-4");
  var modalClosec = document.querySelector(".modal__closec");

  modalBtnc.onclick = function () {
    modalc.style.visibility="visible";
  };

  modalClosec.onclick = function ()  {
    modalc.style.visibility="hidden";
  };

  modalc.onclick = function (event) {
    if (event.target == modalc)
    modalc.style.visibility="hidden";
  };
  // modal end (C)

});