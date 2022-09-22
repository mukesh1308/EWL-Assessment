var sub=document.querySelector("input[type='submit'");
var err=document.querySelector(".error");
var user=document.querySelector("#userName");
var pass=document.querySelector("#password");


var arr=[{email:"mukesh@gmail.com",pass:"123"}];
sub.addEventListener("click",()=>{
    console.log(user.value);
    console.log(pass.value);
    console.log()
    arr.forEach((ele)=>{
        if(ele.email==user.value && ele.pass==pass.value){
            console.log("got it");
            // redirection
        }
    });
    err.innerHTML="invalid user"
})