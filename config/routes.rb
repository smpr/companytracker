Rails.application.routes.draw do
 namespace :api do
    resources :companies do
      resources :contacts
    end
  end
end
