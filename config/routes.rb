Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/playlists', to: "static_pages#index"
  get '/playlists/new', to: "static_pages#authenticated"
  get '/playlists/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :playlists, only: [:index, :show, :create, :destroy, :update] do
        resources :songs, only: [:create, :destroy]
      end
      post '/playlists/search', to: "playlists#search"
    end
  end
end
