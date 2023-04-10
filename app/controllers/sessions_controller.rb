class SessionsController < Devise::SessionsController
  def create
    @user = User.find_by email: params[:user][:email]
    if @user&.valid_password? params[:user][:password]
      sign_in @user
      session[:user_id] = @user.id
      return render json: { status: 200, msg: 'Login success' }
    end
    render json: { status: 401, msg: 'Unauthorized user' }
  end
end
