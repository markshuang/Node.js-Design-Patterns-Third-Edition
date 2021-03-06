const scientist = {
  name: 'nikola',
  surname: 'tesla',
  fullName () {
    return `${this.name} ${this.surname}`
  }
}

const uppercaseScientist = new Proxy(scientist, {
  get: (target, property) => {
    if (target[property].toUpperCase) {
      return target[property].toUpperCase()
    }

    return target[property]
  }
})

console.log(scientist.fullName()) // nikola tesla
console.log(uppercaseScientist.fullName()) // NIKOLA TESLA
