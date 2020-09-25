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
  return [name, ...kittens]
}

function prependKitten(name) {
  return [kittens, ...name]
}

function removeLastKitten() {
  return array.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return array.slice(1,kittens.length)
}
