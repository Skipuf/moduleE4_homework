/*
Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:
1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4. Создать экземпляры каждого прибора.
5. Вывести в консоль и посмотреть результаты работы.

*/

// Главный класс
function Electric_device(name) {
	this.device_name = name
	this.plugged = false
	this.working = false
}
Electric_device.prototype.plug_in = function () {
	this.plugged = true
}
Electric_device.prototype.plug_out = function () {
	this.plugged = false
	this.working = false
}
Electric_device.prototype.on = function () {
	if (this.plugged) {
		this.working = true
	} else {
		console.error(
			`Нельзя включить "${this.device_name}", не включено в розетку.`
		)
	}
}
Electric_device.prototype.off = function () {
	this.working = false
}
Electric_device.prototype.getPowerUsage = function () {
	return this.working ? this.power : 0
}
// Класс микроволновки
function Microwave(power) {
	this.power = power
	this.mode = 'Греть'
}
Microwave.prototype = new Electric_device('Микроволновая печь')
Microwave.prototype.set_mode = function (mode) {
	this.mode = mode
}
Microwave.prototype.get_info = function () {
	return `имя: ${this.device_name} \nмощность: ${this.power} \nподключен в розетку: ${this.plugged} \nработает: ${this.working} \nрежим: ${this.mode}`
}
// Класс телевизора
function TV(power) {
	this.power = power
	this.volume = 50
	this.channel = 1
}
TV.prototype = new Electric_device('Телевизор')
TV.prototype.set_volume = function (volume) {
	if (this.working) {
		this.volume = volume
	} else {
		console.error(`Нельзя изменить громкость, телевизор не включен.`)
	}
}
TV.prototype.set_channel = function (channel) {
	if (this.working) {
		this.channel = channel
	} else {
		console.error(`Нельзя изменить канал, телевизор не включен.`)
	}
}
TV.prototype.get_info = function () {
	return `имя: ${this.device_name} \nмощность: ${this.power} \nподключен в розетку: ${this.plugged} \nработает: ${this.working} \nканал: ${this.channel} \nгромкость: ${this.volume}`
}
//
function calculate_power(list_device) {
	let total_power = 0
	list_device.forEach(function (item, index, array) {
		total_power += item.getPowerUsage()
	})
	return total_power
}
//
const microwave = new Microwave(700)
console.log(microwave.get_info())
microwave.on()
microwave.plug_in()
microwave.on()
console.log(microwave.get_info())
//
const tv = new TV(100)
console.log(tv.get_info())
tv.plug_in()
tv.on()
tv.set_channel(12)
tv.set_volume(20)
console.log(tv.get_info())
//
console.log(`Общая мощность приборов: ${calculate_power([microwave, tv])}`)
