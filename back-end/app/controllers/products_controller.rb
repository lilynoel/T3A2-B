class ProductsController < ApplicationController
  before_action :set_product, only: %i[ show update destroy ]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      begin
      @product = Product.find(params[:id])
      rescue => exception
        render json: {error: "Could not find product with id #{params[:id]}"}, status: 404
      end
    end

    # Only allow a list of trusted parameters through.
    def product_params
      # params.require(:product).permit(:name, :price, :url, :ingredients)
      params.permit(:product, :name, :price, :url, :ingredients)
    end
end
