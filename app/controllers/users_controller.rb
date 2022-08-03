class UsersController < ApplicationController
    skip_before_action :authorize, only: %i[index create show]

    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
    def index
      render json: User.all
    end
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
      user = User.find_by!(id: session[:user_id])
      render json: user
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :first_name, :last_name)
    end
end
