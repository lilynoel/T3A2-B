class JwtService
  @secret = Rails.application.credentials.dig(:secret_key_base)

  def self.encode(user)
    payload = {user_id: user.id, exp: 20.minutes.from_now.to_i }
    token = JWT.encode(payload, @secret)
  end

  def self.decode(token) 
    begin
      payload = JWT.decode(token, @secret, true)
      return payload[0]
    rescue
      return nil
    end
  end 
end 