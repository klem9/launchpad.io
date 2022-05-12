class TokensController < ApplicationController
    skip_before_action :authorized

    def index 
        render json: Token.all 
    end 

    def show 
        token = Token.find_by!(id: params[:id])
        render json: token
    end 
end
