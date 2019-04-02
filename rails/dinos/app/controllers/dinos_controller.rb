class DinosController < ApplicationController
    def index
      @dinos = ["t-rex", "pterodactyl", "triceratops", "brontosaurus"]
      
    end

    def show
      @dino =  "I'm the dino #{params[:id]}"
    end
  end 