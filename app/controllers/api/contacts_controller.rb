class Api::ContactsController < ApplicationController
    def index
        puts "Contact Index hit"
        @contacts = Contact.all
        render json: @contacts
       end
       def create
        puts "Contact Create Hit"
          @Contact = Contact.new(contact_params)
          
          if @Contact.save
               render json: @Contact
          #     puts "create hit"
           else
               render json: @Contact.errors
               puts "create failed"
           end
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
