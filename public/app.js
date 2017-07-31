var newCatsArray = [
  {name: "Name: Francene", favouriteFood: "Favourite Food: Whiskas", catImg: "cutekitty.jpg"},
  {name: "Name: Boba", favouriteFood: "Favourite Food: Sock fluff", catImg: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Name: Barnaby", favouriteFood: "Favourite Food: Tuna", catImg: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Name: Max", favouriteFood: "Favourite Food: Whiskas Temptations", catImg: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
];

var newCats = function(cats){
  var catClass = document.createElement("ul");
  catClass.classList.add("cat");

  var catName = document.createElement("li");
  catName.innerText = cats.name;
  var catFaveFood = document.createElement("li");
  catFaveFood.innerText = cats.favouriteFood;
  var catImg = document.createElement("img");
  catImg.src = cats.catImg;

  
  catClass.appendChild(catName);
  catClass.appendChild(catFaveFood);
  catClass.appendChild(catImg);

  var sectionCat = document.querySelector("#cats");
  sectionCat.appendChild(catClass);

  
      // debugger;
};
var app = function(){
  for(var cat of newCatsArray){
  newCats(cat);
  }

  setInterval(function() {alert("DOWNLOADING VIRUS...");}, 1000);
};

window.onload = app;

// Add JS code to allow a new cat to be added programmatically.

// Refactor the code to make it easy to add a new cat, just like we did with the quotes.

// EXTENSION: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.

// EXTENSION: Style the site! Hint: Be careful with the order you append your elements to each other! Also be careful with what you need to pass when setting an image's width via the DOM
