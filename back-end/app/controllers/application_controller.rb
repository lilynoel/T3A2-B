class ApplicationController < ActionController::API
  def authenticate
    token = extract_token_from_auth_headers
    payload = JwtService.decode(token)

    if payload 
      @current_user ||= User.find(payload["user_id"])
    else 
      render json: {error: "You must be logged in to do that"}, status: 401
    end 
  end

  def current_user
    @current_user 
  end 

  def logged_in? 
    !!@current_user
  end

  private

  def extract_token_from_auth_headers
    request.headers["Authorization"]&.split(" ")&.last
  end

#   def restrict_to_admin
#     unless @current_user.role == 'admin'
#       render json: {error: "Only admin users can do this"}, status: 403
#     end
  end 
