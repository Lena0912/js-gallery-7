import { galleryItems, galleryItems as items } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const cardsMarkup = createImageGalleryMarkup(galleryItems);
galleryList.innerHTML = cardsMarkup;

function createImageGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => 
            `    
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>    
`
  ).join('');
}

let activeInstance = null;

galleryList.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(event) {
    event.preventDefault();
    const clickedImage = event.target.closest(".gallery__image");
    if (!clickedImage) {
        return;
    }
    const largeImageURL = clickedImage.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="Image" />`)

    if (activeInstance) {
        activeInstance.close();
    }
    activeInstance = instance;
    instance.show();    
}
document.addEventListener('keydown', onEscapeKeyPress);

function onEscapeKeyPress(event) {
    if (event.key === 'Escape' && activeInstance) {
        activeInstance.close();
        activeInstance = null;
    }
}

console.log(galleryItems);

 




