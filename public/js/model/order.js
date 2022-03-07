// Order Model
"use strict";

function Order(costumer) {
    this.costumer = costumer;

    // template
    this.template = `
        <!-- Costumer Template -->
        <h4>Confirmation Order</h4>
        <p class="mt-4">Costumer Name: <strong class="ms-2">{{ firstname }} {{ lastname }}</strong></p>
        <p>Costumer Email: <strong class="ms-2">{{ email }}</strong></p>
        <p>Contact Number: <strong class="ms-2">{{ contact }}</strong></p>
        <p>Costumer Address: <strong class="ms-2">{{ streetNo }} {{ street }}, {{ barangay }}, {{ city }}, {{ province }}</strong></p>
        <p>Zip Code: <strong class="ms-2">{{ zipCode }}</strong></p>

        <h4 class="mt-5 mb-4">Ordered Coffee</h4>
        <table class="w-100">
            <tr>
                <th>Coffee</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {{ products-template }}
        </table>

        <p class="mt-3 mb-5">Payment: <strong class="ms-2">{{ pay }} pesos</strong></p>
        <button type="button" class="ok btn btn-success shadow-none open-sans px-5 py-1">Order Now</button>
    `;

    this.product = `
        <!-- Products Template -->
        <tr>
            <td><p>{{ name }}</p></td>
            <td><p>{{ price }} pesos</p></td>
            <td><p>{{ quantity }}</p></td>
            <td><p>{{ total }} pesos</p></td>
        </tr>
    `;

    this.queue = ` 
        <!-- Queue Template -->   
        <div class="text-start pt-5">
            <h4>Costumer ID {{ id }}</h4>
            <p class="mt-4">Costumer Name: <strong class="ms-2">{{ firstname }} {{ lastname }}</strong></p>
            <p>Costumer Email: <strong class="ms-2">{{ email }}</strong></p>
            <p>Contact Number: <strong class="ms-2">{{ contact }}</strong></p>

            <h4 class="mt-5 mb-4">Ordered Coffee</h4>
            <table class="w-100">
                <tr>
                    <th>Coffee</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
                {{ products-template }}
            </table>

            <p class="mt-3 mb-5">Payment: <strong class="ms-2">{{ pay }} pesos</strong></p>
        </div>
    `;

    // encapsulation
    this.setTemplate = parent => {
        let product_text = '';

        this.costumer.products.forEach(product => {
            if(product.quantity != 0) {
                product_text += this.product
                    .replace('{{ name }}', product.name)
                    .replace('{{ price }}', product.price / product.quantity)
                    .replace('{{ quantity }}', product.quantity)
                    .replace('{{ total }}', product.price);
            }
        });

        parent.html(
            this.template
                .replace('{{ firstname }}', this.costumer.firstname)
                .replace('{{ lastname }}', this.costumer.lastname)
                .replace('{{ email }}', this.costumer.email)
                .replace('{{ contact }}', this.costumer.contact)
                .replace('{{ streetNo }}', this.costumer.streetNo)
                .replace('{{ street }}', this.costumer.street)
                .replace('{{ barangay }}', this.costumer.barangay)
                .replace('{{ city }}', this.costumer.city)
                .replace('{{ province }}', this.costumer.province)
                .replace('{{ zipCode }}', this.costumer.zipCode)
                .replace('{{ pay }}', this.costumer.pay)
                .replace('{{ products-template }}', product_text)
        );
    };

    this.setQueue = (parent, customers) => {

        let queue = '';
        
        customers.forEach(costumer => {

            let product_text = '';
    
            costumer.products.forEach(product => {
                if(product.quantity != 0) {
                    product_text += this.product
                        .replace('{{ name }}', product.name)
                        .replace('{{ price }}', product.price / product.quantity)
                        .replace('{{ quantity }}', product.quantity)
                        .replace('{{ total }}', product.price);
                }
            });

            queue += this.queue
                .replace('{{ id }}', costumer.id)
                .replace('{{ firstname }}', costumer.firstname)
                .replace('{{ lastname }}', costumer.lastname)
                .replace('{{ email }}', costumer.email)
                .replace('{{ pay }}', costumer.pay)
                .replace('{{ contact }}', costumer.contact)
                .replace('{{ products-template }}', product_text);
        });

        parent.html(queue);

    };
}
