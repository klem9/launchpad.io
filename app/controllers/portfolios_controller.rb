class PortfoliosController < ApplicationController

    skip_before_action :authorized
    def index 
        render json: Portfolio.all, status: :ok
    end 

    def show 
        portfolio = Portfolio.find_by!(id: params[:id])
        render json: portfolio 
    end 

    def create 
        portfolio = Portfolio.create(portfolio_params)
        if portfolio 
            render json: portfolio, status: :created
        else 
            render json: {error: "not created"}, status: :unprocessable_entity
        end
    end 

    def update 
        portfolio = Portfolio.find_by!(id: params[:id])
        portfolio.update!(portfolio_params)
        render json: portfolio, status: :accepted
    end 

    def destroy 
        portfolio = Portfolio.find_by!(id: params[:id])
        portfolio.destroy
        head :no_content
    end 

    def by_current_user
        my_portfolio = User.find(session[:user_id]).portfolios
        render json: my_portfolio
    end 

    # def show 
    #     current_user = User.find(session[:user_id])
    #     render json: current_user
    # end 

    private 

    def portfolio_params 
        params.permit(:portfolio, :user_id, :investment_type, :defi_id, :token_id, :amount)
    end

end
