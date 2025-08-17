$("#close-modal").click(() => {
  $(".container-modal").fadeOut();
});

$(".navigate").click(() => {
  $(".nav").animate({ width: "toggle" }, 250).css({ display: "flex" });
});

$("#close-menu").click(() => {
  $(".nav").animate({ width: "toggle" }, 250);
});

$(".scrollLink").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    800
  );
});

var introTag = document.querySelector('#intro-tag');
var introText = "Olá, eu me chamo Ricardo de Paula."
var splitIntroText = introText.split("")
var count = 0

var pipe = document.createElement('SPAN')

pipe.innerHTML = "|"
pipe.classList.add('typing')

function stopInterval() {
  if (count >= splitIntroText.length) {
    introTag.innerHTML = "Olá, eu me chamo <span class='name'>Ricardo de Paula.</span><span class='typing'>|</span>"
    clearInterval(showLetters);
  }
}

var showLetters = setInterval(() => {
  count++
  introTag.append(splitIntroText[count - 1])
  introTag.append(pipe)
  stopInterval()
}, 150)


