class HomeController < ApplicationController
    def home
        render plain: "hello"
    end
end
