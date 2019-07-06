console.log("Задача №1");
var num = 1;
console.log(num);
num += 12;
console.log(num);
num -= 14;
console.log(num);
num *= 5;
console.log(num);
num /= 7;
console.log(num);
num++;
console.log(num);
num--;
console.log(num);
num += 7;
console.log(num);
num -= 18;
console.log(num);
num *= 10;
console.log(num);
num /= 15;
console.log(num);

console.log("");
console.log("Задача №2");
var $hour = 12,
	$min = 17,
	$sec = 34;
console.log("Время", $hour, ':',$min,':',$sec );

console.log("");
console.log("Задача №3");
var str = "abcde";
console.log(str);
if (str[0] == 'a'){ 
alert('да'); 
}else{ 
alert('нет'); 
}

console.log("");
console.log("Задача №4");
var tale = "В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек";
var tale1 = tale.substr(47,13);
console.log(tale1);

console.log("");
console.log("Задача №5");
var $num = "176";
console.log( +$num[0] + + $num[1] + + $num[2] );

console.log("");
console.log("Задача №6");
var a = 10;
if  (a == 10) {console.log("Верно")}	
else {console.log("Не верно")}

console.log("");
console.log("Задача №7");
var a = 'test';
if  (a == 'test') {console.log("Верно")}	
else {console.log("Не верно")}
var a = 'test';
if  (a == 'тест') {console.log("Верно")}	
else {console.log("Не верно")}
var a = 'test';
if  (a == '3') {console.log("Верно")}	
else {console.log("Не верно")}
console.log("");

console.log("Задача №8");
var a = 10, b = 4;
if (a <= 0 && b >= 3)
{
	console.log(a + b);
}
else {
	console.log(a - b);
}

console.log("");

console.log("Задача №9");
var name = prompt('Введите имя', '');
var login = prompt('Введите login', '');
var pass = prompt('Введите пароль', '');
if (login == 'admin' && pass == 'nimda')
	{console.log('Добро пожаловать,' + name + ' Вы успешно вошли на сайт.')}
else
	{console.log(name + ', вы неверно ввели логин или пароль!')}

console.log("");
console.log("Задача №10");
var season = 0,
	asd = 0;
var month = prompt('Введите номер месяца 1-12', '');
console.log(month + " месяц это - ");
switch (+month) {
case 1 :
case 2 :
case 12 :
	season = 1; seasonName = "зима";
	break;
case 3 :
case 4 :
case 5 :
	season = 2; seasonName = "весна";
	break;
case 6 :
case 7 :
case 8 :
	season = 3; seasonName = "лето";
	break;
case 9 :
case 10 :
case 11 :
	season = 4; seasonName = "осень";
	break;
default : console.log("Вы ввели число не входящее в диапазон 1-12 и не соответствующий месяцу года...")
}
console.log(seasonName); 