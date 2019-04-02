Rails.application.routes.draw do
  resources :todos
  resources :images
  root "todos#index"
end
