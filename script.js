const submissions = [
  { name: "Jane", score: 95, date: "2020 - 01 - 24", passed: true },
  { name: "Joe", score: 77, date: "2018 - 05 - 14", passed: true },
  { name: "Jack", score: 59, date: "2019 - 07 - 05", passed: false },
  { name: "Jill", score: 88, date: "2020 - 04 - 22", passed: true },
];

// construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use
// conditional statements to set the value for the passed property to true if
// the score is greater than or equal to 60 and false otherwise.
function addSubmission(array, newName, newScore, newDate) {
  let didPassed = false;
  if (newScore < 60) {
    didPassed = false;
  } else {
    didPassed = true;
  }
  let newStudent = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: didPassed,
  };
  array.push(newStudent);
}
addSubmission(submissions, "Becky", 90, "January 5");

// Functionality: remove an object from the array at the specified index using the splice method.
function deleteSubmissionByIndex(array, index) {
  array.splice(index);
}

// Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.
function deleteSubmissionByName(array, name) {
  let lookingFor = name;
  const index = array.findIndex((student) => {
    return lookingFor === student.name;
  });
  array.splice(index, 1);
}

// update an object’s score in the array at the specified index. Use conditional
// statements to set the value for the passed property to true if the score is greater than or equal
// to 60 and false otherwise
function editSubmission(array, index, score) {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
}

// Functionality: return the object in the array that has the provided name. Use the find method.
function findSubmissionByName(array, name) {
  let lookingFor = name;
  const index = array.findIndex((student) => {
    return lookingFor === student.name;
  });
  return array[index];
}

// Functionality: return the object in the array that has the lowest
// score. Use the forEach method to loop through the whole array.
function findLowestScore(array) {
  let lowestScore = 100;
  for (const student of array) {
    //look at each grade compared to the lowest i've seen so far
    if (student.score < lowestScore) {
      lowestScore = student.score;
    }
  }
  return lowestScore;
}

// Functionality: return the average quiz score.  Use a for...of loop.
function findAverageScore(array) {
  let average = 0;
  let counter = 0;
  for (student of array) {
    average += student.score;
    counter++;
  }
  return average / counter;
}
// Functionality: return a new array using the filter method.
// The filter method should find objects in the array that have passing scores
function filterPassing(array) {
  return array.passed === true;
}
// console.log(submissions.filter(filterPassing));

// Functionality: return a new array using the filter method. The filter method should find
// objects in the array that have scores greater than or equal to 90.
function filter90AndAbove(array) {
  return array.score >= 90;
}

// Functionality: construct and return an array of integers starting
// with the start parameter and ending at the end parameter. e.g createRange(2, 5) returns [2, 3, 4, 5].
function createRange(start, end) {
  var newArray = [];
  var i = start;
  while (i <= end) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
