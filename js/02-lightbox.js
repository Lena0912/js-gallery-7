import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const cardsMarkup = createImageGalleryMarkup(galleryItems);
galleryList.innerHTML = cardsMarkup;

galleryList.addEventListener("click", onGalleryItemsClick);

function createImageGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `    
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`
    )
    .join("");
}

function onGalleryItemsClick(event) {
    event.preventDefault();
const lightbox = new SimpleLightbox(".gallery a", {
    captionData: 'alt',
    captionsDelay: 250,
    });
}

console.log(galleryItems);
