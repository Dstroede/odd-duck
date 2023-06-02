'use strict';

//create a constructor that gives name of product, image, and number of times the products has been seen 

// create and algorithm the randomly generates  3 products at a time

//add an event listener to the section of the html page where the images are going t be displayed

//generate a new product each time the user clicks on a product

//25 Rounds

let productArray = [];
let votingRounds = 25;


// Dom windows

let imgContainer = document.getElementById('img-container');
let imgOne =document.getElementById('img-one');
let imgTwo =document.getElementById('img-two');
let imgThree =document.getElementById('img-three');


function Product(name,img){
  this.name = name;
  this.img = img;
  this.views = 0;
  this.votes = 0;
}

function renderImg(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex ();
  let imgThreeIndex = randomIndex ();

  imgOne.src = productArray[randomIndex()].img;
  imgTwo.src = productArray[randomIndex()].img;
  imgThree.src = productArray[randomIndex()].img;

  while (imgOne)
}

function randomIndex(){
  return Math.floor(Math.random * productArray.length);
}


let bag = new Product('bag', 'img/bag.jpg');
let banana = new Product('banana', 'img/banana.jpg');
let bathroom = new Product('bathroom', 'img/bathroom.jpg');
let boots = new Product('boots', 'img/boots.jpg');
let breakfast = new Product('breakfast', 'img/breakfast.jpg');
let bubblegum = new Product('bubblegum', 'img/bubblegum.jpg');
let chair = new Product('chair', 'img/chair.jpg');
let cthulhu = new Product('cthulhu', 'img/cthulhu.jpg');
let dogDuck = new Product('dog-duck', 'img/dog-duck.jpg');
let dragon = new Product('dragon', 'img/dragon.jpg');
let pen = new Product('pen', 'img/pen.jpg');
let petSweep = new Product('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new Product('scissors', 'img/scissors.jpg');
let shark = new Product('shark', 'img/shark.jpg');
let sweep = new Product('sweep', 'img/sweep.jpg');
let tauntaun = new Product('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Product('unicorn', 'img/unicorn.jpg');
let waterCan = new Product('water-can', 'img/water-can.jpg');

productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan);


renderImg();
