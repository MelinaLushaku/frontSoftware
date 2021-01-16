 /* PROVEEEE*/
 $("#submit").click(function(e) {
 $.ajax({
    url: "http://localhost:8080/api/professor/getAllDocuments",
    type: 'get',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    
    success: function(res) {
        
      let a =localStorage.getItem('document');
      
        //goToDashboard();
    },
    error: function(request, status, error) {
        console.log(error);
        console.log(status);
    }
})
});