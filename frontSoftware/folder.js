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

function validate() {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");
     
    addfolder = {
       
        name:$("#foldername").val(),
        professor:$("#professorid").val()
    }

    var input = document.getElementById("foldername").value;
    var input1 = document.getElementById("professorid").value;
    if (input.trim() == "" && input1.trim() == "") {
       // alert('please fill data')
        return;
    }

    // if (form == 0 && login[username] == "" && login[password] == "") {
    //     return false;
    // } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
    //     return false;
    // }
    return true;
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
    professor: 0
}

$("#submit1").click(function(e) {
    validate()
    e.preventDefault();
    console.log(addfolder);
   // goToDashboard2();
    $.ajax({
        url: "http://localhost:8080/api/professor/addFolder3",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(addfolder),
        success: function(res) {
           // goToDashboard();
           
            localStorage.setItem('folder', JSON.stringify(res))
            
            
            //goToDashboard2();
           
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
    if(validate()){
    
    alert("Folder has been saved");
    goToDashboard2();
    }else{
    alert ("Please fill the inputs");
    window.location.href = "addFolderPage.html";
    }
  
});

function goToDashboard2() {
    window.location.href = "FolderPage.html";
}


function validate3(){

    deleteFolder = {
       
        modelId:$("#deleteF").val()
        
    }

    var input = document.getElementById("deleteF").value;

    if (input.trim() == "") {
       // alert('please fill folder Id')
        return;
    }

    // if (form == 0 && login[username] == "" && login[password] == "") {
    //     return false;
    // } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
    //     return false;
    // }
    return true;
}
deleteFolder = {
    modelId: null
}
$("#deleteFol").click(function(e) {
    validate3()
    e.preventDefault();
    console.log(deleteFolder);

    $.ajax({
        url: "http://localhost:8080/api/professor/deleteFold",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(deleteFolder),
        success: function(res) {
            localStorage.setItem('folder', JSON.stringify(res))
            
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
    if(validate3()){
        alert("Folder has been deleted");
    goToDashboard2();
    }else{
        alert('please fill folder Id');
        alert("No folder has been deleted");
        goToDashboard2();
    }
});


