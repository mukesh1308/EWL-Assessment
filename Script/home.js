var add=document.querySelector(".salary-input button");
var salary_cont=document.querySelector(".salary-cont");
var exep=document.querySelector("#exepense");
var amount=document.querySelector("#amount");
var tSalary=document.querySelector(".total-salary");
var rAmount=document.querySelector("#remaining-amount");
var salary= document.querySelector(".salary-list") 



async function render(obj){
    const cont=document.querySelector(".track-result");
    const div=document.createElement("div");
    div.innerHTML=`<img src="${obj.image}" alt="not found">
    <div>
        <h2>${obj.name}</h2>
        <h2>${obj.email}</h2>
        <h2>${obj.location}</h2>
        <h2>&#8377 ${obj.salary}</h2>
    </div>`;
    div.setAttribute("class","profile");
    cont.appendChild(div);
    let text=div.children[1].children[1].textContent;
    // console.log(text);
    // console.log(div);
    if((localStorage.getItem(text)==null)){
        let data={salary:obj.salary,expense:[],rAmount:obj.salary};
        localStorage.setItem(text,JSON.stringify(data));
    }
}

function add_expense(obj,data){
    let div=document.createElement("div");
    div.innerHTML=`<h2>${obj.exp}</h2> 
        <p>:</p> 
        <span>&#8377 ${obj.amount}</span>
        <img src="images/close.png" class="close">`
    div.setAttribute("class","expense");
    salary_cont.insertBefore(div,rAmount);
    let close=div.children[3];
    data.rAmount-=obj.amount;
    rAmount.children[2].innerHTML=`&#8377 `+data.rAmount;
    localStorage.setItem(text,JSON.stringify(data));
    // console.log(close);
    close.addEventListener("click",()=>{
        let parent=close.parentNode;
        // console.log(parent);
        let itx=data.expense.indexOf(obj);
        // console.log(itx);
        data.expense.splice(itx,1);
        // console.log(text);
        // console.log(data);
        // console.log(typeof data.rAmount);
        data.rAmount+=obj.amount;
        console.log(typeof data.rAmount);
        rAmount.children[2].innerHTML=`&#8377 `+data.rAmount;
        localStorage.setItem(text,JSON.stringify(data));
        parent.remove();
    })
}
var data;
var text;
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
            text=ele.children[1].children[1].textContent;
            data=JSON.parse(localStorage.getItem(text));
            // console.log(data);
            let sala=document.querySelector("#salary");
            let amount=document.querySelector("#remaining-amount");
            sala.children[2].innerHTML=`&#8377 `+data.salary;
            amount.children[2].innerHTML=`&#8377 `+data.rAmount;
            // console.log(data.expense);
            data.expense.forEach((ele)=>{
                add_expense(ele,data);
            })
        })
    })
}


add.addEventListener("click",()=>{
    let obj={exp:exep.value,amount:parseInt(amount.value)};
    add_expense(obj,data);
    data.expense.push(obj);
    localStorage.setItem(text,JSON.stringify(data));
});


