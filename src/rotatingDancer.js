var makeRotatingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this);

  this.$node.addClass('RotatingDancer');
  this.setPosition(top, left);
};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);

makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this$node.toggle('bounce');
};