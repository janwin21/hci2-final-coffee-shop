// home section
"use strict";

// prepare document
$(document).ready(() => {

    // manipulate the components from (RSP) Coffee Restaurant Short Paragraphs
    const rspContainer = $('.rsp .container');
    const rspCollection = [
        [
            {
                icon: '<i class="fa-solid fa-hand-fist me-2"></i>',
                title: 'Physical Performance',
                description: 'Have a cup of black coffee about an hour before workout and your performance can improve by 11-12%. Caffeine increases adrenaline levels in your blood. Adrenaline is your body’s “fight or flight” hormone which helps you to prepare for physical exertion.'
            },
            {
                icon: '<i class="fa-solid fa-weight-hanging me-2"></i>',
                title: 'Lose Weight',
                description: 'Coffee contains magnesium and potassium, which helps the human body use insulin, regulating blood sugar levels and reducing your craving for sugary treats and snacks.'
            },
            {
                icon: '<i class="fa-solid fa-fire me-2"></i>',
                title: 'Burn Fats',
                description: 'Caffeine helps fat cells break down body fat and use it as fuel for training.'
            },
            {
                icon: '<i class="fa-solid fa-circle-exclamation me-2"></i>',
                title: 'Focus & Alert',
                description: 'Moderate caffeine intake, 1-6 cups a day, helps you focus and improves your mental alertness.'
            },
            {
                icon: '<i class="fa-solid fa-skull-crossbones me-2"></i>',
                title: 'Low Risk of Death',
                description: 'Studies have shown that coffee drinker’s overall risk of premature death is 25% lower than of those who don’t drink coffee.'
            },
            {
                icon: '<i class="fa-solid fa-bolt-lightning me-2"></i>',
                title: 'Reduce Stroke Risk',
                description: 'Reasonable consumption of coffee (2–4 cups a day) is associated with lower risk of stroke.'
            }
        ],
        [
            {
                icon: '<i class="fa-solid fa-disease me-2"></i>',
                title: 'Reduce Cancer Risk',
                description: 'One study has shown that coffee may decrease the risk of developing prostate cancer in men by 20 %, and endometrial cancer in women by 25 %. People in the test group drank four cups of coffee a day. Caffeine may also prevent developing of basal cell carcinoma, the most common type of skin cancer.'
            },
            {
                icon: '<i class="fa-solid fa-pills me-2"></i>',
                title: 'Parkinson’s disease',
                description: 'Studies have shown that regular coffee drinking decreases risk of Parkinson’s disease by 25 %. There’s evidence that coffee causes activity in the part of the brain affected by Parkinson’s.'
            },
            {
                icon: '<i class="fa-solid fa-umbrella me-2"></i>',
                title: 'Body Protection',
                description: 'Coffee contains a lot of antioxidants, that work as little warriors fighting and protecting against free radicals within your body.'
            },
            {
                icon: '<i class="fa-solid fa-bacterium me-2"></i>',
                title: 'Diabetes',
                description: 'Caffeine decreases your insulin sensitivity and impairs glucose tolerance, therefore reduces your risk of type 2 diabetes.'
            },
            {
                icon: '<i class="fa-solid fa-brain me-2"></i>',
                title: 'Brain Protection',
                description: 'High caffeine levels in your blood reduce the risk of Alzheimer disease. It also lowers risk of dementia.'
            },
            {
                icon: '<i class="fa-solid fa-face-smile-beam"></i>',
                title: 'Good Mood',
                description: 'Caffeine stimulates the central nervous system and boosts production of neurotransmitters like serotonin, dopamine, and noradrenaline, which elevate your mood. Two cups of coffee a day prevents risk of suicide by 50 %.'
            }
        ]
    ];

    // loop the collection and modify the RSP content
    rspCollection.forEach(list => {
        new RSPComponent(list).setTemplate(rspContainer);
    });

    // manipulate the components of Restaurant Collections
    const restaurant = $('.restaurant #collection');
    const places = $('.restaurant .details');
    const settings = [
        { 
            name: 'Bad Cafe',
            location: 'Legaspi Village, Makati City',
            time: '10am – 5pm',
            img: 'coffee-item-1', 
            description: 'One of the best independent cafes in the area and in the metro. The place is chill and quiet, it has a minimalist zen design, perfect for a relaxing cup of espresso drinks. The staff is the best, very friendly and attentive. Their barista Jed is an artist when it comes to latte art, just look at the pictures. You should visit and try Bad Cafe (it’s named after the initials of the first names of the couple who own the place). Their coffees taste like and at par with Arabica and Tobys. You should try their rice meals too, it’s well prepared everytime and the taste is consistent.',
            details: [
                'Breakfast',
                'Takeaway Available',
                'No Alcohol Available',
                'Home Delivery',
                'Indoor Seating',
            ]
        },
        { 
            name: 'DC Coffee House',
            location: 'Salem Complex, Ninoy Aquino Airport Area, Pasay City',
            time: '9am – 6pm',
            img: 'coffee-item-2', 
            description: 'Very unique but small outlet of DC Coffee in front of terminal 4 NAIA .. due to a lot of buzz and aaah this morning.. my urge of gettin a frappe was very intense.. and i saw this one.. n8ce job too many options. Listed in front of the main door hanging in the wall.. nice luv my banna strawberry frappe.. next tym iLL there pastry.. ♡♡♡♡♡',
            details: [
                'Breakfast',
                'Outdoor Seating',
                'No Alcohol Available',
                'Home Delivery',
                'Wifi'
            ]
        },
        { 
            name: 'Cafe Society',
            location: 'City of Dreams Manila, Entertainment City, Parañaque City',
            time: '8am – 11pm',
            img: 'coffee-item-3', 
            description: 'I’ve only tried their Ice Creams and they’re really good. Not too sweet, which I like. It’s more expensive than regular ice creams but I think it’s reasonably priced. Absolutely horrendous customer service. Staff acted like the cost of the food came out of their pocket. Wouldn’t even look me in the eye and ignored me. Played at the casino and received a food voucher worth 1k which I decided to spend at this café. Turns out 1,100 pesos can give you two sandwiches with tiny bits of meat and a dab of mayonnaise. Save your money and time and walk into the next restaurant that catches your eye.',
            details: [
                'Beer',
                'Indoor Seating',
                'Table booking recommended',
                'Wifi'
            ]
        },
        { 
            name: 'Aladdin cafe',
            location: 'Domestic road pasay, Pasay 1300',
            time: '11am – 7pm',
            img: 'coffee-item-4', 
            description: 'Craving for a Good affordable yummy meal from the best choosen Mediterranean and middle Eastern dishes. We will he happy to serve you and you are always welcome at the Aladdin cafe. We also serve shisha',
            details: [
                'Indoor Seating',
                'Table booking recommended',
                'No Alcohol Available',
                'Home Delivery',
                'Wifi',
                'Breakfast'
            ]
        },
        { 
            name: 'Caffeinism',
            location: '12pm - 6pm',
            time: '12th-7th St. Villamor, Pasay City',
            img: 'coffee-item-5', 
            description: 'A vibrant alfresco-style Coffeeshop serving specialty coffee, yummy Frappenismo, healthy smoothies, delicious pizza & burgers snacks, dessert & pastries yet affordable. Summer is Here! Bring home the #Frappenismo cravings you want with our Strawberry Cream. Order online at www.CaffeinismInternational.com and we will deliver right in your doorsteps! Available in Grande & Venti+ sizes within NCR.',
            details: [
                'Strawberry',
                'Milktea',
                'Dessert',
                'Craving'
            ]
        },
        { 
            name: 'IVegan Restaurant',
            location: 'San Antonio, Urdaneta, Bel- Air',
            time: '10am – 9pm',
            img: 'coffee-item-6', 
            description: 'Looking for food delivery in Makati? Not everybody knows or has the time to prepare tasty food. When you want to get served like a king then food delivery from iVegan Restaurant will be your best choice. Simply select "Delivery" at the checkout screen and we hope you\'ll appreciate our food delivery service.',
            details: [
                'Bibimbap',
                'Delivery Fee',
                'Special Offers',
                'GCash Qr Code',
                'Social Media',
                'Home Delivery'
            ]
        },
        { 
            name: 'Seattles Best Coffee',
            location: 'Manila Domestic Passenger Terminal, Pasay',
            time: '2:30am – 9am',
            img: 'coffee-item-7', 
            description: 'Definitely not Seattles best coffee, which youll know if youve been to Seattle. Id rank it a lot closer to the bottom hah.This location is inside the terminal 4 departures area. At least from the hour that Ive been sitting at the airport, they seem to be crowded all the time.The line moves VERY slow, and Im not sure why.The coffee is meh, as is at other Seattles bests. I got a chicken pie, which was filling, but not particularly yummy.Not a lot of options at T4 departures. So this might be your best bet. But if youre in a time crunch, you might wanna try another coffee shop.',
            details: [
                'Special Offers',
                'GCash Qr Code',,
                'Dessert',
                'Craving'
            ]
        },
        { 
            name: 'UCC Café Terrace',
            location: 'Resorts World Manila, Newport City, Pasay City',
            time: '11am – 12am',
            img: 'coffee-item-8', 
            description: 'Food - High-end coffee shop. Offers light to heavy meals too, most of which are Japanese inspired. Has elaborate menu, very helpful especially for first time customers. Overall dining-in experience was good. Will definitely go back! Place - Cozy, fancy, well-lit. Wait staff service is commendable. Dining-in guidelines under quarantine protocols are observed. Price - Average to high.',
            details: [
                'Wine and Beer',
                'Has power outlets',
                'Table booking recommended',
                'Indoor Seating',
                'Wifi',
                'All Day Breakfast'
            ]
        },
        { 
            name: 'Dean & DeLuca',
            location: 'Rockwell, Makati City',
            time: '8am – 8pm',
            img: 'coffee-item-9', 
            description: `Place is cozy and offers so much on the menu - coffee, tea, probiotic drinks, custom soda, pizzas, bread, pasta, among many others. The food is good, the coffee great and beverage options were adequate. I also bought some boxed teas which I am enjoying right now as I write this (try them, flavor wise value for money).<br><br>
            
            During our vistit, we had sandwiches - Cubano and Pastrami. The Pastrami had a hefty serving of, well, pastrami, cracked black peppers giving a nice lift to the crispy toasted sourdough slices it was housed in. A classic sandwich for those looking for something simple but flavorful. The Cubano was more complex in flavor, the mustard, pork, ham, pickles with a slight kick from jalapenos livening up my palate. Not traditional as it was also served between sourdough bread slices, but the bread was delicious and perfect in texture, so easily forgiven.<br><br>
            
            Service was spotty in terms of product knowledge, but perhaps the server was new. Other than that, overall customer experience was good.`,
            details: [
                'Breakfast',
                'Home Delivery',
                'Takeaway Available',
                'Full Bar Available',
                'Restroom available',
                'Outdoor Seating',
                'Table booking recommended',
                'All Day Breakfast',
                'Indoor Seating',
                'Paid Parking',
                'Wifi',
                'Desserts and Bakes'
            ]
        },
        { 
            name: 'Lola Cafe',
            location: 'Tomas Morato, Quezon City',
            time: '10am – 7pm',
            img: 'coffee-item-10', 
            description: `Just a disclaimer, the servings in the pictures are not the ala carte or regular serving since this is our food tasting session. Our civil wedding will be held here on December.<br><br>

            Everything is so good. We invited 2 of our good friends and they loved every dish that we tried. We specially loved the tartufo and the kesong puti cheesecake we even ordered take out. I asked my fiance what he thinks and he said “yun barbecue” (which I sadly wasn’t able to taste). I was worried. Yun pala maliit daw, nabitin haha I just told him na starter lang kasi yun so understandbly di cya dapat kalakihan para di nakakabusog hehe. Ms.Eula is very kind and very responsive to my email. Staff were polite as well. Thanks guys!`,
            details: [
                'Home Delivery',
                'Takeaway Available',
                'Full Bar Available',
                'Restroom available',
                'Outdoor Seating',
                'Table booking recommended',
                'Indoor Seating',
                'Full Bar Available'
            ]
        },
        { 
            name: 'Afters Espresso & Desserts',
            location: 'Tomas Morato, Quezon City',
            time: '11am – 7pm',
            img: 'coffee-item-11', 
            description: 'Their molten lava cake is the bomb! We had it for take out and heated in the microwave as instructed. It felt straight out of the oven afterwards. Looking forward to try the other flavors!',
            details: [
                'Home Delivery',
                'Restroom available',
                'All Day Breakfast',
                'Indoor Seating',
                'Takeaway Available',
                'Wifi',
                'Free Parking',
                'Outdoor Seating',
                'No Alcohol Available'
            ]
        },
        { 
            name: 'Yardstick Coffee',
            location: 'Legaspi Village, Makati City',
            time: '9am – 4pm',
            img: 'coffee-item-12', 
            description: 'Not exactly into coffee like a normal human but I did get an iced mocha and it was true to its taste and name. My friend also ordered one of their specialty African brews that time and although it wasn’t my type, my coffee loving friend absolutely enjoyed it down to its last drop. I love the warm and relaxing ambiance as well and watching people do their own crafts w coffee.',
            details: [
                'Breakfast',
                'Takeaway Available',
                'Beer',
                'Restroom available',
                'Craft Beer',
                'Indoor Seating',
                'No Parking Available',
                'Wifi',
                'All Day Breakfast'
            ]
        }
    ];

    // loop the collections to manipulate the Restaurant Collections
    const restaurant_obj = new Setting(settings).setTemplate(restaurant).setDetails(places, { 
        ...settings[0], index: 0 , max: settings.length
    }, settings);

    // trigger prev & next
    places.on('click', '.next .col-lg-6', event => {
        const index = Number.parseInt($(event.currentTarget).attr('data-index'));
        restaurant_obj.setDetails(places, { 
            ...settings[index], index: index , max: settings.length
        }, settings);
    })

    // trigger image
    restaurant.on('click', '.restaurant-item', event => {
        const index = Number.parseInt($(event.currentTarget).attr('data-index'));
        restaurant_obj.setDetails(places, { 
            ...settings[index], index: index , max: settings.length
        }, settings);
    })

});