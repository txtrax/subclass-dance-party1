var makeShuffleDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this);

  this.$node.addClass('ShuffleDancer');
  this.setPosition(top, left);
};

makeShuffleDancer.prototype = Object.create(makeDancer.prototype);

makeShuffleDancer.prototype.constructor = makeShuffleDancer;

makeShuffleDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this$node.toggle('bounce');
};