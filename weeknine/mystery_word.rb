# One player sets a MyStERy WoRD at the beginning of the game
# The game shows the current mystery word, with underscores showing for each character that is still a mystery.
# The second player guesses one letter in each round
# If the letter is in the word, that letter is revealed in the word
# If the letter is not in the word, the player loses one life
# Here's what a game of Mystery Word should look like:


class Word
    # Stores the provided word in an instance variable and
    # setups up any other instance variables.
    @@letterArr = ['x', 'x', 'x', 'x', 'x']
    def initialize(word)
        @word = word
        
        puts "first letter"
        guess!(gets.chomp)
        
    end
  
    # Guess a letter in the word.
    # Should return a boolean. true if the letter is in the word, false if not.
    def guess!(letter)

       
        
        # make_word.push(letter)
    
        if @word.include? letter
            
            
            @@letterArr[@word.index(letter)] = letter
            print @@letterArr
            puts 'yes'
            puts @word.index(letter)
            for i in 1..@word.length do
                if i == @word.index(letter) + 1
                    print letter
                else
                    print "_"
                end
                
            end
        else
            puts 'no'
            
        end
guess!(gets.chomp)

        

    end
  
    # Whether all letters in the word have been guessed correctly.
    def guessed_all_correct?
        # if word == make_word
        guess!
    else
    end
  
    # Display the current state of the guessed word for the player.
    def output_word
    end
  
    # Check whether a provided character is a letter
    def self.is_letter?(character)
    end
  end
  
  class MysteryWordGame
    # Initialize any state in the game, and start the game loop.
    def initialize
        ask_for_word
    end
  
    def ask_for_word
        puts "What is your word"
        @word = gets.chomp
        game_loop(@word)
    end
  
    # Run the game loop, which continues until the player wins or loses.
    def game_loop(word)
        Word.new(@word)
    end
  end
MysteryWordGame.new
  

  