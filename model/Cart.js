class Cart{
    constructor(){
        this.cart = []
    }


    addToCart(product){
        this.cart.push(product)
    }

    getProducts(){
       return this.cart
    }


    addDiscount(){
       var discount = 10
       this.cart.forEach( item => {
        if(item.price != undefined){
           item.price = item.price - discount
        }
      })
     }

}