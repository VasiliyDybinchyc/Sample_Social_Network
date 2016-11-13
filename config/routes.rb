Rails.application.routes.draw do
  root "users#index"

  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :messages,          only: [:create, :destroy]

  resources :relationships,       only: [:create, :destroy]

  resources :users do
    member do
      get :all_frends
    end
  end
end
