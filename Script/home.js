async function render(obj){
    const cont=document.querySelector(".track-result");
    const div=document.createElement("div");
    div.innerHTML=`<img src="${obj.image}" alt="not found">
    <div>
        <h2>${obj.name}</h2>
        <h2>${obj.email}</h2>
        <h2>${obj.location}</h2>
        <h2>${obj.salary}</h2>
    </div>`;
    div.setAttribute("class","profile");
    cont.appendChild(div);
    // console.log(div);
}


var salary= document.querySelector(".salary-list") 
async function api_call(){
    const prof=await fetch("https://randomuser.me/api/?results=15");
    let results=await prof.json();
    // console.log(results)
    let profile=results.results;
    if((localStorage.getItem("userprofile")==null)){
        localStorage.setItem("userprofile",JSON.stringify(profile));
    }
    profile=JSON.parse(localStorage.getItem("userprofile"));
    profile.forEach((ele)=>{
        let obj={};
        obj["name"]=ele.name.first+" "+ele.name.last;
        obj["email"]=ele.email;
        obj["location"]=ele.location.country;
        obj["image"]=ele.picture.large;
        obj["salary"]=100000;
        // console.log(obj);
        render(obj);
    })
    var pro=document.querySelectorAll(".profile");
    // console.log(pro);
    pro.forEach((ele)=>{
        ele.addEventListener("click",()=>{
            pro.forEach((i)=>{
                if(ele!=i){
                    i.classList.add("unactive");
                    salary.classList.remove("salary-unactive");
                }
            })
        })
    })
}

var add=document.querySelector(".salary-input button");
var salary_cont=document.querySelector(".salary-cont");
var exep=document.querySelector("#exepense");
var amount=document.querySelector("#amount");
var tSalary=document.querySelector(".total-salary");
var rAmount=document.querySelector("#remaining-amount");
add.addEventListener("click",()=>{
    let div=document.createElement("div");
    div.innerHTML=`<h2>${exep.value}</h2> 
        <p>:</p> 
        <span>${amount.value}</span>
        <img src="images/close.png" class="close">`
    div.setAttribute("class","expense");
    salary_cont.insertBefore(div,rAmount);
    // var close=document.querySelector(".close");
    let close=div.children[3];
    // console.log(close);
    close.addEventListener("click",()=>{
        let parent=close.parentNode;
        // console.log(parent);
        parent.remove();
    })
});


