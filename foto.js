const URL_BASE = 'https://dog.ceo/api/breeds';

const fetchData = async () => {
  const response = await fetch(`${URL_BASE}/image/random`);

  const photos = await response.json();
  console.log(photos.message);
}

fetchData();