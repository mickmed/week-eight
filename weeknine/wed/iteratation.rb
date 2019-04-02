zombie_apocalypse_inventory = ["hatchet", "rations", "water jug", "binoculars",
    "shotgun", "compass", "CB radio", "batteries"]

zombie_apocalypse_inventory2 = ["hatchet", "rations", "hat", "binoculars",
    "sunglasses", "soda", "CB radio", "herbs"]

# 1. Iterate through the zombie_apocalypse_inventory array using each,
# printing each item in the array (on one line in the terminal) separated by an asterisk
# p "Iterate through Arrays"

def iterate(arr)
    arr.each do |zombie|
        puts "#{zombie} *"
    end
end
# iterate(zombie_apocalypse_inventory)

def boots(arr, word)
    arr.each do |zombie|
        if zombie == word 
        puts "#{zombie} *"
        end
    end
end
# boots(zombie_apocalypse_inventory, "rations")


def boots(arr)
    arr.each do |zombie|
        if arr.length > 5 
            arr.pop()
        end

    end
    puts arr
end
# boots(zombie_apocalypse_inventory)


def combine(arr1, arr2)
#    newArr = arr1 + arr2
   newArr = arr1 & arr2
   puts newArr
end
# combine(zombie_apocalypse_inventory, zombie_apocalypse_inventory2)

# ------------------------------------------------------------

extinct_animals = {
    "Passenger Pigeon" => 1914,
    "Tasmanian Tiger" => 1936,
    "Eastern Hare Wallaby" => 1890,
    "Dodo" => 1662,
    "Pyrenean Ibex" => 2000,
    "West African Black Rhinoceros" => 2011,
    "Laysan Crake" => 1923
  }


def hashIterate(hash)
    hash.each do |key, value|
        puts "#{key} - #{value}"
    end
end
# hashIterate(extinct_animals)

def before2000(hash)
    hash.each do |key, value|
        hash.delete_if { |key,value| value < 2000 }
    end
    puts hash
end
before2000(extinct_animals)

def plusThree(hash)
    hash.each {|key, value| hash[key] = value + 3}
    puts hash
end
# plusThree(extinct_animals)

maybeExtinct = ["Andean Cat", "Dodo", "Saiga Antelope"]

def isExtinct(hash, arr)
    arr.each do |el|
        # puts hash.key?(el), key
        hash.include?(el)
    end
end
isExtinct(extinct_animals, maybeExtinct)

maybe_extinct = "Andean Cat, Dodo, Saiga Antelope".split(', ')
def is_extinct?(hash, animals)
  animals.each do |animal|
    p hash.include?(animal)
  end
end
p "########4"
is_extinct?(extinct_animals, maybe_extinct)