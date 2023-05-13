class SessionStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsSessionStorage = sessionStorage.getItem(this.keyName);
        if (productsSessionStorage !== null) {
            return JSON.parse(productsSessionStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        sessionStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
}