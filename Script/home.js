async function render(obj){
    const cont=document.querySelector(".track-result");
    const div=document.createElement("div");
    const c_div=document.createElement("div");
    const img=document.createElement("img");
    const name=document.createElement("h2");
    const email=document.createElement("h2");
    const location=document.createElement("h2");
    const salary=document.createElement("h2");
    div.appendChild(img);
    div.appendChild(c_div);
    c_div.appendChild(name);
    c_div.appendChild(email);
    c_div.appendChild(location);
    c_div.appendChild(salary);
    div.setAttribute("class","profile");
    img.setAttribute("src",`${obj.image}`);
    name.innerHTML=`Name: ${obj.name}`;
    email.innerHTML=`Email: ${obj.email}`;
    location.innerHTML=`Counter: ${obj.location}`;
    salary.innerHTML=`Salary: ${obj.salary}`;
    cont.appendChild(div);
    console.log(div);
}



async function api_call(){
    const prof=await fetch("https://randomuser.me/api/?results=15");
    const results=await prof.json();
    // console.log(results)
    const profile=results.results;
    profile.forEach((ele)=>{
        let obj={};
        obj["name"]=ele.name.first+" "+ele.name.last;
        obj["email"]=ele.email;
        obj["location"]=ele.location.country;
        obj["image"]=ele.picture.thumbnail;
        obj["salary"]=100000;
        // console.log(obj);
        render(obj);
    })
}