function validate() {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");


    addDocument = {
        creationD: $('#cdate').val(),
        path: $('#fileP').val(),
        editedD: $('#edate').val(),
        fileSize: $('#docs').val(),
        name: $("#name").val(),
        type: $('#type2').val(),
        folder: $('#foldID').val()

    }

    var inputi1 = document.getElementById("cdate").value;
    var inputi2 = document.getElementById("fileP").value;
    var inputi3 = document.getElementById("edate").value;
    var inputi4 = document.getElementById("docs").value;
    var inputi5 = document.getElementById("name").value;
    var inputi6 = document.getElementById("type2").value;

    var inputi8 = document.getElementById("foldID").value;
    if (inputi2.trim() == "" && inputi5.trim() == "" && inputi6.trim() == "") {
        // alert('please fill data')
        return;
    }
    return true;
}

function goToDashboard() {
    window.location.href = "FolderPage.html";
}


var addDocument = {
    creationD: null,
    path: "",
    editedD: null,
    fileSize: 0,
    name: "",
    type: "",
    folder: 0


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
            var y = res.errori;
            if (y == null) {
                localStorage.setItem('document', JSON.stringify(res.data))
                alert("Document has been added successfully");
                goToDashboard();
            } else {
                alert(res.errori);

                // window.location.href = "DocumentADD.html"
            }

        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })

});
$("#getSpace").click(function(e) {
    // validate5();
    console.log(1);
    var useri = document.getElementById("userNamee").value;
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/professor/space/" + useri,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //  data: JSON.stringify(total),
        success: function(result) {
            var y = result.errori;
            if (y == null) {
                alert("Professor with username " + useri + " has used " + result.data + "MB from the total 15000MB (15GB)");
            } else {
                alert(result.errori)
            }



        },
        error: function(e) {
            alert("You did not specify your username!");
            console.log("ERROR: ", e);
        }

    })
});