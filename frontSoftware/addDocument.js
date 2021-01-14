function validate(form){
    let inputs = document.querySelcetorAll ("input1");
    let test = document.getElementsByTagName("input1");
    let inputs = document.querySelcetorAll ("inputi");
    let test = document.getElementsByTagName("inputi");
    let inputs = document.querySelcetorAll ("inputi5");
    let test = document.getElementsByTagName("inputi5");

    addDocument= {
        name: $("#name").val(),
        file: $('#file').val(),
        cDate: $('#cdate').val(),
    }
 
    var inputi1 =document.getElementById("name").nodeValue;
    var inputi3 =document.getElementById("file").nodeValue;
    var inputi3 =document.getElementById("cdate").nodeValue;

    if(inputi1.trim()=="" ||inputi5.trim()==""){
        alert('please fill data')
        return;
    }

}

function goToDashboard() {
    window.location.href = "DocumentADD.html";
}
 var addDocument={
name:"",
docPath:"",
creationD:"",



}


$("#create").click(function(e) {
    validate(3)
    e.preventDefault();
    console.log(document);

    $.ajax({
        url: "http://localhost:8080/api/professor/document",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(document),
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