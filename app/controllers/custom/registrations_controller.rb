class Custom::RegistrationsController < DeviseTokenAuth::RegistrationsController

    def sign_up_params
      params.require(:user).permit(:nickname, :first_name, :last_name, :email, :password, :password_confirmation)
    end
end
