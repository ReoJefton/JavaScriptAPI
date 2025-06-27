console.log('JavaScript API Demo')

/**
 * Fetches cryptocurrency data from a local JSON file and displays it.
 * Handles errors and shows a loading state.
 */
const getAPIData = async () => {
  const mainContainer = document.querySelector('#api-data-container')
  if (mainContainer) mainContainer.innerHTML = '<div class="loading">Loading...</div>'
  try {
    const response = await fetch('/cryptoData.json')
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    displayData(data)
  } catch (error) {
    if (mainContainer) mainContainer.innerHTML = `<div class="error">Failed to load data: ${error.message}</div>`
    console.error('Fetch error:', error)
  }
}

/**
 * Renders cryptocurrency data as styled boxes in the DOM.
 * @param {Array|Object} data - Array of crypto objects or a single object.
 */
const displayData = (data) => {
  const mainContainer = document.querySelector('#api-data-container')
  if (!mainContainer) return
  mainContainer.innerHTML = ''
  mainContainer.className = 'crypto-flex-container'
  const coins = Array.isArray(data) ? data : [data]
  coins.forEach((coin) => {
    const box = document.createElement('div')
    box.className = 'crypto-box'
    box.innerHTML = `
      <h3>${coin.name} <span aria-label="Symbol">(${coin.symbol})</span></h3>
      <strong>Rank:</strong> ${coin.rank}<br>
      <strong>Price (USD):</strong> $${coin.price_usd}<br>
      <strong>Market Cap:</strong> $${Number(coin.market_cap_usd).toLocaleString()}<br>
      <strong>24h Volume:</strong> $${Number(coin.volume_24h_usd).toLocaleString()}<br>
      <strong>Circulating Supply:</strong> ${Number(coin.circulating_supply).toLocaleString()}<br>
      <strong>Tags:</strong> ${Array.isArray(coin.tags) ? coin.tags.join(', ') : ''}
    `
    mainContainer.appendChild(box)
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
