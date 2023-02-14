class AuthController < ApplicationController
    def login
        user = User.find_by(email: auth_params[:email])
        if(user&.authenticate(auth_params[:password]))
            render json: user
        else
            render json: {error: "Incorrect email or password"}, status: 401
        end
    end

    private 

    def auth_params
        params.permit(:auth, :email, :password, :password_confirmation, :username)
    end
end
