const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift()
}

function appendDriver(driver) {
  return [...drivers, driver]
}

function prependDriver(driver) {
  return [driver, ...drivers]
}

function removeLastDriver() {}
