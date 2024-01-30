import $ from 'jquery';
import _debounce from '../node_modules/lodash/'

$('body').append('<p>Holberton Dashboard</p>');

$('body').append('<p>Dashboard data for the students</p>');

$('body').append('<button>Click here to get started</button>');

$('body').append("<p id='count'></p>");

$('body').append('<p>Copyright - Holberton School</p>');

const count = document.getElementById('count')
let countClick = 0;

const updateCounter =  () => {
  count++; 
  count.innerHTML = `${count} clicks on the button`;
}
count.addEventListener('click', updateCounter);


