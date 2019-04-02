class Animal
    def noises
        @noise
    end

    def noises=(value)
        @noise = value
    end
end
pig = Animal.new
pig.noises = "Oink"
puts pig.noises


class Person
    attr_reader :name, :age
    attr_writer :name, :age

    def name=(value)
        @name=value
    end

    def age
        puts
        @age
    end

    def have_bday=(value)
        puts "happy"
        @age = value + 1
    end
end

mick = Person.new
puts mick.name="Mick"