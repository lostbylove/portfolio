class ContactFormsController < ApplicationController
  def new
    @contact_form = ContactForm.new
  end

  def create
    @contact_form = ContactForm.new(contact_form_params)
    if @contact_form.save
      flash[:notice] = "Thank you #{@contact_form.first_name}, your message has been sent."
      redirect_to contact_form_path(@contact_form)
    else
      render :new
    end
  end

  def show
    @contact_form = ContactForm.find(params[:id])

  end

  def edit
    @contact_form = ContactForm.find(params[:id])
  end

  def update
    @contact_form = ContactForm.find(params[:id])

    if @contact_form.update(message: contact_form_params[:message])
      flash[:notice] = "Contact form updated successfully."
      redirect_to @contact_form
    else
      render :edit
    end
  end

  def destroy
    @contact_form = ContactForm.find(params[:id])
    @contact_form.destroy
    redirect_to contact_path
  end

  private

  def contact_form_params
    params.require(:contact_form).permit(:first_name, :last_name, :email, :phone, :message)
  end
end
