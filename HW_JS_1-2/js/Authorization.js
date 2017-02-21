var arr = ["Виталий", "Артем", "Владимир", "Сергей", "Дмитрий"]; 
var name = prompt( 'Введите имя пользователя!', '' ); 
var i=0; 
for ( ; i < arr.length; ++i)
 
 if ( arr[i] == name ) { 
	alert( name +', вы успешно вошли!' ); 
	break; 
} 

if (i == arr.length) {
	alert( 'Пользователь не найден!' );
}
