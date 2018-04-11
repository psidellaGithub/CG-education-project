console.log("This file is linked!");
var Teacher = 'Sally Jones';
var Semester ='Fall 2017';
var Course ='Astronomy Physics';
console.log(Teacher);
console.log(Semester);
console.log(Course);
var coursearray = [
['Astronomy', 'Physics1'],
['Astronomy', 'Physics1'],
['Astronomy', 'Physics2'],
['Astronomy', 'Physics2'],
['Astronomy', 'Physics2']
];

function newdept(coursearray,department){
var newArray = [];
  for(i=0;i<5;i++){
    for (j=1;j<2;j++){
      if(coursearray[i][j] ==department ) newArray.push(coursearray[i]);
    }
  }
 return newArray;
}

var department;
var cond = true;

do{
department = window.prompt('What department are looking for a course in');
if ((department == 'Physics1') || (department == 'Physics2')){
  cond = false;
}
}while(cond);

var newArray =newdept(coursearray,department);
window.alert('You Can choose  courses from department ' + department);
console.log(newArray);
