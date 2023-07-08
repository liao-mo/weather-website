const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=887f99e739d3cf04471da33a2f752636&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather api', undefined)
        } else if (body.error) {
            callback('unable to get location', undefined)
        } else {
            const data = body.current
            callback(undefined, data.weather_descriptions[0] + '，現在溫度' + data.temperature + "度，感覺像是" + data.feelslike + "度")
        }
    })
}

module.exports = forecast