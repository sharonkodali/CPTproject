var selectedRow = null

function onFormSubmit() {
    var formData = readFormData;
    if(selectedRow = null)
        insertNewRecord(formData);
        else
        updateRecord(formData)
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["password"] = document.getElementById("password").value;
    return formData
}

function insertNewRecord(data) {
    var table = document.getElementById*("volunteerList").getElementByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneNumber;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.password;
    cell4 = newRow.insertCell(4)
    cell4.innerHTML = `<a onClick= "onEdit(this)">Edit</a>
                       <a onClick= "onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("password").value = "";
    selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[2].innerHTML;
    document.getElementById("password").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phoneNumber;
    selectedRow.cells[3].innerHTML = formData.password;
}
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("volunteerList").deleteRow(row.rowIndex);
        resetForm();
    }
}