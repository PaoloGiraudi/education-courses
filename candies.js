function candies(children, candy) {
  let candiesPerKid = Math.floor(candy / children)
  let result = candiesPerKid * children
  return result
}