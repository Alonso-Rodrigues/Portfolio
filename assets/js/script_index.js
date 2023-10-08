
document.addEventListener("DOMContentLoaded", function () {
    const iconElement = document.querySelector("nav");
    const ulElement = document.querySelector("ul");
  
    iconElement.addEventListener("click", function () {

      ulElement.classList.toggle("open");
    });
  });



const container = document.querySelector('.container');
container.addEventListener('mousemove', rotateImage);

function rotateImage(event) {
  const containerRect = container.getBoundingClientRect();
  const mouseX = event.clientX - containerRect.left - containerRect.width / 2;
  const mouseY = event.clientY - containerRect.top - containerRect.height / 2;

  const angle = Math.atan2(mouseY, mouseX);
  const degrees = angle * (90 / Math.PI);

  container.style.transform = `translate(-50%, -50%) rotate(${degrees}deg)`;
}

container.addEventListener('mouseout', resetRotation);

function resetRotation() {
  container.style.transform = 'translate(-50%, -50%) rotate(0deg)';
}