Rails.application.routes.draw do
  resources :homes

  get "/homepage", to: "homes#homepage"
  get "/about", to: "homes#about"
  get "/info", to: "homes#info"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
