const add = (a, b) => {
  if (typeof a !== 'number') {
    // console.error('a must be a number. Got: ' + a)
    // return
    throw new Error('a must be a number. Got: ' + a)
  }
  if (typeof b !== 'number') {
    // console.error('b must be a number. Got: ' + b)
    // return
    throw new Error('b must be a number. Got: ' + b)
  }
  return a + b
}

// console.log(add(1, 1)) // 2
// console.log(add("1", "1")) //"11"

const addAndMultiply = (a, b) => {
  return add(a, b) * b
}

try {
  // throw new Error('error we can handle')
  throw new Error('error that break everything')
} catch (snafu) {
  console.error('got error: ', snafu.message)
  if (snafu.message !== 'error we can handle') {
    throw snafu
  }
}

console.log('done')

// console.log("(1 + 7) * 7")
// try {
  //   console.log("with strings", addAndMultiply("1", "7"))
  // } catch(error) {
    //   console.log('there was an error, but it\'s cool. We got this', error.message)
    //   console.log(error.stack)
    //   console.log("with strings", addAndMultiply(parseFloat("1"), parseFloat("7")))
    // }
    // console.log("with numbers", addAndMultiply(1, 7))
