const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=848a0f07067fb1519f51fe05972be287&query=' + latitude + ',' + longitude + ',' + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to access the internet services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. Its feels like ' + body.current.feelslike + ' degress out')
        }
    })
}

module.exports = forecast
