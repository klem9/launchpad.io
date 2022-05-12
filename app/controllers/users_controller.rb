class UsersController < ApplicationController
    skip_before_action :authorized

    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: ["User not valid"]},status: :unprocessable_entity
        end 
    end 

    def show 
        current_user = User.find(session[:user_id])
        render json: current_user
    end 

    def index 
        render json: User.all 
    end 

    private

    def user_params
        params.permit(:username, :password)
    end
end
