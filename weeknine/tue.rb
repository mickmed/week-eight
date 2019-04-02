# Task - TO BE DONE IN RUBY:
# Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
# Input will always be valid, i.e. no negative integers.

def murmur(num)
    for i in 1..num do
        print "#{i} sheep..."
    end
end
# murmur(3)



#Create a function finalGrade, which calculates the final grade of a student depending on two parameters:
# a grade for the exam and a number of completed projects.

# This function should take two arguments: exam - grade for exam (from 0 to 100); projects - 
# number of completed projects (from 0 and above);

# This function should return a number (final grade). There are four types of final grades:

# 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
# 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
# 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
# 0, in other cases

def finalGrade(exam, num)
    if exam > 90  || num > 10
        return '100'
    elsif exam > 75 && num > 5
        return '90'
    elsif exam > 50 && num > 2
        return '75'
    else
        return '0'
    end
end  
def final_grade(exam,proj)
    if exam > 90 or proj >10
    puts 100
    
    elsif exam > 75 and proj >= 5
    puts 90
    
    elsif exam >50 and proj >=2
    puts 75
    
    else
    puts 0
    end
    end

    final_grade(91,8)

    #call all array methods ---> Array.instance_methods or [].methods

# puts finalGrade(92, 11)