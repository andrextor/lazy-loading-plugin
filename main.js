const addButton = document.querySelector('#add_photo');
const clearButton = document.querySelector('#clear_photo');

const add = async () => {
  const response = await fetchData();
  console.log(response);
  createPhoto(response.message);
}

const clear = async () => {
  const images =  document.querySelector('#images');
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
  img.src = url;
  img.alt = 'perrito';
  img.className = 'mx-auto w-[320px] rounded-lg shadow-xl shadow-cyan-500/50 my-4'

  images.insertAdjacentElement('beforeend', img)
}



