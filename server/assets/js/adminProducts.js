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
        console.log(this.products)
        const productList = this.products.map(product => 
             `
            <div class="col col-lg-3 col-md-4 col-sm-6">
                <div class="card">
                    <img class="card-img-top" src="/${product.productImage}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `
        ).join("")
        
        document.querySelector(".products-content").innerHTML = productList;
    }
}
// LoadingProducts.fetchProducts();