/* 
Abstracción: Extraer los conceptos y comportamientos más improtantes de la vida real
Clase: Representa esa abstracción y utiliza propiedades y métodos que sirve como plantilla para crear objetos.
Intanciar: Es un objeto creado a partir de una clase, usamos new para instanciar objetos
this: hace referencia a las propiedades propias que existen en el contexto de la clse
*/

const book1 = new Book(
    1,
    "https://images.cdn1.buscalibre.com/fit-in/360x360/04/ff/04ff3ab661bfe2a05ab2ac69125c8a3e.jpg",
    "James Clear",
    "Hábitos atómicos",
    "Description 1",
    20,
    "Paidos"
)

const book2 = new Book(
    2,
    "https://images.cdn3.buscalibre.com/fit-in/360x360/46/f5/46f5ff901c5ce8ef42536784187872f2.jpg",
    "Dan Brow",
    "La fortaleza digital",
    "Description 2")

const comic1 = new Comic(
    3,
    "https://m.media-amazon.com/images/I/41Kh6+5yC+L._SY445_SX342_.jpg",
    "Stanlin",
    "Ironman",
    "Ironman the future",
    30,
    "Marvel",
    "Daniel Acuña")


const arrarBooks = [comic1, book1,book2]
var cart = new Cart()
var containerBooks = document.getElementById("containerBooks")
var btnDiscount = document.getElementById("btnDiscount")

btnDiscount.addEventListener("click", ()=>{
    if(cart.getProducts().length >0 ){
        alert(JSON.stringify(cart.getProducts()))
    }else{
        alert("Agrega productos al carrito")
    }
})


function cardBook(book){
    return `
    <div class="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl ">
    <div class="w-full h-full text-center">
    <div class="flex flex-col justify-center align-items h-full">
        <img style="height: 200px;" class=" m-6 object-contain  bg-landscape"
            src=${book.img} />
        <p class="mt-4 text-lg text-gray-900 ">
           ${book.name}
        </p>
        <p class="px-6 py-2 text-xs font-thin text-gray-700 ">
           ${book.description}
        </p>
        <div class="flex w-full justify-between align-items gap-6 mt-4">
            <p class=" text-xl font-bold text-gray-900 ">
                S/${book.getPriceDepartament()}
            </p>

            <button 
                type="button"
                attr-custom-btn=${book.id}
                class="helper-class-btn py-2 px-2  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Agregar a carrito
            </button>
        </div>
    </div>
    </div>
</div>`
}


function showCardBokks(arr){
    arrarBooks.forEach( item => {
        containerBooks.innerHTML += cardBook(item)
    })
}

showCardBokks(arrarBooks)

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("helper-class-btn")) {
      const idBook =  event.target.getAttribute("attr-custom-btn")
      const bookFind = arrarBooks.find( item => item.id == idBook)
    
      bookFind.rentBook(false)
      cart.addToCart(bookFind)
    }

})