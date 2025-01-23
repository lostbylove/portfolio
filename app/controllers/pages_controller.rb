class PagesController < ApplicationController
  def welcome
  end
  def portfolio

  end

  def about

  end

  def contact
    @contact_form = ContactForm.new
  end

end
