Rails.application.routes.draw do
  resources :students
  resources :courses
  resources :events
  resources :participants
end
