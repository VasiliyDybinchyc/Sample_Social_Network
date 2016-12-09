Rails.application.routes.draw do
  root "application#shit"

  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :sessions, only: [:new, :create, :destroy]



  resources :relationships,       only: [:create, :destroy] do
    member do
      get :get_all_friends, :get_friends, :check_is_this_user_is_friend
    end
  end


  resources :users do

    resources :messages,          only: [:create, :destroy, :index]

    resources :galleries, only: [:index, :create, :destroy]

    member do
      get :get_only_user_message
    end

    collection  do
      get :authentication, :getCurrentUser
    end

  end
end
