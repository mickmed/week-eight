# 1. Create a Ruby class called Cars
# Its initialize method should ask for the make, model, year, and color
# Miles should have a default value of 0 for every new car
# Make these values readable and writable
# Go ahead and make your first car!


# 2. Write a method called seen_another_year inside of the Cars class that will increase the miles by 15000
# call seen_another_year on your new car, then check to make sure the value has changed

# 3. Write a method called details inside of the car class
# This method should print a string about the details of the car. For example: "This 1982 Cadillac Fleetwood Brougham has 15,000 miles on it"
# If the car has more than 50,000 miles, add something like this to the string ", and that blue paint is really fading"

# 4. Time for some new paint!
# Write a method that will change the color of the car
# This method should call another method called ahh_fresh_paint that prints "The new white color was a good choice"

class Car 
  attr_accessor :make, :model, :year, :color, :miles

  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
  end

  def seen_another_year
    self.miles = miles + 15000
    details
  end

  def details
    puts "This #{year} #{make} #{model} has #{miles} miles on it"
    
  end

  def new_color
    ahh_fresh_paint
  end

  def ahh_fresh_paint
    puts "The new white color was a good choice"
  end
end

Cuda = Car.new("Plymouth", "Cuda", "1970", "Plum Crazy")
Cuda.seen_another_year
Cuda.seen_another_year
Cuda.seen_another_year
Cuda.seen_another_year


Cuda.new_color


