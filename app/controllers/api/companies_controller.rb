class Api::CompaniesController < ApplicationController
     def index
        @companies = Company.ApplicationController
        render json: @companies
     end
     def create
        puts "Create Hit"
     end
     def show
        puts "Show Hit"
     end
     def update
        puts "Update Hit"
     end
     def destroy
        puts "destroy hit"
     end

     private
     def company_params
        params.require(:company).permit(:name)
     end
end
