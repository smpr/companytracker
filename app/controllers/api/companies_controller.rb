class Api::CompaniesController < ApplicationController
     def index
      puts "Index hit"
      @companies = Company.all
      render json: @companies
     end
     def create
        @Company = Company.new(company_params)
        
        if @Company.save
             render json: @Company
        #     puts "create hit"
         else
             render json: @Company.errors
             puts "create failed"
         end
     end
     def show
        @company = Company.find(params[:id])
        render json: @company
     end
     def update
        puts "Update Hit"
        Company.find(params[:id]).update(company_params)
        
     end
     def destroy
        puts "destroy hit"
        Company.find(params[:id]).delete
    
        render status: :ok
     end

     private
     def company_params
        params.require(:company).permit(:name)
     end
end
