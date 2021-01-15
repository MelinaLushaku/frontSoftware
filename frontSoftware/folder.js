/*function changeForm(form) {
    let forms = document.querySelectorAll("form>div");
    if (form == 0) {
        forms[0].classList.remove("hidden");
        forms[0].classList.add("form-style");
        forms[1].classList.add("hidden");
        forms[1].classList.remove("form-style");
    } else {
        forms[1].classList.remove("hidden");
        forms[1].classList.add("form-style");
        forms[0].classList.add("hidden");
        forms[0].classList.remove("form-style");
    }
}
*/

function validate(form) {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");

    addfolder = {
        foldername: $("#foldername").val(),
        professorid: $("#professorid").val()
    }

    var input = document.getElementById("foldername").value;
    var input1 = document.getElementById("professorid").value;
    if (input.trim() == "" && input1.trim() == "") {
        alert('please fill data')
        return;
    }

    // if (form == 0 && login[username] == "" && login[password] == "") {
    //     return false;
    // } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
    //     return false;
    // }

}

// var input1 = document.getElementById("profid").value;


// if (form == 0 && login[username] == "" && login[password] == "") {
//     return false;
// } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
//     return false;
// }




/*function validate(form) {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");

    register = {
        id: $("#profid").val(),
        name: $("#name").val(),
        email: $("#emaili").val(),
        username: $("#username2").val(),
        password: $("#password2").val(),
        degree: $("#degree").val()
    }
    var input1 = document.getElementById("profid").value;
    var input2 = document.getElementById("name").value;
    var input3 = document.getElementById("emaili").value;
    var input4 = document.getElementById("username2").value;
    var input5 = document.getElementById("password2").value;
    var input6 = document.getElementById("degree").value;
    if (input1.trim() == "" && input2.trim() == "" && input3.trim() == "" &&
        input4.trim() == "" && input5.trim() == "" && input6.trim() == "") {
        alert('please fill data')
        return;
    }
*/
// if (form == 0 && login[username] == "" && login[password] == "") {
//     return false;
// } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
//     return false;
// }



var addfolder = {
    name: "",
    profid: ""
}

$("#submit").click(function(e) {
    validate(0)
    e.preventDefault();
    console.log(addfolder);

    $.ajax({
        url: "http://localhost:8080/api/professor/addFolder",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(addfolder),
        success: function(res) {
            localStorage.setItem('folder', JSON.stringify(res))
            goToDashboard();
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
});

function goToDashboard() {
    window.location.href = "prov.html";
}



function showUserData() {
    var emp = JSON.parse(localStorage.getItem('folder'));

    var rows = createRows(emp.tasks)
    var index = 0;
    while (index < rows.length) {
        $('#tableBody').append(rows[index++]);
    }
}

/*function createRows(tasks) {
    var index = 0;
    var rows = [];
    while (index < tasks.length) {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        var td1text = document.createTextNode(tasks[index].taskCode);
        td1.appendChild(td1text)

        var td2 = document.createElement('td');
        var td2text = document.createTextNode(tasks[index].taskName);
        td2.appendChild(td2text)
        row.appendChild(td1);
        row.appendChild(td2);
        rows.push(row);
        index++;
    }
    return rows;
}*/