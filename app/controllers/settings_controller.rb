class SettingsController < ApplicationController
  def edit
    if current_admin.setting
      @auto_text = current_admin.setting.auto_text
    else
      @auto_text = ""
    end
  end

  def update
    setting = Setting.find_or_initialize_by(admin_id: current_admin.id)
    if setting.update(
                    auto_text: params[:auto_text]
                      )
      flash[:success] = "Settings Saved!"
      redirect_to "/"
    end
  end
end
