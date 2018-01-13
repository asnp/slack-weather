const weather = require('yahoo-weather')
const url = require('url')

module.exports = async request => {
	const query = url.parse(request.url, true).query
	
	if (!query.text) {
		return 'No location defined!'
	}
	
	const weatherInfo = await weather(query.text.toLowerCase())
	const temperature = weatherInfo.item.condition.temp
	
	return 'It is ' + temperature + '°C in ' + query.text + 'right now!'
}
