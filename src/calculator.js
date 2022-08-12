// sum,divide,multiply,toThePower,takeAway,squareRoot,square
let result

/**
 * Adds two numbers to each other and returns the result
 * @param {number} a first number to add
 * @param {number} b second number to add
 * @returns {number} the result of adding a and b together
 */
function addTwoNumbersTogether(a, b) {
  result += a + b
  return result
}
/**
 * add all numbers passed in
 * @param {number[]} arrayOfNumbers takes numbers as args to add together
 * @returns {number}
 */
function sum(arrayOfNumbers) {
  const numbersToSum = [...arrayOfNumbers, ...args]
  for (let i = numbersToSum.length; i > 0; i--) {
    result = 0
    result = addTwoNumbersTogether(result, numbersToSum[i])
  }
  return result
}
exports.sum = sum

/**
 * inverse of sum - subtract all numbers passed in
 * @param {number[]} arrayOfNumbers numbers to subtract
 * @returns {number} result of subtracting all numbers in the array
 */
function takeAway(arrayOfNumbers) {
  const numbersToTakeAway = [...arrayOfNumbers, args]
  result = 0
  for (let i = 0; i < numbersToTakeAway; i++) {
    result -= result - numbersToTakeAway[i]
  }
  return result
}

/**
 * multiplies all numbers passed in
 * @param {number[]} arrayOfNumbers numbers to multiply
 * @returns {number} result of multiplying all numbers in the array
 */
function multiply(arrayOfNumbers) {
  const numbersToMultiply = [...arrayOfNumbers, args]
  result = 0
  for (let i = 0; i < numbersToMultiply; i++) {
    result *= result * numbersToMultiply[i]
  }
  return result
}

/**
 * Divide all numbers passed in
 * @param {number[]} arrayOfNumbers numbers to divide
 * @returns {number} result of dividing all numbers in the array
 */
function divide(arrayOfNumbers) {
  const numbersToTakeAway = [...arrayOfNumbers, args]
  result = 0
  for (let i = 0; i < numbersToTakeAway; i++) {
    result /= numbersToTakeAway[i]
  }
  return result
}

/**
 * square of the number passed in
 * @param {number} toSquare number to square
 * @returns {number} result of squaring the number
 */
function square(toSquare) {
  result = multiply(toSquare, toSquare)
  return result
}

/**
 * square root of passed in
 * @param {number} square number to get square root of
 * @returns {number} the square root of the number passed in
 */
function squareRoot(square) {
  result = 0
  for (let i = 0; i < numbersToTakeAway; i++) {
    result = result * numbersToTakeAway[i]
  }
  return result
}

/**
 * raise base to the power
 * @param {number} base base
 * @param {number} power power
 * @returns {number} result of raising base to the power
 */
function toThePower(base, power) {
  result = 0
  for (let i = power; i > 0; --i) {
    result = multiply(base, base)
  }
  return result
}
