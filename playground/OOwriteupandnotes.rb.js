What is inheritance?
Inheritance is when a subclass shares the state and/or behavior of a superclass.
classes in ruby is roughly similar to constructors in js.
# ruby constructor
# foo is private by default
class A
  def initialize
    @foo = foo
  end
end

a = A.new("bar")
a.foo # NoMethodError

//javascript constructor
// foo is public by default
function A(foo) {
  this.foo = foo;
}

var a = new A("bar");
a.foo // "bar"

What does it mean to override a method? Give an example and explain it.
Overriding a method happens when a subclass inherits from a superclass but has a method of its own that supercedes the superclasses method of the same name. In the example below the Cat class inherits from Animal and the talk method in Cat overrides the talk method in Animal.

class Animal
  def talk
    "hello"
  end
end

class Cat < Animal
  def talk
    "meow"
  end
end

function Auto(make) {
  this.make = make;
}

Auto.prototype.go = function() {
  console.log("driving");
};

var car = new Auto("ford")
car.go = function() {
  console.log("driving a different thing");
};


What is super in Ruby? Give an example of how to use it and explain what is going on.
In Ruby the super method will give access to the superclass methods and also allows you to pass arguments to the superclass. In the example below, the Cat class inherits from the Animal class and in its constructor it calls the super method and passes in a custom talk string. You would create the cat with `Cat.new(true, large)`

class Animal
  def initialize(fur, size, says )
    @fur = fur
    @size = size
    @talk = says
  end

  def talk
    @says
  end

  def foo
    "hi"
  end
end

class Cat < Animal
  def initialize(fur,size)
    super(fur, size, "meow")
  end

  def foo
    "bye" + super
  end
end

What is encapsulation? Provide an analogy for encapsulation.
Encapsulation is a way to limit access to parts of your code and to set conditions and requirements on how things can be created, changed, or accessed. We used the castle analogy in class. You have a castle with a moat around it and a drawbridge at the front. The contents of the castle are encapsulated (protected) from the outside forces. If an outside force wants to access something in the castle, it has to go through the drawbridge which acts as an interface giving very specific access to the castle.

Why are setters and getters useful?
Setters and getters are useful because they allow state and behavior of an instance to be changed and/or accessed within the confines of some rules.

Write a constructor for Lamp that takes parameters for the brightnessInLumens and voltage. Next, add setters and getters for both attributes. An outside entity should not be able to change the brightnessInLumens or voltage.

# ruby
class Lamp
  attr_accessor :brightnessInLumens, :voltage
  def initialize(brightnessInLumens, voltage)
    @brightnessInLumens = brightnessInLumens
    @voltage = voltage
  end
end

// javascript
function Lamp(brightnessInLumens,voltage) {
  brightnessInLumens = brightnessInLumens;
  voltage = voltage;
  var that = this;

  return {
    getBrightnessInLumens: that.brightnessInLumens,
    getVoltage: that.voltage,
    setBrightnessInLumens: function(newBrightness) {
      that.brightnessInLumens = newBrightness;
    },
    setVoltage: function(newVoltage) {
      that.voltage = newVoltage;
    }
}
```
