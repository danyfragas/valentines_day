$(window).scroll(function() {
  let topWindow = $(window).scrollTop();
  topWindow = topWindow * 1.5;
  
  const windowHeight = $(window).height();
      
  let position = topWindow / windowHeight;
  position = 1 - position;

  $('.arrow-wrap').css('opacity', position);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });
});


function sim() {
  alert("Eu te amo!!!")
}

function desviar(t) {
  var btn = t;
  btn.style.position = 'absolute';
  btn.style.bottom = gerarPosicao(10, 90);
  btn.style.left = gerarPosicao(10, 90);
  console.log("errou");
}

function gerarPosicao(min, max){
  return (Math.random() * (max - min) + min) + '%';
}

document.querySelector('.naobtn').addEventListener('mouseover', function() {
  desviar(this);
});

document.querySelector('.naobtn').addEventListener('touchstart', function() {
  desviar(this);
});
