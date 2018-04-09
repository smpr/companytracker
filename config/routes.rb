Rails.application.routes.draw do
 namespace :api do
    resources :companies do
      resources :contacts
      resources :resumes
    end
  end
end
