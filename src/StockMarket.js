const Asset   = require('./Asset')

let StockMarket = class {
  constructor() {
    this.assets       = [];
    this.historyLimit = 100;
    this.paused       = false;
  }

  // Updates the market on a timer given by speed
  start(speed){
    setInterval(() => {
      if(!this.paused){
        this.update();
      }
    }, speed);
  }

  getAssetByName(name) {
    this.assets.forEach(current => {
      if(current.name == name){
        return current;
      }
    })
    return null;
  }

  // This function is used to pause and unpause the market
  pause() {
    this.paused = !this.paused;
  }

  // Loop through assets and update them one by one
  update() {
    this.assets.forEach(current => {
      current.update();
    })
  }

  // Adds a new assets to the StockMaket
  newAsset(ops) {
    ops['historyLimit'] = this.historyLimit;
    let newAsset = new Asset(ops);
    this.assets.push(newAsset);
  }

  setHistoryLimit(newLimit) {
    // Make sure new assets are made with the new limit
    this.historyLimit = newLimit;
    this.assets.forEach(current => {
      // Set history for each created asset
      current.setHistoryLimit(newLimit);
    })
  }
}

module.exports = StockMarket;
