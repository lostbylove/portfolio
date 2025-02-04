class PagesController < ApplicationController
  def welcome
  end
  def about
  end
  def portfolio
  end
  def contact
    @contact_form = ContactForm.new
  end
end
