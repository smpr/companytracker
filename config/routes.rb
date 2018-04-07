Rails.application.routes.draw do
 namespace :api do
    resources :company do
      resources :contact
    end
  end
end
