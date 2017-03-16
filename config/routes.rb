Rails.application.routes.draw do
  root "application#root"

  get  '/signup',  to: 'application#root'
  post '/signup',  to: 'users#create'

  get    '/login',   to: 'application#root'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  get    'Galerey/:userId/page/:pageNumber', to: 'application#shit'

  get    '/profile',   to: 'application#shit'

  get    '/editProfile',   to: 'application#shit'

  get    '/AllUser',   to: 'application#shit'

  get    '/allFrend/:userId',   to: 'application#shit'

  get    '/user/:userId',   to: 'application#shit'

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
