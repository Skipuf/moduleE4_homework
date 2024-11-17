/*
Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.
*/
// Главный класс
class Electric_device {
	constructor(name, power) {
		this.device_name = name
		this.power = power
		this.plugged = false
		this.working = false
	}
	plug_in() {
		this.plugged = true
	}
	plug_out() {
		this.plugged = false
		this.working = false
	}
	on() {
		if (this.plugged) {
			this.working = true
		} else {
			console.error(
				`Нельзя включить "${this.device_name}", не включено в розетку.`
			)
		}
	}
	off() {
		this.working = false
	}
	getPowerUsage() {
		return this.working ? this.power : 0
	}
	get_info() {
		return `имя: ${this.device_name} \nмощность: ${this.power} \nподключен в розетку: ${this.plugged} \nработает: ${this.working}`
	}
	static calculate_power(list_device) {
		let total_power = 0
		list_device.forEach(function (item, index, array) {
			total_power += item.getPowerUsage()
		})
		return total_power
	}
}
// Класс микроволновки
class Microwave extends Electric_device {
	constructor(power) {
		super('Микроволновая печь', power)
		this.mode = 'Греть'
	}
	set_mode(mode) {
		this.mode = mode
	}
	get_info() {
		return `${super.get_info()} \nрежим: ${this.mode}`
	}
}
// Класс телевизора
class TV extends Electric_device {
	constructor(power) {
		super('Телевизор', power)
		this.volume = 50
		this.channel = 1
	}
	set_volume(volume) {
		if (this.working) {
			this.volume = volume
		} else {
			console.error(`Нельзя изменить громкость, телевизор не включен.`)
		}
	}
	set_channel(channel) {
		if (this.working) {
			this.channel = channel
		} else {
			console.error(`Нельзя изменить канал, телевизор не включен.`)
		}
	}
	get_info() {
		return `${super.get_info()} \nканал: ${this.channel} \nгромкость: ${
			this.volume
		}`
	}
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
console.log(
	`Общая мощность приборов: ${Electric_device.calculate_power([microwave, tv])}`
)
microwave.off()
console.log(
	`Общая мощность приборов: ${Electric_device.calculate_power([microwave, tv])}`
)
