import { galleryItems } from "./gallery-items.js";
// Change code below this l
const galleryList = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", galleryItem);

galleryList.addEventListener("click", zoomIn);
function zoomIn(e) {
  e.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  } else {
    const dataSource = event.target.dataset.source;
    const imgAlt = event.target.getAttribute("alt");
    const box = basicLightbox.create(
      `<img src = "${dataSource}" alt ="${imgAlt}"/>`
    );
    box.show();
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        box.close();
      }
    });
  }
}
