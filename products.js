class Products {
    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ img, title, price, rate }) => {
            
            htmlCatalog += `
            <li class="products-element">
                <img class="products-element__img" src="${img}" />
                <span class="products-element__title">${title}</span>
                <span class="products-element__price">
                    ${price.toLocaleString()} USD
                </span>
                <span class="products-element-rate">${rate}</span>
            <button class="products-element__btn">Купить</button>
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

const productsPage = new Products();
productsPage.render();