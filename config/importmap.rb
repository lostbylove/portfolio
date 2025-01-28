pin "application"
pin "@rails/ujs", to: "https://cdn.jsdelivr.net/npm/@rails/ujs@7.0.5/lib/assets/compiled/rails-ujs.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@hotwired/stimulus", to: "stimulus.min.js"
