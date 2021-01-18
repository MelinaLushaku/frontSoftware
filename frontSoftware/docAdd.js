function validate() {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");


    addDocument = {
        creationD: $('#cdate').val(),
        docPath: $('#fileP').val(),
        editedD: $('#edate').val(),
        fileSize: $('#docs').val(),
        name: $("#name").val(),
        type: $('#type2').val(),
        profId: $('#profID').val(),
        foldId: $('#foldID').val()

    }

    var inputi1 = document.getElementById("cdate").value;
    var inputi2 = document.getElementById("fileP").value;
    var inputi3 = document.getElementById("edate").value;
    var inputi4 = document.getElementById("docs").value;
    var inputi5 = document.getElementById("name").value;
    var inputi6 = document.getElementById("type2").value;
    var inputi7 = document.getElementById("profID").value;
    var inputi8 = document.getElementById("foldID").value;
    if (inputi2.trim() == "" && inputi5.trim() == "" && inputi6.trim() == "") {
        alert('please fill data')
        return;
    }
    return true;
}

function goToDashboard() {
    window.location.href = "prov.html";
}


var addDocument = {
    creationD: null,
    docPath: "",
    editedD: null,
    fileSize: null,
    name: "",
    type: "",
    profId: null,
    foldId: null


}


$("#submit").click(function(e) {
    validate(0)
    e.preventDefault();
    console.log(addDocument);

    $.ajax({
        url: "http://localhost:8080/api/professor/addDoc",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(addDocument),
        success: function(res) {
            localStorage.setItem('document', JSON.stringify(res))
            goToDashboard();
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
});


function showUserData() {
    var emp = JSON.parse(localStorage.getItem('document'));

    var rows = createRows(emp.tasks)
    var index = 0;
    while (index < rows.length) {
        $('#tableBody').append(rows[index++]);
    }
}