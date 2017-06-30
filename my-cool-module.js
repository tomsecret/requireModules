module.exports = {
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  },
  IQtest: function(age) {
    console.log("Your IQ is " + age * 10);
  }
};

