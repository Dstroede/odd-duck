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
let resultsContainer = document.getElementById('results-container');

function Product(name,img){
  this.name = name;
  this.img = img;
  this.views = 0;
  this.votes = 0;
}

// render new images that cannot be dupplicated
let indexArray= [];

function renderImg(){
  while (indexArray.length<6){
    let randomNum = Math.floor(Math.random() * productArray.length);
    if(!indexArray.includes(randomNum)){
      indexArray.push(randomNum);
    }
  }

  let imgOneIndex =indexArray.shift();
  let imgTwoIndex =indexArray.shift();
  let imgThreeIndex =indexArray.shift();

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




let productName = ['bag', 'banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu','dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can'];
let productViews = [];
let productVotes = [];
let productLabel = [];

let previousProductArray= localStorage.getItem('ProductArray');

if(previousProductArray){
  productArray = JSON.parse(previousProductArray);
  console.log('previous products ', productArray)
}else{
  for (let i = 0; i< productName.length; i++){
    productName[i] = new Product (productName[i], `img/${productName[i]}.jpg`);
    productArray.push(productName[i]);
  }
  console.log('totals', productArray)
}


function handleShowResults(){
  let productArrayString = JSON.stringify(productArray);
  localStorage.setItem('ProductArray', productArrayString);
  

  if( votingRounds === 0){
    for (let i = 0; i< productArray.length; i++){
      productLabel.push(productArray[i].name);
      productViews.push(productArray[i].views);
      productVotes.push(productArray[i].votes);
    }
    new Chart(resultsContainer, chartConfig);
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}
const chartConfig ={
  type: 'bar',
  data:{
    labels:productLabel,
    datasets:[{
      label: '# of Votes',
      data:productVotes,
      backgroundColor:	'black',
      borderWidth: 1,
    },
    {
      label: '# of Views',
      data:productViews,
      backgroundColor: 'purple',
      borderWidth: 1,
    }
    ]
  },
  options: {
    plugins: {
      customcanvasBackgroundColor:{
        color: 'white',
      },
    },
    scales: {
      y: {
        beginAtZero:true
      }
    }
  },
  
};


renderImg();
imgContainer.addEventListener('click',handleImgClick);
resultsBtn.addEventListener('click',handleShowResults);
