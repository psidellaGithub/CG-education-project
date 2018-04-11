console.log("This file is linked!");
var teacher ='Sally Jones';
var Department = 'Physics';
var Rating1 = 3.4;
var Rating2 = 5.0;
var Rating3 = 4.2;
console.log(teacher);
console.log(Department);
console.log(Rating1);
console.log(Rating2);
console.log(Rating3);

var avgRating;
avgRating = (Rating1+Rating2+Rating3)/3;
avgRating = Math.round( avgRating * 10) / 10;
console.log(avgRating);

// CG Education - Javascript Part II  - Below
var ratings =[3.4,5.0,4.2];

console.log(ratings);

function getRatingAvg(ratings){
var avgRating;
avgRating = (ratings[0]+ratings[1]+ratings[2]+ratings[3])/4;
return  avgRating;
console.log(avgRating);
}

function addTeacherRating(ratings,newrating){
ratings.push(newrating);
//Return ratings;
console.log(ratings);
}
var rating;
var cond = true;
do{
  rating = window.prompt('We would like for you to review . Please enter a rating between 0.0 - 5.0?');
rating =Number(rating);
  if(rating <=5){
    cond = false;
  }
}while (cond);

addTeacherRating(ratings,rating);
newrating = getRatingAvg(ratings);
window.alert('Thanks for you review! '+ teacher +' average rating is now  .'+newrating);
console.log(newrating);
