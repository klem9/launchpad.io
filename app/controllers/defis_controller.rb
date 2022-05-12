class DefisController < ApplicationController
    skip_before_action :authorized

    def index 
        render json: Defi.all 
    end 

    def show 
        defi = Defi.find_by!(id: params[:id])
        render json: defi
    end 
end
