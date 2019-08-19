
$(document).ready(function () {

    $('#loginBtn').click(function () {
        
        tryLoginUser();
    });



    function tryLoginUser() {
       $.post('api/Users/Login', { username: 'test' }, function (result, status) {
            //callback
       });

    }
}); 
