let hilight=document.querySelector("#hilight");
function change(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            hilight.innerText=value;
            resolve("sucecss");
        },1000)
       
    });
   
}
async function call(){
    await change("web Desiner");
    await change("Coder");  
    await change("B.Tech Student");
   
}
call();
let outputSkill=document.querySelector(".outputSkill");
outputSkill.style.width="55em";
outputSkill.style.innerText="55em";
//outputSkill.remove();
let outputexperience=document.querySelector(".outputexperience");
let educationdiv=document.querySelector(".education");

let skill=document.querySelector("#skill");
let experence=document.querySelector("#experinece");    
let education=document.querySelector("#education");

// let skill=document.querySelector("#skill");
// let output=document.querySelector(".outputAboutme");
// skill.addEventListener("click",()=>{
//     let li=document.createElement("li");
//     li.style.listStyle="none";
//     li.style.width="60%";
//     li.innerText="HTML";
//     output.appendChild(li);
  
//     let outSpan=document.createElement("span");
//     let inSpan=document.createElement("span");
//     inSpan.style.backgroundColor="green";
//     inSpan.innerText="in";
    
//     //outSpan.innerHTML="out";
//     outSpan.style.border="2px solid red";
//     inSpan.style.width="80%"
//     inSpan.style.marginRight="20%"; 
//     inSpan.style.paddingRight="80%"; 
//     outSpan.style.width="70%";
//     outSpan.appendChild(inSpan);
//     outSpan.style.backgroundColor="black";
//     li.appendChild(outSpan);

// })