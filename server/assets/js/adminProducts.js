class LoadingProducts {
    static products = [];
    static fetchProducts() {
        fetch('/api/products/', {method: "Get"})
        .then(res => res.json())
        .then(data => {
            this.products = data.products;
            this.viewProducts()
        })
        .catch(err => console.log(err))
    }

    static viewProducts() {
        const productList = this.products.map(product => 
             `
                <div class="row bg-light admin-product-item py-3 mb-3" id="${product._id}">
                    <div class="col-3">${product.name}</div>
                    <a class="col-3 text-black text-decoration-none show-details" href="/admin/products/${product.category}/${product.slug}">details</a>
                    <a class="col-3" href="/admin/products/update/${product.id}">
                        <span class="update-product bg-primary">
                            <i class="fas fa-pen-alt"></i>
                        </span>
                    </a>
                    <div class="col-3">
                        <button class="btn delete-product bg-danger" data-id="${product._id}">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `
        ).join("")
        document.querySelector(".products-list").innerHTML += productList;
        document.querySelectorAll('.delete-product').forEach(btn => btn.addEventListener('click', ProductDelete.delete))

    }
}
LoadingProducts.fetchProducts();

class ProductDelete {
    constructor (productId) {
        this.productId = productId;
        this.token = JSON.parse(localStorage.getItem("userData")).token;
        this.productdeleted = "";
    }

    deleteProduct() {
        let data = {
            productId: this.productId,
            token: this.token
        }
        console.log(data)
        fetch('/api/products/delete', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "authorization": this.token
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(() => this.deleteProductFromList())
        // .catch(err => alert(err.message))
    }
    deleteProductFromList() {
       document.getElementById(this.productId).remove();
    }
    static delete(e) {
        let id = e.target.dataset.id
        let newProductDelete = new ProductDelete(id)
        newProductDelete.deleteProduct();
    }
}