Rails.application.routes.draw do
  resources :game

  root to: 'game#index'
end
