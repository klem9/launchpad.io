Rails.application.routes.draw do
  
  resources :users, only: [:create, :show, :index]
  resources :tokens, only: [:index, :show]
  resources :portfolios
  resources :defis, only: [:index, :show]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/portfolios/users/me", to: "portfolios#by_current_user"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
