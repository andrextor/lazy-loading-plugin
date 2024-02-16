const addButton = document.querySelector('#add_photo');
const clearButton = document.querySelector('#clear_photo');
import { registerImage, resetCount } from './lazy'

const add = async () => {
  const response = await fetchData();
  createPhoto(response.message);
}

const clear = async () => {
  const images = document.querySelector('#images');
  resetCount()
  images.innerHTML = '';
}

addButton.addEventListener('click', add)
clearButton.addEventListener('click', clear)


const URL_BASE = 'https://dog.ceo/api/breeds';

const fetchData = async () => {
  const response = await fetch(`${URL_BASE}/image/random`);
  return await response.json();
}

const createPhoto = (url) => {
  const images = document.querySelector('#images');
  const img = document.createElement('img');
  img.src = 'public/images/descarga.jpeg'
  img.alt = 'perrito';
  img.width = '320'
  img.className = 'mx-auto rounded-lg shadow-xl shadow-cyan-500/50 mt-4'
  img.dataset.src = url
  images.insertAdjacentElement('beforeend', img)
  registerImage(img)
}



