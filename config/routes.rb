Rails.application.routes.draw do
  get 'homepage/index'
  root to: 'homepage#index'
  devise_for :users, controllers: {
    sessions: 'sessions'
  }
  resources :users
  get '/*other', to: "homepage#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
