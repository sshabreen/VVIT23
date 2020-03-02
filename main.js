fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    let card=document.createElement("div");
    card.classList.add("card");
    let heading=document.createElement("h1");
  // let heading1=document.createElement("h1");
  // heading1.textContent=info.Role;
    heading.textContent=info.name;
    bodyElement.append(card);
    bodyElement.appendChild(heading);
 // bodyElement.appendChild(heading1);
    card.append(heading);
    let line=document.createElement("hr");
    card.append(line);
    let rl=document.createElement("h3");
    rl.textContent=info.role;
    card.append(rl);
 //card.append(line);
    let email=document.createElement("a");
    email.href="email:"+info.email;
    email.textContent=info.email;
    card.append(email);

    let mobile=document.createElement("a");
    mobile.href-"tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

    var button=document.createElement("a");
    arguments.textContent="view profile";
    button.classList.add("btn");
    card.append(button);
}
