let user=0;
let comp=0;
const user_span=document.getElementById("user_score");
const comp_span=document.getElementById("comp_score");
const score_div=document.querySelector(".score");
const result_div=document.querySelector(".result");
const r_div=document.getElementById("r");
const p_div=document.getElementById("p");
const c_div=document.getElementById("c");


function getComp(){
		const choices = ['r','p','c'];
		const randomNumber = Math.floor(Math.random()*3);
		return choices[randomNumber];
}

function Win(){
	user++;
	user_span.innerHTML=user;
}

function Draw(){
}

function Lose(){
	comp++;
	comp_span.innerHTML=comp;
}


function game(choice){
		const compChoice = getComp();
		console.log("user "+choice);
		console.log("comp "+compChoice);
		if(choice==compChoice){
			console.log("draw");
			Draw();
		}
		if((choice=='r'&&compChoice=='p')||(choice=='p'&&compChoice=='c')||(choice=='c'&&compChoice=='r')){
			console.log("Lose");
			Lose();
		}
		if((choice=='r'&&compChoice=='c')||(choice=='p'&&compChoice=='r')||(choice=='c'&&compChoice=='p')){
			console.log("Win");
			Win();
		}
		
		
}


function main(){
r_div.addEventListener('click', function(){
	game("r");
})

p_div.addEventListener('click', function(){
	game("p");
})

c_div.addEventListener('click', function(){
	game("c");
})
}

main();