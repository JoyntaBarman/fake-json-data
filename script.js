let arr = [{name: 'joynta'}, {name: 'poresh', roll: 501929}];

function checkExistCourse (courses, course) {

  function isExist (value) {
   return (value.name).toLowerCase() === (course.name).toLowerCase();
  }

  return typeof courses.find(isExist) === 'object' ;
}


let x = checkExistCourse(arr, {name: 'poresh'})

console.log(x);

console.log(typeof undefined);