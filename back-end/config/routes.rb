Rails.application.routes.draw do
  resources :products
  post '/auth/login', to: 'auth#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
