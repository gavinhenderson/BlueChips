let Asset = class {
  constructor(ops){
    this.name           = ops.name          || "Default Name";
    this.price          = ops.price         || 100;
    this.volatility     = ops.volatility    || 0;
    this.historyLimit   = ops.historyLimit  || 100;
    this.momentumBound  = ops.momentumBound || 0.8
    this.history        = [];
    this.momentum       = 0;
  }

  update(){
    // Get random element
    let rand = ( Math.floor(Math.random()*21) - 10 ) / 10;

    // Alter the momentum of the asset
    this.momentum += rand;

    //Bound the momentum
    if( this.momentum > this.momentumBound ){
      this.momentum = this.momentumBound;
    } else if( this.momentum < this.momentumBound * -1) {
      this.momentum = this.momentumBound * -1;
    }

    // Set the price according to the momentum
    this.price += this.momentum
    if(this.price<0){ this.price = 0;}

    // Generate randomness to jump
    let jumpChance = Math.floor(Math.random()*1000) + 1;

    // Figure out whether or the stock will jump
    if( jumpChance < this.volatility ) {
      // Randomness of which way to jump
      var upOrDown = Math.floor( Math.random() * 2 );
      if(upOrDown==0){
        this.price += ( this.price / 10 );
      }else if(upOrDown=1){
        this.price -= ( this.price / 10 );
      }
    }

    this.addHistory(this.price);
  }

  setHistoryLimit(limit) {
    this.historyLimit = limit;
    while( this.history.length > limit ) {
      this.history.shift();
    }
  }

  addHistory(newValue){
    this.history.push( newValue );
    if( this.history.length > this.historyLimit ) {
      this.history.shift();
    }
  }
}

module.exports = Asset
