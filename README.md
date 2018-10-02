# BlueChips

📈💰💸 A node package to simulate your own stock market

## Install

You can install the package from NPM by doing:
```bash
$ npm i bluechips
```

## Usage

You can see a usage example in example.js but otherwise here is a guide to using the package

```javascript
let Market = require('bluechips') // Require the package

let market = new Market(); // Create a new market

// Set are market updating, it will update every 10ms
market.start(10);

// This will pause and unpause the updating
market.pause();
market.pause();

// This adds a new asset to the market
market.newAsset({
  'name'          : "Stock Name",
  'price'         : 200, // The starting price
  'volatility'    : 100, // 0 - 1000
  'historyLimit'  : 100, // How much history we store
  'momentumBound' : 0.8  // Max price move each update
});

// Alter the history limit once it is set
market.setHistoryLimit(200);

// Finds an asset from the market given a name
let asset = market.getAssetByName("Stock Name");
// asset => now the asset
// null if not found
```
