function changeForm(form) {
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

function validate(form) {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");

    login = {
        username: $("#username").val(),
        password: $("#password").val()
    }
    var input = document.getElementById("username").value;
    var input1 = document.getElementById("password").value;   
    if (input.trim() == "" && input1.trim() == "") {
        alert('please fill data')
        return;
    }

    // if (form == 0 && login[username] == "" && login[password] == "") {
    //     return false;
    // } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
    //     return false;
    // }
    return true
}
var login = {
    username: "",
    password: ""
}

$("#submit").click(function(e) {
    validate(0)
    e.preventDefault();
    console.log(login);

    $.ajax({
        url: "http://localhost:8080/api/user/login",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(login),
        success: function(res) {
            localStorage.setItem('professor', JSON.stringify(res))
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
    var emp = JSON.parse(localStorage.getItem('professor'));

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