
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.getElementById('search-form');
const galleryElement = document.querySelector('.gallery');
const loadMoreButton = document.getElementById('load-more');
const loadingIndicator = document.getElementById('loading-indicator');
let page = 1;

function showLoader() {
  loadingIndicator.style.display = 'block';
}

function hideLoader() {
  loadingIndicator.style.display = 'none';
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = searchForm.querySelector('input').value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search term.' });
    return;
  }

  page = 1;
  galleryElement.innerHTML = ''; 
  showLoader();

  try {
    const data = await fetchImages(query, page);
    hideLoader();
    if (data.hits.length === 0) {
      iziToast.error({ message: 'Sorry, no images found. Please try again!' });
      loadMoreButton.style.display = 'none';
    } else {
      renderGallery(data.hits, galleryElement, true);
      page += 1;
      loadMoreButton.style.display = 'block';
    }
  } catch (error) {
    hideLoader();
    iziToast.error({ message: 'Error fetching images. Please try again!' });
  }
});

loadMoreButton.addEventListener('click', async () => {
  const query = searchForm.querySelector('input').value.trim();
  showLoader();

  try {
    const data = await fetchImages(query, page);
    hideLoader();
    if (data && data.hits.length > 0) {
      renderGallery(data.hits, galleryElement);
      page += 1;
    } else {
      iziToast.info({ message: 'No more images available.' });
      loadMoreButton.style.display = 'none';
    }
  } catch (error) {
    hideLoader();
    iziToast.error({ message: 'Error loading more images. Please try again!' });
  }
});


 