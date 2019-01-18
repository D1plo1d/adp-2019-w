// const request = require('request')
//
// const run = () => {
//   // // Callback Version
//   request('https://jsonplaceholder.typicode.com/posts', (error, response, body) => {
//     if (error) {
//       return console.error('error')
//     }
//     request('https://jsonplaceholder.typicode.com/albumns', (error2, response2, body2) => {
//       console.log('DONE CALLBACKS')
//       // console.log(body, body2)
//     })
//   })
//
//   // Simple Promise Version
//   const rp = require('request-promise')
//
//   const promise1 = rp('https://jsonplaceholder.typicode.com/posts')
//   const promise2 = rp('https://jsonplaceholder.typicode.com/albums')
//
//   promise1.catch((error) => console.error('error'))
//
//   promise1.then((body1) => {
//     promise2.then((body2) => {
//       console.log('DONE PROMISES')
//       // console.log(body1, body2)
//     })
//   })

// Chained Promise Timeouts
const promisifiedTimeout = (time) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve('DONE'), time)
  })
}

promisifiedTimeout(1000)
  .then(() =>  promisifiedTimeout(1000))
  .then(() =>  promisifiedTimeout(1000))
  .then((result) => console.log(result))

promisifiedTimeout(1000).then(() => {
  promisifiedTimeout(2000).then(() => {
    promisifiedTimeout(3000).then((result) => {
      console.log(result)
    })
  })
})


// Chained Promise Version
const rp = require('request-promise')

const promise1 = rp('https://jsonplaceholder.typicode.com/posts')
const promise2 = rp('https://jsonplaceholder.typicode.com/albums')

Promise.all([
  promise1,
  promise2,
])
  .then((body1And2) =>  {
    const posts = JSON.parse(body1And2[0])
    const albumns = JSON.parse(body1And2[1])
    console.log('POSTS')
    for (i = 0; i< 10; i++) {
      console.log(i, posts[i].title)
    }
    console.log('ALBUMNS')
    for (i = 0; i< 20; i++) {
      console.log(i, albumns[i].title)
    }
  })
  .catch((error) => console.error('error'))

//
// }
// run()
