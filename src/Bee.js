var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
};

Bee.prototype = new Grub(); // sets the prototype chain to grub's
Bee.prototype.constructor = Bee; // resets the constructor to be itself instead of grub

Bee.prototype.job = 'keep on growing';