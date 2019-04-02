Rails.application.routes.draw do
  get "/welcome", to: "welcome#index"
  get "/dinos", to: "dinos#index"

 
  resources :dinos, only: [:index, :show]
end
