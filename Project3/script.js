function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1text = document.querySelector("h1").textContent;

  var splittedText = h1text.split("");
  var halfWay = Math.floor(splittedText.length / 2);
  // console.log(halfWay);
  var clutter = "";
  splittedText.forEach(function (e, idx) {
    if (idx < halfWay) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});
gsap.from("h1 .b", {
  y: 50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: -0.3,
});
