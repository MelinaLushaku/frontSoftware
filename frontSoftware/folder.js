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

        name: $("#foldername").val(),
        professor: $("#professorid").val()
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
            var y = res.errori;
            if(y == null){
           
        
            localStorage.setItem('folder', JSON.stringify(res))
            alert("Folderi u shtua me sukses")
            goToDashboard2();
            }else {
                alert(res.errori);
                window.location.href = "addfolderPage.html"
                
            }
            
            
            //goToDashboard2();

        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
    /*if(validate()){
    
    alert("Folder has been saved");
    goToDashboard2();
    }else{
    alert ("Please fill the inputs");
    window.location.href = "addFolderPage.html";
    }*/
  
});

function goToDashboard2() {
    window.location.href = "FolderPage.html";
}


function validate3() {

    deleteFolder = {

        modelId: $("#deleteF").val()

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
            var y = res.errori;
            if(y == null){

            localStorage.setItem('folder', JSON.stringify(res))
            alert("Folder has been deleted");
            goToDashboard2();
            }else {
             alert(res.errori);
             goToDashboard2();

            }

        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
    
 
});
function validate4(){
    deleteDocument = {
        modelId: $("#deleteD").val()
    }
}
deleteDocument = {
    modelId: ""
}

$("#deleteDoc").click(function(e) {
    validate4()
    e.preventDefault();
    console.log(deleteDocument);

    $.ajax({
        url: "http://localhost:8080/api/professor/deleteDoc",
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(deleteDocument),
        success: function(res) {
            var y = res.errori;
            if(y == null){

            localStorage.setItem('document', JSON.stringify(res))
            alert("Document has been deleted");
            goToDashboard2();
            }else {
             alert(res.errori);
             goToDashboard2();

            }

        },
        error: function(request, status, error) {
            console.log(error);
            console.log(status);
        }
    })
    
 
});


$("#getFolders").click(function(e) {
    console.log(1);
    $('#getResultDiv2').empty();
    $('#getDocuments2').empty();
    $('#dokSpecifik').empty();
    var username = document.getElementById("userNamii").value;

    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/professor/getFoldByUser/" + username,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //data: JSON.stringify(login),
        success: function(result){

            $('#getResultDiv2').empty();
            $('#getDocuments2').empty();
            $('#dokSpecifik').empty();
    
            var y =result.data;
            if(y != null){
             $.each(y, function(i, item){
    
               $('#getResultDiv2').append('<button type="button" class="folderattt">'+item.name+'</button>'+'</br>');
    
             console.log("Success: ", item.name);
             document.getElementsByClassName("folderattt").val = item.folderID;
    
             var x =document.getElementsByClassName("folderattt").val;
            // document.getElementById("folderattt").setAttribute("id","folderattt"+x);
             console.log(x);
    
    
                    });
                }else {
                    $('#getResultDiv2').append('<p>'+result.errori+'</p>'+'</br>');
                }
    
            } ,
            error : function(e) {
              $("#getResultDiv2").html("<strong>Nuk keni specifikuar username-in tuaj</strong>");
              console.log("ERROR: ", e);
        }

    })
});
$("#sortbyname").click(function(e) {
    $.ajax({
        url: "http://localhost:8080/api/user/nameSort",
        type: 'get',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function(result) {
            $('#getResultDiv2').empty();
            $.each(result, function(i, item) {

                $('#getResultDiv2').append(item.name + '</br>');

                console.log("Success: ", item.name);


            });

        },
        error: function(e) {
            $("#getResultDiv2").html("<strong>You haven't specify your username</strong>");
            console.log("ERROR: ", e);
        }

    })
});

/*
$("#sortbyname").click(function(e) {
    $.ajax({
        url: "http://localhost:8080/api/user/sortDoc/nameSort",
        type: 'get',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function(result) {
            $('#getResultDiv2').empty();
            $.each(result, function(i, item) {

                $('#getResultDiv2').append(item.name + '</br>');

                console.log("Success: ", item.name);


            });

        },
        error: function(e) {
            $("#getResultDiv2").html("<strong>You haven't specify your username</strong>");
            console.log("ERROR: ", e);
        }

    })
});*/

