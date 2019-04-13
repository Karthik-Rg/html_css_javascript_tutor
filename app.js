const user=0;
const comp=0;
const user_span=document.getElementById("user_score");
const comp_span=document.getElementById("comp_score");
const score_div=document.querySelector(".score");
const result_div=document.querySelector(".result");
const r_div=document.getElementById("r");
const p_div=document.getElementById("p");
const c_div=document.getElementById("c");

function g(choice){
	console.log("pressed "+choice);
	document.getElementById("user_score").textContent="1";
}


function main(){
r_div.addEventListener('click', function(){
	g("r");
})

p_div.addEventListener('click', function(){
	g("p");
})

c_div.addEventListener('click', function(){
	g("c");
})
}

main();