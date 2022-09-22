var sub=document.querySelector(".cont form button");
var err=document.querySelector(".error");
var user=document.querySelector("#userName");
var pass=document.querySelector("#password");


var arr=[{email:"mukesh@gmail.com",pass:"123"},{email:"yashini@gmail.com",pass:"6383"}];
sub.addEventListener("click",()=>{
    // console.log(user.value);
    // console.log(pass.value);
    let flag=1;
    arr.forEach((ele)=>{
        if(ele.email==user.value && ele.pass==pass.value){
            console.log("got it");
            // redirection
            flag=0;
            window.location.href="file:///M:/GyanMatrix/EWL-Assessment/home.html";
        }
    });
    if(flag){
        err.innerHTML="invalid user"
    }
})