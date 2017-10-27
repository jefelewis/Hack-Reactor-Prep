/*
Instructions:
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

Input (Array):
var array = [[["firstName", "Joe"], ["lastName", "Blow"], ["age", 42], ["role", "clerk"]], [["firstName", "Mary"], ["lastName", "Jenkins"], ["age", 36], ["role", "manager"]]];

Output:
[
    {firstName: "Joe", lastName: "Blow", age: 42, role: "clerk"},
    {firstName: "Mary", lastName: "Jenkins", age: 36, role: "manager"}
]

*/

var array = [[["firstName", "Joe"], ["lastName", "Blow"], ["age", 42], ["role", "clerk"]], [["firstName", "Mary"], ["lastName", "Jenkins"], ["age", 36], ["role", "manager"]]];

function transformEmployeeData(arr) {
  var tranformEmployeeList = [];
  for(var i = 0; i < arr.length; i++) {
    var newObject = {};
    for(var j = 0; j < arr[i].length; j++) {
      newObject[arr[i][j][0]] = arr[i][j][1];
    }
    tranformEmployeeList.push(newObject);
  }
  return tranformEmployeeList;
}

transformEmployeeData(array);
