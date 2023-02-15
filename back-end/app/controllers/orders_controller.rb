class OrdersController < ApplicationController
  before_action :authenticate
  before_action :restrict_to_admin, only: [ :update, :destroy]
  before_action :set_order, only: [:show, :update, :destroy]

  def create 
    user_id = current_user.id 
    order = Order.create(user_id: user_id, product_id: order_params[:product_id], quantity: order_params[:quantity])
    render json: order, status: 201
  end

  def index 
    if current_user.role == 'admin'  
      orders = Order.order(created_at: :desc)
     else 
      orders = Order.where(user_id: current_user.id).order(created_at: :desc)
     end
    render json: orders, status: 200
  end

  def show 
    render json: @order
  end 

    # PATCH/PUT /orders/1
    def update
      if @order.update(order_params)
        render json: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /orders/1
    def destroy
      @order.destroy
    end


  private 
  def order_params
    params.permit(:product_id, :user_id, :quantity, :status)
  end

  def set_order 
    begin
      @order = Order.find(params[:id])
      render json: {error: "You're not authorised to do that"}, status: 403 if @order.user_id != current_user.id && current_user.role != 'admin' 
    rescue => exception
      render json: {error: "Could not find order with id #{params[:id]}"}, status: 404
    end
  end
end