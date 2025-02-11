const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Le faltaba async porque es una función asincrónica porque tiene await
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;    // --------------------> No son necesarios los template literals `${}`
  $l.textContent = data.location;

  } catch (error) {
    handleError(error);
  }
  
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $n.textContent = `Algo salió mal: ${error}`
}

displayUser('stolinski');





  




