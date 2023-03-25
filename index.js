 const employee = {
  name: "Sam",
  streetAddress: "15 Gob Road"
 };

 function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = {...employee};
  updatedEmployee[key] = value;
  return updatedEmployee;
 };

 updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
 }

 destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

 function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
 };

 deleteFromEmployeeByKey(employee, 'name');
 
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
 };

destructivelyDeleteFromEmployeeByKey(employee, 'name'); 