$("#sortbydate").click(function(e) {
    $.ajax({
        url: "http://localhost:8080/api/user/sortDoc/dateSort",
        type: 'get',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function(result) {
            $('#getResultDiv2').empty();
            $.each(result, function(i, item) {

                $('#getResultDiv2').append(item.name + '</br>');

                console.log("Success: ", item.name);


            });

        },
        error: function(e) {
            $("#getResultDiv2").html("<strong>You haven't specify your username</strong>");
            console.log("ERROR: ", e);
        }

    })
});



$("#docnumber").click(function(e) {
    // validate5();
    console.log(1);
    var useri = document.getElementById("userNamee").value;
    $.ajax({
        type : "get",
        url :  "http://localhost:8080/api/professor/numberOfDoc/"+useri,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
     //  data: JSON.stringify(total),
        success: function(result){
              var y = result.errori;
              if(y == null){
           alert("Profesori me username "+useri+" ka gjithsej "+result.data+" dokumente");
              }else{
                  alert(result.errori)
              }



        },
        error: function(e) {
            alert("You havet specify your username!");
            console.log("ERROR: ", e);
        }

    })
});

$(document).on('click', '.folderattt', function() {
    var x = $(this).text();


    console.log("u prek butoni");
   // var x =document.getElementsByClassName("folderattt").text;
    console.log(x);
    $('#getDocuments2').empty();
    $('#dokSpecifik').empty();
    $('#comApp').empty();

     $.ajax({
         type : "get",
         url :  "http://localhost:8080/api/professor/getDocByFolder/"+x,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
        // data: JSON.stringify(dokumentat),
         success: function(result){
          $('#getDocuments2').empty();
          $('#dokSpecifik').empty();
          $('#comApp').empty();


          console.log(result);
          var lista = result.data;
          if(lista !=null){
            $('#getDocuments2').append('<p>Dokuementet jane:</p>'+'</br>');
            $.each(lista, function(i, item){

            $('#getDocuments2').append('<div>'+'<button class = "dokS">'+item.docId+'</button>'+": "+'<p>'+item.name+'</p>'+'</div>'+'</br>');

          console.log("Success: ", item.name);
         // var x =$("#folderattt"). value = item.folderID;
          //console.log(x);


                 });}
                 else{

                    $('#getDocuments2').append('<p>'+result.errori+'</p>');

                 }

         } ,
         error : function(e) {
           $("#getDocuments2").html("<strong>You cant have two documets with the same name!</strong>");
           console.log("ERROR: ", e);
         }

 })
 });

