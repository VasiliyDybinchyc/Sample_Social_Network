Rails.application.routes.draw do
  root "application#root"

  get  '/signup',  to: 'application#root'
  post '/signup',  to: 'users#create'

  get    '/login',   to: 'application#root'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  get    'Galerey/:userId/page/:pageNumber', to: 'application#shit'

  get    'getGallerey/:userId/page/:pageNumber', to: 'galleries#getGallerey'

  get    '/profile',   to: 'application#shit'

  get    '/editProfile',   to: 'application#shit'

  get    '/AllUser',   to: 'application#shit'

  get    '/allFrend/:userId',   to: 'application#shit'

  get   '/giveUser/:id', to: 'users#giveUser'

  resources :sessions, only: [:new, :create, :destroy]

  resources :relationships,       only: [:create, :destroy] do
    member do
      get :get_all_friends, :get_friends, :check_is_this_user_is_friend
    end
  end

  resources :users do

    resources :messages,  only: [:create, :destroy, :index] do
      collection do
        get :takeMoreNews
      end
    end

    resources :galleries, only: [:create, :destroy]

    collection  do
      get :authentication, :getCurrentUser
    end

  end
end
