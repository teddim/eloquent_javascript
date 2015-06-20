class Animal
  def tail
    true
  end
end

# implement a class that is an animal and it is a dog and that dog can bark

class Dog < Animal
  def bark
    "woof"
  end
end

# I want a cat that inherits from animal and can meow
class Cat < Animal
  def meow
    "meow"
  end
end

# cat and dog are both specific classes animal is a generic class
# these two classes are not polymorphic because they are not implementing the same interface and are not substitutable

# Liskov Substitution Principle http://www.oodesign.com/liskov-s-substitution-principle.html

# the thing we inherit  from is the superclass, the thing that does the inheriting is the subclass

# Generic behavior
class Animal
  def tail
    false
  end
end

# Method Override
# we want the subclasses to override the tail method so we will redefine it
# when a subclass implements a method that the superclass it inherits from also implements then that method is overriding
#
class Dog < Animal
  def bark
    "woof"
  end
  def tail
    true
  end
end

class Cat < Animal
  def meow
    "meow"
  end
  def tail
    true
  end
end

class Person
  def speak
    "Little to say usually"
  end
end

class QuietPerson < Person
end

class LoquaciousPerson < Person
  def speak
    "Sometimes I have a lot to say, actually"\
    "no,all the time I have a lot to say."
  end
end

Person.new.speak
QuietPerson.new.speak
LoquaciousPerson.new.speak

# Composition ---> Modules. In your classes you can include modules that have generic behavior.
# In Ruby you cannot inherit from multiple classes

# Can a subclass implement its own version of a method and also call the superclass version of that method? Yes.
class LoquaciousPerson < Person
  def speak
    super + '' +
    "Sometimes I have a lot to say, actually"\
    "no,all the time I have a lot to say."
  end
end

LoquaciousPerson.new.speak # Little to say usually Sometimes I have a lot to say, actually no,all the time I have a lot to say.

# You can pass arguments up to the super class
class Sooper
  def say_hi(who_to)
    "Hello there #{who_to}"
  end
end

class Sub < Sooper
  def say_hi(who_to)
    "#{super(who_to)} I am fine #{who_to}"
  end
end
