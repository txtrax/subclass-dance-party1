var makeBouncyDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this);
  this.$node = $('<span class="BouncyDancer"></span>');
  this.setPosition(top, left);
};


makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('bounce');
};