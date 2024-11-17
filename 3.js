/*
Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.

*/

function create_obj() {
	return Object.create(null)
}

const obj = create_obj()
console.log(obj)
