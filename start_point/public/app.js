
var addCat = function(name, favouriteFood, image, width){
  var catUL = createCatUL();
  var liName = createLiName(name);
  var liFavouriteFood = createLiFavouriteFood(favouriteFood);
  var catImage = createCatImage(width, image)
  var cats = document.querySelector('#cats')
  appendCat(cats, catUL, liName, liFavouriteFood, catImage);
}

var createCatUL = function(){
  var catUL = document.createElement('ul');
  catUL.classList.add('cat');
  return catUL;
}

var createLiName = function(name){
  var liName = document.createElement('li');
  liName.innerText = name;
  return liName;
}

var createLiFavouriteFood = function(favouriteFood){
  var liFavouriteFood = document.createElement('li');
  liFavouriteFood.innerText = favouriteFood;
  return liFavouriteFood;
}

var createCatImage = function(width, image){
  var catImage = document.createElement('img');
  catImage.width = width;
  catImage.src = image;
  return catImage;
}

var appendCat = function(cats, catUL, liName, liFavouriteFood, catImage){
  catUL.appendChild(liName);
  catUL.appendChild(liFavouriteFood);
  catUL.appendChild(catImage);
  cats.appendChild(catUL);
}


var app = function(){
  addCat("Boba", "Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg", "500");
  addCat("Barnaby", "Tuna", "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg", "500");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg", "500")
  addCat("Cat in Tube", "Cardboard", "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg", "500");
}



window.onload = app;

