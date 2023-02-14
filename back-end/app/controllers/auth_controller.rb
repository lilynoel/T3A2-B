class AuthController < ApplicationController
    def login
        user = User.find_by(email: auth_params[:email])
        if(user&.authenticate(auth_params[:password]))
            render json: user
        else
            render json: {error: "Incorrect email or password"}, status: 401
        end
    end

    def register
        user = User.create(auth_params)
        unless user.errors.any?
            render json: user, status: 201
        else
            render json: {errors: user.errors.full_messages}, status: 400
        end
    end

    private 

    def auth_params
        params.permit(:auth, :email, :password, :password_confirmation, :username)
    end
end
