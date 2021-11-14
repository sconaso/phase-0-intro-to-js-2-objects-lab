// Write your solution in this file!
const employee = {
    name: "Scott",
    streetAddress: "555 Oak St",
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object, [key]: value};
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}
