/*
Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

function log_obj(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`${key} = ${obj[key]}`)
		}
	}
}

const alex = {
	name: 'Alex',
	ages: 25,
}

log_obj(alex)
