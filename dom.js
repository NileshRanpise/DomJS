// Examine Document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title)

// document.title = 'JavaScript' ;
// console.log(document.head)
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);
// console.log(document.forms);
// console.log(document.links);


// Get ele by ID ==> 

// console.log(document.getElementById('my-form'));

// let headerTitle = document.getElementById("header");

// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = "<h2> Hello </h2>";

// headerTitle.style.borderBottom = 'solid 3px';


// Get ele by Class ==>

// let items = document.getElementsByClassName('item');

// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'Hello';


let li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

li[1].textContent = 'Hello';
li[1].style.backgroundColor = 'blue';

for(let i=0; i < li.length; i++){
    li[i].style.backgroundColor = 'green';
}


























