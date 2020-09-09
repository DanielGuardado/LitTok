Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :videos, only: [:create, :index, :show, :destroy, :update]
    resources :comments, only: [:show, :index, :create, :destroy]
    resources :follows, only: [:show, :index, :create, :destroy]
    resources :likes, only: [:show, :index, :create, :destroy]
  end
end
