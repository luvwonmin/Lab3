var age=+prompt("Nasaa oruulna uu");
// >,<, <=, >=, ==;
if(age>18 && age<30){
	console.log("Nasand hvrsen bna");
}else if(age<=3 && age>=0){
	console.log("Nylh huuhed bna");
}else if(age<18 && age>10){
	console.log("Zaluu huuhed bna");
}else{
	console.log("Nasand hureegui bna");
}
var number=+prompt("Too oruulna uu");
if(number%2==0){
	console.log("Tegsh too bna");
}else{
	console.log("Sondgoi too bna");
}
var number=+prompt("Too oruulna uu");
if(number>0){
	console.log("Eyreg too bna");
}else{
	console.log("Surug too bna");
}
var today = 6;
switch(today){
	case 5:
        console.log("Friday");
		break;
	case 6:
	    console.log("Saturday");
		break;
	default:
	    console.log("Not found");
		break;
	case 1:
	    console.log("Monday");
		break;
    case 2:
	    console.log("Tuesday");
		break;
    case 3:
	    console.log("Wednesday");
		break;
	case 4:
	    console.log("Thursday");
		break;
	case 7:
	console.log("Sunday");
	    break;
}
var lang = "English";
switch(lang){
	case "English":
	    console.log("Hello");
		break;
	case "Mongolian":
	    console.log("Sain baina uu");
		break;
	case "Spanish":
	    console.log("Hola!");
		break;
	case "Korean":
	    console.log("annyeonghaseyo");
		break;
	default:
	    console.log("Not found");
		break;
}
var number = +prompt ("Too oruulna uu");
var operator = prompt ("Operator oruulna uu");
var number2 = +prompt ("Too oruulna uu");
switch(operator){
	case "+":
	    alert(number+number2);
		break;
	case "-":
	    alert(number-number2);
		break;
	case "*":
	    alert(number*number2);
		break;
	case "/":
	    alert(number/number2);
		break;
}