let Asset = class {

}

module.exports = class {
  constructor(name, startingPrice, volatility) {
    this.name = name;
    this.shortName = name.slice(0,3).toUpperCase();
    this.volatility = volatility;
  }

  update() {

  }
}
