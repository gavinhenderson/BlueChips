const Asset   = require('./Asset')

let StockMarket = class {
  constructor() {
    this.assets = [];
  }

  // Loop through assets and update them one by one
  update() {
    this.assets.forEach(current => {
      current.update();
    })
  }

  // Adds a new assets to the StockMaket
  newAsset(name, startingPrice, volatility) {
    let newAsset = new Asset(name, startingPrice, volatility);
    this.assets.push(newAsset);
  }
}

module.exports = StockMaket;