//komenti per dokumentin specifik
$(document).on('click', '.komenti', function() {
    var x = $(this).text();


    console.log("u prek butoni");
   // var x =document.getElementsByClassName("folderattt").text;
    console.log(x);


     $.ajax({
         type : "get",
         url :  "http://localhost:8080/api/professor/commentByDoc/"+x,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
        // data: JSON.stringify(dokumentat),
         success: function(result){
            $('#comApp').empty();

          var lista = result.data;
          if(lista !=null){
            $('#comApp').append('<p>'+'Komentet e vendosura jane:'+'</p>');
            $.each(lista, function(i, item){

            $('#comApp').append('<p>'+item.description+'</p>'+' Koment nga: '+'<p>'+item.createdBy+'</p>'+'</br>');

          console.log("Success: ", item.name);
         // var x =$("#folderattt"). value = item.folderID;
          //console.log(x);


                 });}
                 else{

                    $('#comApp').append('<p>'+result.errori+'</p>');

                 }

         } ,
         error : function(e) {
           $("#getDocuments2").html("<strong>You cant have two documets with the same name!</strong>");
           console.log("ERROR: ", e);
         }

 })
 });

 //merre aprovimin per perkatess
 $(document).on('click', '.aprovimi', function() {
    var x = $(this).text();


    console.log("u prek butoni");
   // var x =document.getElementsByClassName("folderattt").text;
    console.log(x);


     $.ajax({
         type : "get",
         url :  "http://localhost:8080/api/professor/approveByDoc/"+x,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
        // data: JSON.stringify(dokumentat),
         success: function(result){
            $('#comApp').empty();

          var lista = result.data;
          if(lista !=null){
            $('#comApp').append('<p>'+'Komentet e vendosura jane:'+'</p>');
            $.each(lista, function(i, item){
                if(item.approveRefuse == true){
                    $('#comApp').append('<button style="background:green;">'+"Dokumenti eshte aprovuar"+'</button>'+'</br>');
                }else{
                    $('#comApp').append('<button style="background:red;">'+"Dokumenti nuk aprovuar"+'</button>'+'</br>');
                }



          console.log("Success: ", item.name);
         // var x =$("#folderattt"). value = item.folderID;
          //console.log(x);


                 });}
                 else{

                    $('#comApp').append('<p>'+result.errori+'</p>');

                 }

         } ,
         error : function(e) {
           $("#getDocuments2").html("<strong>Erro in request!</strong>");
           console.log("ERROR: ", e);
         }

 })
 });

 //Shfaq dokumentin specifik
 $(document).on('click', '.dokS', function() {
    var x = $(this).text();


    console.log("u prek butoni");
   // var x =document.getElementsByClassName("folderattt").text;
    console.log(x);


     $.ajax({
         type : "get",
         url :  "http://localhost:8080/api/professor/getDoc/"+x,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
        // data: JSON.stringify(dokumentat),
         success: function(result){
            $('#dokSpecifik').empty();
            $('#comApp').empty();

          console.log(result);
           // $.each(result, function(i, item){
            $('#dokSpecifik').append('<p>'+result.docId+'</p>'+'</br>');
            $('#dokSpecifik').append('<p>'+result.name+'</p>'+'</br>');
            $('#dokSpecifik').append('<img id = "fotoDok"/>'+'</br>');
            document.getElementById("fotoDok").src =result.docPath;
            $('#dokSpecifik').append('<p>'+result.type+'</p>'+'</br>'); 
            $('#dokSpecifik').append('<p>'+result.creationD+'</p>'+'</br>');
            $('#dokSpecifik').append('<p>'+result.editD+'</p>'+'</br>');
            $('#dokSpecifik').append('<p>'+result.fileSize+'</p>'+'</br>');
            $('#dokSpecifik').append('<lable>Get comments for document with id:</label>'+'</br>');
            $('#dokSpecifik').append('<button class = "komenti">'+result.docId+'</button>'+'</br>');

            $('#dokSpecifik').append('<lable>Get approvement for document with id:</label>'+'</br>');
            $('#dokSpecifik').append('<button class = "aprovimi">'+result.docId+'</button>'+'</br>');


          console.log("Success: ", item);
         // var x =$("#folderattt"). value = item.folderID;
          //console.log(x);


             //    });

         } ,
         error : function(e) {
           $("#dokSpecifik").html("<strong>You cant have two documets with the same name!</strong>");
           console.log("ERROR: ", e);
         }

 })
 });




$("#foldernumber").click(function(e){
   // validate5();
    console.log(1);
   var useri = document.getElementById("userNamee").value;
     $.ajax({
         type : "get",
         url :  "http://localhost:8080/api/professor/numberOfFolders/"+useri,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
      //  data: JSON.stringify(total),
         success: function(result){
            var y = result.errori
            if(y == null){
                            alert("Profesori me username "+useri+" ka gjithsej "+result.data+" folder");
            }else{
                alert(result.errori);   
            }
         // $('#getResultDiv2').empty();
           //   $.each(result, function(i, item){
           // $('#getResultDiv2').append('<button id="folderattt">'+item.name+'</button>'+'</br>');

          //console.log("Success: ", item.name);



         } ,
         error : function(e) {
          alert("You havet specify your username!");
           console.log("ERROR: ", e);
         }

        })
    });

