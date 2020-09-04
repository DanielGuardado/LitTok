class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials( 
            params[:user][:username], 
            params[:user][:password] 
        ) 
        if @user 
            login!(@user)
            render 'api/users/show' 
        else 
            render json: ['Incorrect account or password'], status: 422
        end 

    end

    def destroy 
        @user = current_user 
        if @user 
            logout! 
            render json: {} 
        else 
            render json: ['Not logged in'], status: 422
        end
    end 
   
end 