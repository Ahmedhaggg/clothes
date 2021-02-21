
/*
    class 
        private
            color
            static colors
        puplic
            add
                1- get colors
                2- push colors
            delete
                1-colors.find()
                2-delete finds
            static add
                new object 
                newObject.add(newColor)
            static delete
                new object 
                newObject.delete(newColor) 

*/
class Colors {
    constructor (color) {
        this.color = color
        this.colorsListElement = document.querySelector('.colors-show');
        this.colors = Colors.colorsList
    }
    static colorsList = [];
    viewColors() {
        let listView = Colors.colorsList.map(color => {
            return ` <li class="me-4 bg-light text-black py-2 px-3 d-inline-block position-relative">
                <span>${color}</span>
                <i class="fa fa-times delete-color text-danger" data-value=${color}></i>
            </li> `
        }).join("")
        this.colorsListElement.innerHTML = listView;
    }
    add() {
        let checkColors = Colors.colorsList.find(color => color === this.color)
        if (!checkColors) {
            Colors.colorsList.push(this.color)
        }
    } 
    delete() {
        Colors.colorsList = Colors.colorsList.filter(lastColor => lastColor !== this.color)
    }
    static add() {
        let newColors = new Colors(document.querySelector('.color-input').value)
        newColors.add()
        newColors.viewColors()
        document.querySelector('.color-input').value = ""
    }
    static delete(value) {
        let newColors = new Colors(value)
        newColors.delete()
        newColors.viewColors()
    }
}
document.querySelector('.add-color').addEventListener("click", Colors.add)
document.querySelector("form").addEventListener("click", e => {
    if (e.target.classList.contains("delete-color")) {
        Colors.delete(e.target.dataset.value)
    }
})


/*
    
*/

class Product extends Colors {
    constructor (colors) {
        super(colors);
        this.token = JSON.parse(localStorage.getItem("userData")).token;
        this.name = document.getElementById("name").value;
        this.category = document.getElementById("category").value;
        this.price = document.getElementById("price").value;
        this.discount = document.getElementById("price").value;
        this.productImage = document.querySelector(".product-image").files[0];
        this.success = false;
        this.error = false;
    }
    req() {
        const formData = new FormData();
        formData.append("name", this.name)
        formData.append("category", this.category)
        formData.append("price", this.price)
        formData.append("discount", this.discount)
        formData.append("colors", this.colors)
        formData.append("productImage", this.productImage)
        console.log(this.name)
        console.log(this.category)
        fetch('/api/products/add', {
            method: "POST",
            
            body: formData
        })
        .then(res =>  console.log(res))
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    add() {

    }

    static add(e) {
        e.preventDefault();
        let newProduct = new Product()
        newProduct.req()
    }
}
document.querySelector(".add-product").addEventListener('submit', Product.add)