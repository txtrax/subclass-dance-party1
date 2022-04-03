var RotatingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this);

  this.$node.addClass('RotatingDancer');
  this.setPosition(top, left);
};

RotatingDancer.prototype = Object.create(Dancer.prototype);

RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle('rotate');
};

// makeRotatingDancer.prototype.lineup = function() {
//   this.setPosition(top, 10);
// };