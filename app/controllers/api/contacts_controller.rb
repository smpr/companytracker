class Api::ContactsController < ApplicationController
    def index
        puts "Contact Index hit"
        @company = Company.find(params[:company_id])
        @contacts = @company.contacts.all
        render json: @contacts
       end
       def create
        puts "Contact Create Hit"
        @company = Company.find(params[:company_id])
        puts @company
          @contact = @company.contacts.create!(contact_params)
          
 #
       end
       def show
          @contact = Contact.find(params[:id])
          render json: @contact
       end
       def update
          puts "Contact Update Hit"
          Contact.find(params[:id]).update(contact_params)
          
       end
       def destroy
          puts "contact destroy hit"
          Contact.find(params[:id]).delete
      
          render status: :ok
       end
  
       private
       def contact_params
          params.require(:contact).permit(:lName, :fName, :title, :email, :linkedIn, :firstLetter, :firstResponse, :secondLetter, :secondResponse, :thirdLetter, :thirdResponse, :notes, :interview)
       end
end
