const rates={
 radio_1:[2800,14000,32000],
 radio_2:[1800,12600,30000],
 radio_3:[2800,16800,42000],
 radio_4:[2800,18000,45000],
 radio_5:[1800,12600,30000],
 radio_6:[1600,9800,25000]};
const D=[], cost=document.getElementById("cost");

document.querySelector("fieldsets").querySelectorAll("input").forEach(e=>{D.push(e);e.addEventListener("input",calc)});
document.querySelectorAll("input[name=Vehicle]").forEach(e=>{e.addEventListener("click",calc)});

function calc(ev){
 const prod=document.querySelector("input[name=Vehicle]:checked"),
   r=prod?rates[prod.id]:[0,0,0];
 cost.textContent='₱ '+ r.reduce((a,c,i)=>a+c*(D[i].value??0),0).toFixed(2);
}
