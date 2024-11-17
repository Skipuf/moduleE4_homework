/*
Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

function check_key(key, obj) {
	return key in obj
}

const Alex = {
	name: 'Alex',
}

console.log(check_key('name', Alex))
console.log(check_key('ages', Alex))
