// Funcionalidades do carrossel na section de Lançamentos (Peguei na internet)

const carrosel = document.querySelector(".carrossel"),
firstImg = carrosel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 20;
let scrollWidth = carrosel.scrollWidth - carrosel.clientWidth;

const showHideIcons = () => {
    arrowIcons[0].style.display = carrosel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carrosel.scrollLeft == 0 ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carrosel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrosel.scrollLeft;
}

const dragging = (e) => {
    // Arrastando imagens para a esquerda com o ponteiro do mouse
    if(!isDragStart) return;
    e.preventDefault();
    carrosel.classList.add("dragging")
    let positionDiff = e.pageX - prevPageX;
    carrosel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons()
}

const dragStop = () => {
    isDragStart = false;
    carrosel.classList.remove("dragging")
}

carrosel.addEventListener("mousedown", dragStart)
carrosel.addEventListener("mousemove", dragging)
carrosel.addEventListener("mouseup", dragStop)
carrosel.addEventListener("mouseleave", dragStop)