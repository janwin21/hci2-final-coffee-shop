// drinks section
"use strict";

// prepare document
$(document).ready(() => {

    // invisible elements
    const form = $('.form');
    const secondary = $('.secondary');
    const fill_2 = $('.fill-2');
    const coffee = $('.coffee');
    const fill_3 = $('.fill-3');
    const fill_4 = $('.fill-4');
    const confirm = $('.confirm');

    form.hide();
    secondary.hide();
    fill_2.hide();
    coffee.hide();
    fill_3.hide();
    fill_4.hide();
    confirm.hide();

    // first trigger => click the button
    $('.start').on('click', 'button', event => {
        form.removeClass('remove');
        $(event.currentTarget).parent().fadeOut(250);
        form.slideDown(250);
    });

    // second trigger => personal form
    $('.name').on('click', '.address', event => {
        $(event.currentTarget).fadeOut(250);
        secondary.slideDown(250);
        fill_2.slideDown(250);
    });

    // third trigger => address
    fill_2.on('click', '.shop', event => {
        $(event.currentTarget).fadeOut(250);
        coffee.slideDown(250);
        fill_3.slideDown(250);
    });

    // insert products to fill-3 row content
    const products = [
        {
            name: 'affogato',
            price: 478
        },
        {
            name: 'cuban coffee',
            price: 399
        },
        {
            name: 'french cafe au lait',
            price: 190
        },
        {
            name: 'maple pecan latte',
            price: 429
        },
        {
            name: 'the perfect cappuccino',
            price: 477
        },
        {
            name: 'white chocolate mocha',
            price: 979
        }
    ]

    new Product(products).setTemplate(fill_3);

    // current total
    let total = 0;

    // trigger add buttons
    fill_3.on('click', '.add', event => {
        const input = $(event.currentTarget).prev();
        total += Number.parseInt(event.currentTarget.dataset.price);
        input.val(Number.parseInt(input.val()) + 1); 

        const h5 = $(event.currentTarget)
            .parent().parent().parent().parent().parent()
            .children().last().find('h5');    
        h5.html(`Total: <strong>${total}</strong> pesos`);
    });

    // trigger subtract buttons
    fill_3.on('click', '.subtract', event => {
        const input = $(event.currentTarget).next();

        if(Number.parseInt(input.val()) > 0) {
            total -= Number.parseInt(event.currentTarget.dataset.price);
            input.val(Number.parseInt(input.val()) - 1);
        }

        const h5 = $(event.currentTarget)
            .parent().parent().parent().parent().parent()
            .children().last().find('h5');    
        h5.html(`Total: <strong>${total}</strong> pesos`);
    });
});