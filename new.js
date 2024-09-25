function vote(){
    var name =document.getElementById("name").value;
    var pass = 100* Math.random();
    var res = document.getElementById("result");
    res.innerHTML = "you have scored"+pass.toFixed(2);

}