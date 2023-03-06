const employee = {
  name: " ",
  streetAddress: " ",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = {...obj };

  newObj[key] = value;
  
  return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sammy");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sammy");

function deleteFromEmployeeByKey(obj, key) {
  const newObj = {...obj };

  delete newObj[key];
  return newObj;
}

deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}

destructivelyDeleteFromEmployeeByKey(employee, "name");
