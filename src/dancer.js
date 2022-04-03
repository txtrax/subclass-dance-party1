// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

// ES6
// var Dancer = class {
//   constructor(top, left, timeBetweenSteps) {
//     this.$node = $('<span class="dancer"></span>');
//     this._timeBetweenSteps = timeBetweenSteps;
//     this.step();
//     this.setPosition(top,left);
//   }
//   step() {
//     // Arrow function acknowledges lexical `this`
//     setTimeout(() => this.step(), this._timeBetweenSteps)
//   }

//   setPosition(top, left) {
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   }
// }

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"></div>');
  // this.top = top;
  // this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  // v1: requires an extra clock tick
  // setTimeout(this.step.bind(this), this._timeBetweenSteps);

  // v2: does not require extra clock tick
  var context = this;
  setTimeout(function() { context.step(); }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function () {
  var styleSettings = {
    top: 1000
  };
  this.$node.css(styleSettings);
};