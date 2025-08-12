const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const image = document.getElementById("cat-img");
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
let stage = 0;
const images = [
  "./images/stage1.avif",
  "./images/stage2.jpg",
  "./images/stage3.jpg",
  "./images/stage4.jpg",
  "./images/stage5.webp",
];
const btnContent = [
  "ไม่ชอบบ",
  "แน่ใจนะะ",
  "ซักนิดเถอะะ",
  "ร้องไห้แล้วว",
  "ฮือออ",
];
yesBtn.addEventListener("click", () => {
  window.open("/success.html", "_self");
});
noBtn.addEventListener("click", () => {
  const x = getRandomFloat(-70, 70);
  const y = getRandomFloat(-70, 70);
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  stage++;
  const content = btnContent[stage];
  if (!content) {
    return;
  }
  noBtn.innerHTML = content;
  changeCatImage();
});

const changeCatImage = () => {
  if (!images[stage]) {
    return;
  }
  image.src = images[stage];
};
