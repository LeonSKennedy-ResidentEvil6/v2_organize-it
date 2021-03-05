Rails.application.routes.draw do
  resources :events
  resources :participants

  namespace :api do
    namespace :v1 do
      resources :notes
    end
  end
end