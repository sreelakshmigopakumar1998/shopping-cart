
let dbconfig=require('../dbconfig/db-connect');

dbconfig.connect(function (error) {
    if (error){
        console.log('DB Connection error');
        process.exit(1);

    }else {
        console.log('Connected successfully');

        dbconfig.get().collection('product').insertMany([{
            imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
            title:'Gothic Video Game',
            description:'Awesome Game!!!!',
            price:'20'
        },{
            imagePath: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/fa/10/7c/fa107c00-d330-ce43-f581-74a8fc4a18be/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg',
            title: 'Super Mario',
            description: 'Super game!!!',
            price: '30'

        },{
            imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg',
            title: 'FortNite',
            description: 'Fantastic Game!!!',
            price: '40'
        },{
            imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
            title: 'Gothic Video Game',
            description: 'Awesome Game!!!',
            price: '20'
        },{
            imagePath: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/fa/10/7c/fa107c00-d330-ce43-f581-74a8fc4a18be/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg',
            title: 'Super Mario',
            description: 'Super game!!!',
            price: '30'
        },{
            imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg',
            title: 'FortNite',
            description: 'Fantastic Game!!!',
            price: '40'
        }
        ])
    }

});

