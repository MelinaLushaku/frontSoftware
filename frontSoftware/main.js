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
   if(form == 0){
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
else if (form == 1){
    register = {
       // id:$("#profid").val(),
        name:$("#name2").val(),
        degree:$("#degree").val(),
        email:$("#emaili").val(),
        password: $("#password2").val(),
        username: $("#username2").val()
       
      
    }
   // var input1 = document.getElementById("profid").value;
    var input2 = document.getElementById("name2").value;
    var input3 = document.getElementById("emaili").value;
    var input4 = document.getElementById("username2").value;
    var input5 = document.getElementById("password2").value;
    var input6 = document.getElementById("degree").value;   
    if ( input2.trim() == "" && input3.trim() == ""
    && input4.trim() == "" && input5.trim() == "" && input6.trim() == "") {
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
}

/*function validate2(form) {
    let inputs = document.querySelectorAll("input");
    let test = document.getElementsByTagName("input");

    register = {
        id:$("#profid").val(),
        name:$("#name").val(),
        email:$("#emaili").val(),
        username: $("#username2").val(),
        password: $("#password2").val(),
        degree:$("#degree").val()
    }
    var input1 = document.getElementById("profid").value;
    var input2 = document.getElementById("name").value;
    var input3 = document.getElementById("emaili").value;
    var input4 = document.getElementById("username2").value;
    var input5 = document.getElementById("password2").value;
    var input6 = document.getElementById("degree").value;   
    if (input1.trim() == "" && input2.trim() == "" && input3.trim() == ""
    && input4.trim() == "" && input5.trim() == "" && input6.trim() == "") {
        alert('please fill data')
        return;
    }

    // if (form == 0 && login[username] == "" && login[password] == "") {
    //     return false;
    // } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
    //     return false;
    // }
    return true
}*/

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


/*function showFolder(username){
    goToDashboard();
    console.log("veq per prov");
     
    $(document).ready(function() {
    
    $.ajax({
        type : "get",
        url :  "http://localhost:8080/api/professor/getFoldByUser/"+username,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
       //data: JSON.stringify(login),
        success: function(result){
            
            $('#getResultDiv2').empty();
            
           
        $.each(result, function(i, item){
            $("#getResultDiv2").load("FolderPAge.html")
            
           
            $('#getResultDiv2').append(item.name+'</br>');
           
         console.log("Success: ", item.name);
         

                });
               
               // alert(item.name+" "+item.email)
          //alert(item.FirstName+" "+item.LastName)
          
          //console.log("Success: ", item.name);
           // alert(result)
            
           
        } ,
        error : function(e) {
          $("#getResultDiv2").html("<strong>Error</strong>");
          console.log("ERROR: ", e);
        }
      });  
    
    
      
})
   }*/




function goToDashboard() {
   
    
    window.location.replace("FolderPage.html");
}

var register ={
    
    name:"",
    degree:"",
    email:"",
    password: "",
    username: ""
    

}
$("#submitRegister").click(function(e) {
    validate(1)
    e.preventDefault();
    console.log(register);
    

    $.ajax({
        url: "http://localhost:8080/api/user/registre",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(register),
        success: function(res) {
            localStorage.setItem('professor', JSON.stringify(res))
           // goToDashboard();
        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })

    alert("Welcome to AcademicDA");
    goToDashboard();
});


/* KODI PER MI THIR KREJT PROFAT PREJ DATABASES ; KONTROLLERI O I SHKRUM NE JAVA */


$( document ).ready(function() {
    // GET REQUEST
    $("#getAllCustomerId").click(function(event){
        event.preventDefault();
      ajaxGet();
    });
    
    // DO GET
    function ajaxGet(){
      $.ajax({
        type : "GET",
        url :  "http://localhost:8080/api/user/getALLProf",
        success: function(result){
           
            $('#getResultDiv').empty();
          
            var x = result.data;
            if(x != null ){
            $.each(x, function(i, item){
            
                $('#getResultDiv').append('<p>'+item.name+'</p>'+'</div>'+'</br>');
                
              console.log("Success: ", item.name);
       
                     });
                    
                    }else{
                        $('#getResultDiv').append('<p>'+result.errori+'</p>'+'</div>'+'</br>');
                    }
        },
        error : function(e) {
            
          $("#getResultDiv").html("<strong>Error</strong>");
          console.log("ERROR: ", e);
        }
      });  
    }
  })




/*function showUserData() {
    var prof = JSON.parse(localStorage.getItem('professor'));

    var rows = createRows(prof)
    var index = 0;
    while (index < rows.length) {
        $('#tableBody').append(rows[index++]);
    }
}

function createRows(prof) {
    var index = 0;
    var rows = [];
    while (index < prof.length) {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        var td1text = document.createTextNode(prof[index].ProfId);
        td1.appendChild(td1text)

        var td2 = document.createElement('td');
        var td2text = document.createTextNode(prof[index].name);
        td2.appendChild(td2text)
        row.appendChild(td1);
        row.appendChild(td2);
        rows.push(row);
        index++;
    }
    return rows;
}*/


/*var folderss = {
    username:""
}

    // GET REQUEST
    $("#submit").click(function(event){
      validate(0)
      event.preventDefault(); 
      console.log(folderss);   
    
      $.ajax({
        type : "get",
        url :  "http://localhost:8080/api/professor/getFoldByUser",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(folderss),
        success: function(result){
            
            $('#getResultDiv2').empty();
            goToDashboard();
            
           
            
        $.each(result, function(i, item){
            //document.getElementById("getResultDiv").innerHTML= item.name;
          //    var professor = "- professor with Id = " + professor.ProfId + ", firstname = " + professor.Name + ", email = " + professor.email+ ", email = " + professor.password
           // + ", email = " + professor.degree+ ", email = " + professor.Username+ "<br>";
            $('#getResultDiv2').append(item.name+'</br>');
            //document.getElementById('getResultDiv').innerHTML = result;
            
         // $('#getResultDiv .list-group').append("tekst prov");
         console.log("Success: ", item.name);
         console.log(result);
                });
               // alert(item.name+" "+item.email)
          //alert(item.FirstName+" "+item.LastName)
          
          //console.log("Success: ", item.name);
           // alert(result)
            
          
        },
        error : function(e) {
          $("#getResultDiv2").html("<strong>Error</strong>");
          console.log("ERROR: ", e);
        }
      });  
    
});*/