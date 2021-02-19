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
                <div class="row bg-light admin-product-item py-3 mb-3">
                    <div class="col-3">${product.name}</div>
                    <a class="col-3 text-black text-decoration-none show-details" href="/admin/products/${product.category}/${product.slug}">details</a>
                    <a class="col-3" href="/admin/products/update/${product.id}">
                        <span class="update-product bg-danger">
                            <i class="fas fa-pen-alt"></i>
                        </span>
                    </a>
                    <div class="col-3">
                        <button class="delete-product bg-primary">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `
        ).join("")
        document.querySelectorAll('.delete-product').forEach(btn => btn.addEventListener('dbclick', ProductDelete.delete))
        document.querySelector(".products-list").innerHTML += productList;
    }
}
LoadingProducts.fetchProducts();

class ProductDelete {
    constructor (productId) {
        this.productId = productId
    }
    deleteProduct() {
        fetch('/api/admin/products/delete', {
            method: "post",
            
        })
    }
    static delete(e) {
        console.log("anything")
        console.log(e.target)
        // let deleteProduct = new ProductDelete()
    }
}