class Api::UsersController < ApplicationController
    

    def show

    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def identifier_valid?
        @email = User.find_by(email: params[:email])
        # @phone = User.find_by(phone: params[:identifier])
        if @email 
            render json: {identifier: true}
        else
            render json: {identifier: false}
        end
    end


  private

    def user_params
        params.require(:user).permit(:username, :password, :email, :image_url)
    end
  
end
