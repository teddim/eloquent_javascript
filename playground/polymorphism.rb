# POLYMORPHISM
# One interface is implemented by many different classes.
# An interface can be seen as a collection of methods.
#
# All cups have the same interface. If you want to be a cup you have to implement the required methods. They all have a mouth size, a capacity (volume of liquid they can hold), handle. In ruby the language has no formal concept of an interface.
#
# How could we implement an interface in ruby? One way that you can do this is:
# we will use inheritance

# Without inheritance-
# In our heads we are going to say things like "to be a cup you must have the following methods: mouth_size, capacity, handle"

class RedSoloCup
  def mouth_size
    3
  end

  def capacity
    16
  end

  def handle
    false
  end
end

# in our heads we have also said that this class needs to implement mouth_size, capacity, handle
class SippeeCup
  def mouth_size
    0.25
  end

  def capacity
    4
  end

  def handle
    true
  end
end

class PeopleDrinking
  def initialize(age)
    @cup =
      if(age < 10)
        SippeeCup.new
      else
        RedSoloCup.new
      end
  end

  def get_hammered
    puts "I can only drink so fast, the mouth size is only: #{@cup.mouth_size}"
  end
end

 # The following is our interface where we use inheritance. If we implement this then when someone creates another cup that doesn't implement a method they will see this error to give them a better message about why their get_hammered method doesn't work (for example) when they did not implement mouth_size. -
class Cup
  def mouth_size
    raise "Not yet implemented"
  end
 def capacity
    raise "Not yet implemented"
  end
 def handle
    raise "Not yet implemented"
  end
