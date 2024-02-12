const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

function loaderController() {
  var tl = gsap.timeline();
  tl.to("#loader #yellow ", {
    top: "-100%",
    duration: 1.5,
    ease: "expo.out",
  });
  tl.from(
    "#loader #yellow1 ",
    {
      top: "100%",
      duration: 1,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    display: "none",
  });
}
loaderController();

var elems = document.querySelectorAll(".elem");

function imageTake() {
  elems.forEach(function (el) {
    el.addEventListener("mouseenter", () => {
      var bgImage = el.getAttribute("data-img");

      document.querySelector(
        "#page2"
      ).style.backgroundImage = `url(${bgImage})`;
    });

 
  });
}
imageTake();

const footeH2=document.querySelector("footer h2")

footeH2.addEventListener("click",()=>{
  scroll.scrollTo(0)
})