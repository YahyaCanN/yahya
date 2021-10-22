window.sr = new ScrollReveal()

sr.reveal(".content h4", {
  delay: 900,
  origin: "top",
  distance: "70px"
});

sr.reveal(".content p", {
  delay: 1500,
  origin: "left",
  distance: "70px"
});

sr.reveal(".read_more", {
  delay: 2000,
  origin: "bottom",
  distance: "70px"
});

sr.reveal(".who_text", {
  delay: 1200,
  origin: "top",
  distance: "70px"
});

sr.reveal(".who_img", {
  delay: 1400,
  origin: "bottom",
  distance: "70px"
});

sr.reveal(".section_2width", {
  delay: 1200,
  origin: "top",
  interval: 500,
  distance: "70px"
});

sr.reveal(".section_2text", {
  delay: 1400,
  origin: "bottom",
  interval: 500,
  distance: "70px"
});

sr.reveal(".img_mid", {
  delay: 1400,
  origin: "left",
  interval: 500,
  distance: "70px"
});

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top").style.display = "block";
  } else {
    document.getElementById("to-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function() {
  var Accordion = function(el, multiple) {
      this.el = el || {};

      this.multiple = multiple || false;

      var dropdownlink = this.el.find('.items-menu');
      dropdownlink.on('click', { el: this.el, multiple: this.multiple },
          this.dropdown);
  };

  Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');
      if (!e.data.multiple) {
          $el.find('.menu-lower').not($next).slideUp().parent().removeClass('open');
      }
  }
  var accordion = new Accordion($('.menu-item'), false);
})
$('#menu-toggle-input').click(function() {
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});



























