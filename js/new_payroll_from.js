window.addEventListener('DOMContentLoaded',(event) => {
const name = document.querySelector('#name');
const textError = document.querySelector('.text-error');
name.addEventListener('input',function() {
    if(name.value.length == 0) {
        textError.textContent = "";
        return;
    } 
    try {
        (new EmployeePayRollData()).name = name.value;
        textError.textContent = "";
    } catch(e) {
        textError.textContent = e;
    }
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function() {
    output.textContent = salary.value;
})

});

const save = () => {
    try {
        let emploeePayrollData = createEmployeePayroll();
    } catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let emploeePayrollData = new EmployeePayRollData();
    try {
        emploeePayrollData.name = getInputValueById('#name');
    } catch(e) {
        setTextValue('.text-error',e);
        throw e;
    }

emploeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
emploeePayrollData.gender = getSelectedValues('[name=gender]').pop();
emploeePayrollData.department = getSelectedValues('[name=department]');
emploeePayrollData.salary = getInputValueById('#salary');
emploeePayrollData.note = getInputValueById('#notes');
let date = getInputValueById('#day') + getInputValueById('#month') +
           " " + getInputValueById('#year');
emploeePayrollData.date = Date.parse(date);
alert(emploeePayrollData.toString());
return emploeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}



function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
}
