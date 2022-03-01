var makeBouncyDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this);
  // this.$node = $('<span class="BouncyDancer"></span>');
  this.$node.addClass('BouncyDancer');
  this.setPosition(top, left);
};


makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('bounce');
};

// makeBouncyDancer.prototype.lineup = function(top, left) {

//   var styleSettings = {
//     left: 1920
//   };
//   this.$node.css(styleSettings);
// };