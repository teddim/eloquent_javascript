class SuperCastle
  def some_method
    puts "I'm da SuperCastle"
  end

  private

  def some_private_method
    puts "I'm da private method"
  end
end

class Castle < SuperCastle
  def initialize(people)
    @people = people

  end

  def some_other_method
    some_method()
    some_private_method
  end
end
