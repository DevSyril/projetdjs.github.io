// // Tiny Slider

var slider = tns({
    container: ".offersContainer",
    items: 3,
    speed: 500,
    mouseDrag: true,
    autoplay: false,
    // center: true,
    loop: false,
    nav: false,
    gutter: "px",
    controlsContainer: "#custom-control",
    controlsPosition: "bottom",
  });
  
  // ScrollReveal JS
  
  ScrollReveal({ distance: "30px", easing: "ease-in" });
  
  ScrollReveal().reveal(".title", {
    delay: 300,
    origin: "top",
  });
  
  ScrollReveal().reveal(".paragraph", {
    delay: 800,
    origin: "top",
  });
  
  ScrollReveal().reveal("#form", {
    delay: 1200,
    origin: "bottom",
  });

// var slider = tns({
//     container: '.my-slider',
//     items: 3,
//     slideBy: 'page',
//     autoplay: true
//   });

//   console.log(document.getElementById("my-slider").children?.length);