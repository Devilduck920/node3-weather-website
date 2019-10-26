const request = require('request')

const forecast = (latitude, longitude , callback) => {
  const url = 'https://api.darksky.net/forecast/9f4c425790c22593f23e45e7120458ef/' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude)

  request({url, json: true}, (error, { body }) => {
    console.log(body.daily.data[0])

    if (error) {
      callback('You are not connecting with the api', undefined)
    } else if ( body.error) {S
      callback('location could not be found', undefined)
    } else {
      callback( undefined , body.daily.data[0].summary + `Todays high is ${body.daily.data[0].temperatureHigh} and todays low is ${body.daily.data[0].temperatureLow}. It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability} % chance of rain`
      )
    }
  })
}

module.exports = forecast