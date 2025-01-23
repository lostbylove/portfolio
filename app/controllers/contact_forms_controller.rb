class ContactFormsController < ApplicationController
  def new
    @contact_form = ContactForm.new
  end

  def create
    @contact_form = ContactForm.new(contact_form_params)
    if @contact_form.save
      redirect_to contact_path, notice: "Message sent successfully."
    else
      render :new
    end
  end

  private

  def contact_form_params
    params.require(:contact_form).permit(:first_name, :last_name, :email, :phone, :message)
  end
end
