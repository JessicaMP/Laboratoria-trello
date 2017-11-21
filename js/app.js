window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var nameList = document.getElementById('name-list');
var button = document.getElementById('button-id');
var containerForm = document.getElementsByClassName('container-form')[0];
function createList(event) {
  event.preventDefault();
  event.target.classList.toggle('display-none'); //si tiene la clase se la quita si no la tiene la va agregando.
  form.classList.toggle('display-none');
}

function begin() {
  addList.addEventListener('click', createList)
  event.preventDefault();
}

button.addEventListener('click', function(event) {
  event.preventDefault();
  var dad = document.createElement('div');
  var titleList = document.createElement('p');
  var brother = document.createElement('a');
  var reference = document.getElementById('addList');
  titleList.textContent = nameList.value;
  brother.setAttribute('href', '#');
  brother.innerHTML = 'Añadir Lista';
  //titleList.style.display = 'inline-block';
  dad.appendChild(titleList);
  dad.appendChild(brother);
  dad.classList.add('dad-style');
  containerForm.appendChild(dad);
  //form.setAttribute('style', 'visibility:hidden');
    form.classList.toggle('display-none');
    addList.classList.toggle('display-none');
    reference.classList.toggle('display-none');
})
