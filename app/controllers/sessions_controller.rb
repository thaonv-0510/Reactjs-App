class SessionsController < Devise::SessionsController
  def create
    @user ||= User.find_by email: params[:user][:email]
    if @user&.valid_password? params[:user][:password]
      sign_in @user
      session[:user_id] = @user.id
      payload = { email: @user.email, id: @user.id }
      token = JWT.encode payload, Rails.application.credentials.secret_key_base, 'HS256'

      return render json: { status: 200, msg: 'Login success', token: }
    end
    render json: { status: 401, msg: 'Unauthorized user' }
  end
end
