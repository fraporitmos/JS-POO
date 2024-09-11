 class Comic extends Book {

    constructor(id, img, author, name, description, price, editorial, ilustrador) {
        super(id,img, author, name, description, price, editorial)
        this.type = "Comic"
        this.ilustrador = ilustrador
    }

    getSummary() {
        return `
        Type${this.type}
        Name: ${this.name}
        Author: ${this.author}
        Description: ${this.descripcion}
        Price: ${this.getPriceDepartament()}
        RentPrice: ${this.rentPrice}
        Ilustrator: ${this.ilustrador}`
        
    }
}