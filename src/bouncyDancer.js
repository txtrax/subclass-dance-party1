var BouncyDancer = function (top, left, timeBetweenSteps) {

  Dancer.call(this);
  // this.$node = $('<span class="BouncyDancer"></span>');
  this.$node.addClass('BouncyDancer');
  this.setPosition(top, left);
};


BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle('bounce');
};

// makeBouncyDancer.prototype.lineup = function(top, left) {

//   var styleSettings = {
//     left: 1920
//   };
//   this.$node.css(styleSettings);
// };