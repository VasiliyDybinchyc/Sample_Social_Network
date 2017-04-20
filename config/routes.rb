Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks, :password], controllers: {
    registrations: 'custom/registrations'
  }

  root "application#root"

  get  '/signup',  to: 'application#root'

  get    '/login',   to: 'application#root'

  get    'Galerey/:userId/page/:pageNumber', to: 'application#checkLogined'

  get    'getGallerey/:userId/page/:pageNumber', to: 'galleries#getGallerey'

  get    '/profile', to: 'application#checkLogined'

  get    '/editProfile',   to: 'application#checkLogined'

  get    '/AllUser',   to: 'application#checkLogined'

  get    '/allFrend/:userId',   to: 'application#checkLogined'

  get   '/giveUser/:id', to: 'users#giveUser'

  resources :relationships,       only: [:create, :destroy] do
    member do
      get :get_all_friends, :get_friends, :check_is_this_user_is_friend
    end
  end

  resources :users, only: [:index, :show, :update] do

    resources :messages,  only: [:create, :destroy, :index] do
      collection do
        get :takeMoreNews, :getFeedFriends
      end
    end

    resources :galleries, only: [:create, :destroy]

    collection  do
      get :authentication, :getCurrentUser
    end
  end
end
