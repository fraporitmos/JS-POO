class Book {

    constructor(id, img, author, name, description, price, editorial) {
        this.id = id
        this.img = img
        this.author = author
        this.name = name
        this.description = description
        this.editorial = editorial
        this.price = price
        this.type = "Book"
        this.rentPrice = 0
        this.shippingPrice = 10

    }

    getSummary() {
        return `
        Type:  ${this.type}
        Name: ${this.name}
        Author: ${this.author}
        Description: ${this.description}
        Price: ${this.getPriceDepartament()}
        RentPrice: ${this.rentPrice}`
    }

    getPriceDepartament() {
        if (this.price != undefined) {
            var finalPrice = this.price + this.shippingPrice
            return finalPrice
        } else {
            return 0
        }
    }

    rentBook(isStudent) {
        if(this.price == undefined){
            return 0
        }
        if (isStudent) {
            this.rentPrice = 0
        } else {
            this.rentPrice =(this.price + this.shippingPrice) /  2
        }
    }

    addBookToCart(book){
        this.carrito.push(book)
    }
}