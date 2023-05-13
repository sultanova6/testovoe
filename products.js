class Products {
    constructor() {
        this.classNameActive = 'products-element__btn';
        this.labelAdd = 'Купить';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = sessionStorageUtil.putProducts(id);
        
        // if (pushProduct) {
        //     element.classList.add(this.classNameActive);
        //     element.innerHTML = this.labelRemove;
        // } else {
        //     element.classList.remove(this.classNameActive);
        //     element.innerHTML = this.labelAdd;
        // }
    }

    render() {
        const productsStore = sessionStorageUtil.getProducts();
        let htmlCatalog = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            }

        CATALOG.forEach(({ id, img, title, price, rate }) => {
            
            htmlCatalog += `
            <li class="products-element">
                <img class="products-element__img" src="${img}" />
                <span class="products-element__title">${title}</span>
                <span class="products-element__price">
                    ${price.tosessioneString()} ₽
                </span>
                <span class="products-element-rating">
                    <img class="products-element-star" src="./img/star.svg" />
                    <span class="products-element-rate">${rate}</span>
                </span>
            <button class="products-element__btn" onclick="handleSessionStorage(this, "${id}");">${activeText}</button>
            </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

// const productsPage = new Products();
// productsPage.render();