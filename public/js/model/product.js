// Product Model
"use strict";

function Product(products) {
    this.products = products;

    // template
    this.template = `
        <!-- PRODUCT TEMPLATE -->
        <div class="row">
            {{ cards-template }}
            <div class="col-lg-12 text-start px-4 mt-5">
                <h5 class="open-sans">Total: <strong>0</strong> pesos</h5>
                <a href="#confirm" id="confirm"><button type="button" class="btn btn-primary px-5 py-1 mt-2 shadow-none" id="order">Order Drinks</button></a>
            </div>
        </div>
    `;

    this.card = `
        <!-- CARD TEMPLATE -->
        <div class="col-sm-6 col-md-6 col-lg-4 p-4">
            <div class="card bg-dark text-white p-0">
                <img class="h-100" src="../images/coffee/{{ img }}.jpg" class="card-img" alt="item-img">
                <div class="card-img-overlay text-start d-flex flex-column justify-content-end align-items-center">
                    <h5 class="w-100 card-title open-sans mb-0 text-start">{{ name }}</h5>
                    <p class="w-100 card-text mt-0 text-start">Price at <strong>{{ price }}</strong> pesos</p>
                    <div class="row w-100 justify-content-center">
                        <button type="button" class="btn btn-primary shadow-none col-lg-2 subtract" data-price="{{ price }}"><i class="fa-solid fa-minus"></i></button>
                        <input class="col-lg-3 mx-1" type="number" min="0" value="0" data-name="{{ name }}" data-price="{{ price }}" readonly>
                        <button type="button" class="btn btn-primary shadow-none col-lg-2 add" data-price="{{ price }}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // encapsulation
    this.setTemplate = parent => {
        let cards = '';

        products.forEach(product => {
            cards += this.card 
                .replace('{{ img }}', product.name.replaceAll(' ', '-'))
                .replaceAll('{{ name }}', product.name)
                .replaceAll('{{ price }}', product.price);
        }); 

        parent.html(this.template.replace('{{ cards-template }}', cards));
    }
}