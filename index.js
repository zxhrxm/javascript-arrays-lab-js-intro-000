var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  b = [name, ...kittens]
  return b
}

function prependKitten(name) {
  b = [kittens, ...name]
  return b
}

function removeLastKitten() {
  return array.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return array.slice(1,kittens.length)
}