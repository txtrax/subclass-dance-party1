var ShuffleDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this);

  this.$node.addClass('ShuffleDancer');
  this.setPosition(top, left);
};

ShuffleDancer.prototype = Object.create(Dancer.prototype);

ShuffleDancer.prototype.constructor = ShuffleDancer;

ShuffleDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle('shuffle');
};



// makeShuffleDancer.prototype.lineUp = function (top, left) {
//   this.setPosition(1000);
// };