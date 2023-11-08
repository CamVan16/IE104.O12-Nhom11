const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % 2; // Số 2 phụ thuộc vào số lượng hình ảnh trong slider
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + 2) % 2; // Số 2 phụ thuộc vào số lượng hình ảnh trong slider
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 50}%)`;
}
