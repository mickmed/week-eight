class MoonsController < ApplicationController
    def create
        @planet = Planet.find(params[:planet_id])
        @moon = @planet.moons.create(moon_params)
        redirect_to moon_path(@moon)
      end

      def destroy
        @planet = Planet.find(params[:planet_id])
        @moon = @planet.moon.find(params[:id])
        @moon.destroy
        redirect_to planet_path(@planet)
      end
     
      private
        def moon_params
          params.require(:moon).permit(:name, :distance_from_planet)
        end
end
