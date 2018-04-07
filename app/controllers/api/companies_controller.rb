class Api::CompaniesController < ApplicationController
     def index
      puts "Index hit"
      @companies = Company.all
      render json: @companies
     end
     def create

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
