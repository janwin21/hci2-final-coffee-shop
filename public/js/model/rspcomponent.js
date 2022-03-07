// (RSP) Coffee Restaurant Short Paragraphs model
"use strict";

// !!! maximum of 6 elements
function RSPComponent(list) {
    this.list = list; // icon, title, description

    // template
    this.template = `<!-- RSP Template -->
        <div class="row rsp-template py-5">
            {{ main-section }}
            <div class="col-lg-6">
                <section class="row">
                    {{ side-section }}
                </section>
            </div>
        </div>
    `;

    this.main = `<!-- Main Section -->
        <main class="col-lg-6 pe-5 text-start">
            <h4 class="open-sans lead text-dark mb-4">
                {{ icon-0 }}
                {{ title-0 }}
            </h4>
            <p class="open-sans">{{ description-0 }}</p>
            <h4 class="open-sans lead text-dark mt-5 mb-4">
                {{ icon-1 }}
                {{ title-1 }}
            </h4>
            <p class="open-sans">{{ description-1 }}</p>
        </main>
    `;

    this.side = `<!-- Side Section -->
        <div class="col-lg-6 ps-5 pe-0 pb-2 text-start">
            <h4 class="open-sans lead text-dark mb-2">
                {{ side-icon }}
                {{ side-title }}
            </h4>
            <p class="open-sans pb-4">{{ side-description }}</p>
        </div>
    `;

    // encapsulation
    this.setTemplate = parent => {
        let main = this.main;
        let side = '';

        this.list.forEach((item, index) => {
            if(index <= 1) {
                main = main
                    .replace(`{{ icon-${index} }}`, item.icon)
                    .replace(`{{ title-${index} }}`, item.title)
                    .replace(`{{ description-${index} }}`, item.description);
            } else {
                side += this.side
                    .replace('{{ side-icon }}', item.icon)
                    .replace(`{{ side-title }}`, item.title)
                    .replace(`{{ side-description }}`, item.description);
            }
        });

        parent.html(
            parent.html() +
            this.template
                .replace('{{ main-section }}', main)
                .replace('{{ side-section }}', side)
        );
    };
}