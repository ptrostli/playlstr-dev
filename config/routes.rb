Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/playlists', to: "static_pages#index"
  get '/playlists/new', to: "static_pages#authenticated"
  get '/playlists/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"
  get '/auth/spotify/callback', to: 'users#spotify'


  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :playlists, only: [:index, :show, :create, :destroy, :update]
    end
  end
end
