let user=0;
let comp=0;
const user_span=document.getElementById("user_score");
const comp_span=document.getElementById("comp_score");
const score_div=document.querySelector(".score");
const result_div=document.querySelector(".result p");
const r_div=document.getElementById("r");
const p_div=document.getElementById("p");
const c_div=document.getElementById("c");


function getComp(){
		const choices = ['r','p','c'];
		const randomNumber = Math.floor(Math.random()*3);
		return choices[randomNumber];
}

function Win(choice, compChoice){
	user++;
	user_span.innerHTML=user;
	result_div.innerHTML=`${convertLetter(choice)} beats ${convertLetter(compChoice)} You Win!`;
	document.getElementById(choice).classList.add('green');
	setTimeout(()=>document.getElementById(choice).classList.remove('green'),1000);
}

function Draw(){
	result_div.innerHTML="Its a Draw Baby!"
}

function Lose(choice, compChoice){
	comp++;
	comp_span.innerHTML=comp;
	result_div.innerHTML=`${convertLetter(compChoice)} beats ${convertLetter(choice)}, You Lose!`;
	document.getElementById(choice).classList.add('red');
	setTimeout(()=>document.getElementById(choice).classList.remove('red'),1000);
}

function convertLetter(letter){
		if(letter==="r") return "Rock";
		if(letter==="p") return "Paper";
		if(letter==="c") return "Scissor";
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
			Lose(choice, compChoice);
		}
		if((choice=='r'&&compChoice=='c')||(choice=='p'&&compChoice=='r')||(choice=='c'&&compChoice=='p')){
			console.log("Win");
			Win(choice, compChoice);
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