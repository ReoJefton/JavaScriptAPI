console.log('JavaScript API Demo')

const getAPIData = async () => {
  const response = await fetch(
    'https://api.coinpaprika.com/v1/coins/btc-bitcoin'
  )
  if (!response) response = await fetch('/bitcoin.json')
  const data = await response.json()
  displayData(data)
}

const displayData = (data) => {
  console.log(data)
  const contentHeading = data.name
  document.querySelector('#api-header').innerHTML = contentHeading
  var mainContainer = document.querySelector('#api-data-container')
  const apiObj = data.tags
  console.log(apiObj)

  Object.keys(apiObj).forEach((apiObjKeyString) => {
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    div.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-4')
    div2.classList.add('col-12', 'well', 'content-margin')
    const apiObjKey = apiObj[apiObjKeyString]
    console.log(apiObjKeyString, apiObjKey)
    Object.keys(apiObjKey).forEach((key) => {
      div2.innerHTML += key + ':' + apiObjKey[key] + '<br>'
      div.appendChild(div2)
    })
    div.innerHTML += '<br>'
    mainContainer.appendChild(div)
  })
}

getAPIData()

// // Set the API endpoint and parameters
// var endpoint = 'https://api.openweathermap.org/data/2.5/weather'
// var apiKey = 'YOUR_API_KEY'
// var city = 'Seattle'

// // Build the URL string
// var url = endpoint + '?q=' + city + '&appid=' + apiKey

// // Send the Fetch request
// fetch(url)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

// const getAPIData = async () => {
//   const response = ''
//   try {
//     response = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
//   } catch (error) {
//     console.log('API Error')
//   }
//   if (!response) {
//     var jsonData = require('./bitcoin.json')
//     displayData(jsonData)
//   } else var data = response.json()
//   displayData(data)
// }
