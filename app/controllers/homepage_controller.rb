class HomepageController < ApplicationController
  def index
    respond_to do |format|
      format.html { render 'layouts/application' }
    end
  end
end
