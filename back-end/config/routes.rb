Rails.application.routes.draw do
  resources :products
  post '/auth/login', to: 'auth#login'
  post '/auth/register', to: "auth#register"
  get "/auth/my_details", to: "auth#my_details"
  # post "/orders", to: "orders#create"
  # get "/orders", to: "orders#index"
  # get "/orders/:id", to: "orders#show"
  resources :orders
  root to: "home#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end