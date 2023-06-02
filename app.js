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
let resultsBtn = document.getElementById('show-results');
let resltsList = document.getElementById('result-container')

function Product(name,img){
  this.name = name;
  this.img = img;
  this.views = 0;
  this.votes = 0;
}

// render new images that cannot be dupplicated
function renderImg(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex ();
  let imgThreeIndex = randomIndex ();

  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex){
    imgOneIndex = randomIndex();
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }
  imgOne.src = productArray[imgOneIndex].img;
  imgOne.title = productArray[imgOneIndex].name;
  imgOne.alt = `this is an image of ${productArray[imgOneIndex].img}`;
  imgTwo.src = productArray[imgTwoIndex].img;
  imgTwo.title = productArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of ${productArray[imgTwoIndex].img}`;
  imgThree.src = productArray[imgThreeIndex].img;
  imgThree.title = productArray[imgThreeIndex].name;
  imgThree.alt = `this is an image of ${productArray[imgThreeIndex].img}`;

  productArray[imgOneIndex].views++;
  productArray[imgTwoIndex].views++;
  productArray[imgThreeIndex].views++;

}

function randomIndex(){
  return Math.floor(Math.random() * productArray.length);
}


// identify image clicked
function handleImgClick(event){
  let imgClicked = event.target.title;
  for(let i=0; i< productArray.length; i++){
    if(imgClicked === productArray[i].name){
      productArray[i].votes++;
    }
  }

  votingRounds--;
  renderImg();
  if(votingRounds === 0){
    imgContainer.removeEventListener('click',handleImgClick);
    
  }
}
console.log(productArray);
console.log(votingRounds);

let productName = ['bag', 'banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu','dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'waterCan'];

for (let i = 0; i< productName.length; i++){
  productName[i] = new Product (productName[i], `img/${productName[i]}.jpg`);
  productArray.push(productName[i]);
}


renderImg();

imgContainer.addEventListener('click',handleImgClick);
resultsBtn.addEventListener('click',handleShoWResults);
