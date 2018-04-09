class Api::ResumesController < ApplicationController
    def index
        puts "Resume Index hit"
        @company = Company.find(params[:company_id])
        @resumes = @company.resumes.all
        render json: @resumes
       end
       def create
        puts "Resume Create Hit"
        @company = Company.find(params[:company_id])
        puts @company
          @resume = @company.resumes.create!(resume_params)
          
 #
       end
       def show
          @resume = Resume.find(params[:id])
          render json: @resume
       end
       def update
          puts "Resume Update Hit"
          Resume.find(params[:id]).update(resume_params)
          
       end
       def destroy
          puts "Resume destroy hit"
          Resume.find(params[:id]).delete
      
          render status: :ok
       end
  
       private
       def resume_params
          params.require(:resume).permit(:reqId, :title, :dateApplied, :rej, :contactName)
       end
end
