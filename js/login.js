$(function(){
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    function register() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    }
    function login() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }

    $(".toggle-btn:eq(1)").click(function (e) { register(); });
    $(".toggle-btn:eq(0)").click(function (e) { login();});

});
