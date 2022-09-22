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
        console.log(obj);
    })
}