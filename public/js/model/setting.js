// (RSP) Coffee Restaurant Short Paragraphs model
"use strict";

function Setting(settings) {
    this.settings = settings;
    this.prev = 0;
    this.next = 0;

    // templates
    this.template = `<!-- Restaurant Image -->
        <div class="restaurant-item col-sm-6 col-md-6 col-lg-4 p-2" data-index="{{ index }}">
            <a href="#coffee-detail">
                <img class="h-100 w-100" src="../images/items/jpg/{{ setting }}.jpg" alt="restaurant-collection">
            </a>
        </div>
    `;

    this.details = `<!-- Detail Template -->
        <div class="col-lg-5 p-0 pe-4 text-start">
            <img class="w-100" src="../images/items/jpg/{{ setting }}.jpg" alt="detail-img">
        </div>
        <div class="col-lg-7 p-0 ps-4 text-start">
            <h3 class="open-sans">{{ name }}</h3>
            <h4 class="open-sans lead">{{ location }}</h4>
            <h5 class="open-sans lead"><i class="fa-solid fa-clock me-2"></i>Open at {{ time }}</h5>
            <p class="mt-5">{{ description }}</p>
            <h4 class="open-sans mt-5 mb-4">More Details</h4>
            <div class="row mb-5">
                {{ details-template }}
            </div>
        </div>
        <div class="next row col-12 text-start pb-5">
            <a class="col-lg-6 p-0 pb-3 pe-4" data-index="{{ prev-index }}" href="#coffee-detail">
                <img class="me-3" src="../images/items/jpg/{{ prev-setting }}.jpg" alt="detail-img">
                <h5 class="open-sans my-0">{{ prev-name }}</h5>
                <p class="open-sans my-0 lead">{{ prev-location }}</p>
                <p class="open-sans my-0 lead"><i class="fa-solid fa-clock me-2"></i>Coffee at {{ prev-time }}</p>
            </a>
            <a class="col-lg-6 p-0 pb-3 pe-4" data-index="{{ next-index }}" href="#coffee-detail">
                <img class="me-3" src="../images/items/jpg/{{ next-setting }}.jpg" alt="detail-img">
                <h5 class="open-sans my-0">{{ next-name }}</h5>
                <p class="open-sans my-0 lead">{{ next-location }}</p>
                <p class="open-sans my-0 lead"><i class="fa-solid fa-clock me-2"></i>Coffee at {{ next-time }}</p>
            </a>
        </div>
    `;

    this.info = `
        <p class="col-lg-6"><i class="fa-solid fa-circle-exclamation me-2"></i>{{ detail }}</p>
    `;

    // encapsulation
    this.setTemplate = parent => {
        this.settings.forEach((setting, index) => {
            parent.html(
                parent.html() +
                this.template
                    .replace('{{ setting }}', setting.img)
                    .replace('{{ index }}', index)
            );
        })

        return this;
    };

    // first invoke should always display the 1st element
    this.setDetails = (parent, setting, settings) => {
        let info = '';
        this.backward = setting.index - 1;
        this.forward = setting.index + 1;
        this.prev = (this.backward >= 0) ? this.backward : setting.max - 1;
        this.next = (this.forward != setting.max) ? this.forward : 0;
        this.prevElem = settings[this.prev];
        this.nextElem = settings[this.next];

        // loop settings info
        setting.details.forEach(detail => {
            info += this.info.replace('{{ detail }}', detail);
        });

        parent.html(
            this.details
                .replace('{{ setting }}', setting.img)
                .replace('{{ name }}', setting.name)
                .replace('{{ location }}', setting.location)
                .replace('{{ time }}', setting.time)
                .replace('{{ description }}', setting.description)
                .replace('{{ details-template }}', info)
                .replace('{{ prev-index }}', this.prev)
                .replace('{{ next-index }}', this.next)
                .replace('{{ prev-setting }}', this.prevElem.img)
                .replace('{{ next-setting }}', this.nextElem.img)
                .replace('{{ prev-name }}', this.prevElem.name)
                .replace('{{ next-name }}', this.nextElem.name)
                .replace('{{ prev-location }}', this.prevElem.location)
                .replace('{{ next-location }}', this.nextElem.location)
                .replace('{{ prev-time }}', this.prevElem.time)
                .replace('{{ next-time }}', this.nextElem.time)
        );

        return this;
    };
}