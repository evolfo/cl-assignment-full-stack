    Rails.application.routes.draw do
      namespace :api do
        namespace :v1 do
          resources :folders, only: [:index]
          resources :topics, only: [:index]
          resources :projects, only: [:index]
        end
      end
    end