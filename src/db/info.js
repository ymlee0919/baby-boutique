const INFO = {
    "categories": [
        {
            "id" : 1,
            "name": "Ropita para hembra",
			"description": "Batas finas, juegos de salón, blusas, shores y más...",
            "url": "hembra",
            "img": "girld.jpg",
            "children" : [
                { 'id' : 1.1, 'name' : 'Bata fina', 'url' : 'bata-fina', 'img': 'bata-fina.jpg', 'price': 1000, 'description' : 'Bata fina para niña recién nacida'},
				{ 'id' : 1.5, 'name' : 'Juego de salón', 'url' : 'juego-salon', 'img': 'juego-salon.jpg', 'price': 1000, 'description' : 'Juego para sacar la niña del salón de parto'},
				{ 'id' : 1.4, 'name' : 'Monito', 'url' : 'mono', 'img': 'mono-hembra.jpg', 'price': 1300, 'description' : 'Mono para niña entre 1 y 3 años'},
				{ 'id' : 1.2, 'name' : 'Blusa', 'url' : 'blusa', 'img': 'blusa.jpg', 'price': 900, 'description' : 'Blusa para niña entre 1 y 3 años'},
				{ 'id' : 1.3, 'name' : 'Short', 'url' : 'short', 'img': 'short-hembra.jpg', 'price': 900, 'description' : 'Short para niña entre 1 y 3 años'},
				{ 'id' : 1.6, 'name' : 'Juego de bebita', 'url' : 'juego-bebita', 'img': 'juego-bebita.jpg', 'price': 1300, 'description' : 'Juego para niña de 10 meses a 2 años'},
				{ 'id' : 1.9, 'name' : 'Juego de short y blusa', 'url' : 'juego', 'img': 'juego-hembra.jpg', 'price': 1700, 'description' : 'Juego de short y blusa para niña entre 1 y 3 años',
					'items' : [1.2, 1.3]
				},

            ]
        },
        {
            "id" : 2,
            "name": "Ropita para varón",
			"description": "Juegos de hilo, juegos de salón, pullover y shores para su niño.",
            "url": "varon",
            "img": "boy.jpg",
            "children" : [
                { 'id' : 2.1, 'name' : 'Juego de hilo', 'url' : 'juego-hilo', 'img': 'juego-hilo.jpg', 'price': 1300, 'description' : 'Juego de hilo para niño recién nacido y hasta 3 meses'},
				{ 'id' : 2.5, 'name' : 'Juego de salón', 'url' : 'juego-salon', 'img': 'juego-salon.jpg', 'price': 1000, 'description' : 'Juego para sacar al niño del salón de parto'},
				{ 'id' : 2.2, 'name' : 'Camiseta', 'url' : 'camiseta', 'img': 'camiseta.jpg', 'price': 750, 'description' : 'Camiseta para niño de 1 a 3 años'},
				{ 'id' : 2.4, 'name' : 'Short', 'url' : 'short', 'img': 'short-varon.jpg', 'price': 900, 'description' : 'Short para niño de 1 a 3 años'},
				{ 'id' : 2.3, 'name' : 'Pullover', 'url' : 'pullover', 'img': 'pullover.jpg', 'price': 900, 'description' : 'Pullover para niño de 1 a 3 años'},

				{ 'id' : 2.9, 'name' : 'Juego de short y pullover', 'url' : 'juego', 'img': 'juego-varon.jpg', 'price': 1700, 'description' : 'Juego de short y pullover para niño de 1 a 3 años',
					'items':[2.3, 2.4]
				},

            ]
        },
        {
            "id" : 3,
            "name": "Accesorios",
			"description": "Pañales finos y juegos de cuna",
            "url": "accesorios",
            "img": "utils.jpg",
            "children" : [
                { "id" : 3.1, "name" : "Pañal fino", "url" : "pannal", "img": "pannal.jpg", "price": 1200, "description" : "Pañal fino con adorno"},
				{ "id" : 3.2, "name" : "Juego de cuna", "url" : "juego-cuna", "img": "juego-cuna.jpg", "price": 1400, "description" : "Sabana + 3 fundas"}
            ]
        }
    ],
    "products": [
        {"id" : 1, "category": 1.1, "active": true, "img": "Bata1.png", "name": "Bata blanca"},
		{"id" : 2, "category": 1.1, "active": true, "img": "Bata2.png", "name": "Bata blanca con adornos negros"},
		{"id" : 3, "category": 1.1, "active": true, "img": "Bata3.png", "name": "Bata blanca y rosada"},
		{"id" : 4, "category": 1.1, "active": true, "img": "Bata4.png", "name": "Bata blanca y amarilla"},
		{"id" : 5, "category": 1.1, "active": true, "img": "Bata5.png", "name": "Bata rosada"},
		{"id" : 6, "category": 1.1, "active": true, "img": "Bata6.png", "name": "Bata roja"},
		{"id" : 7, "category": 1.1, "active": true, "img": "Bata7.png", "name": "Bata blanca y azul"},
		{"id" : 8, "category": 1.1, "active": true, "img": "Bata8.png", "name": "Bata verde"},
		{"id" : 9, "category": 1.1, "active": true, "img": "Bata9.png", "name": "Bata blanca con adornos rojos"},
		{"id" : 10, "category": 1.1, "active": true, "img": "Bata10.png", "name": "Bata amarilla"},
		{"id" : 11, "category": 1.2, "active": true, "img": "Blusa1.png", "name": "Blusa roja de mangas"},
		{"id" : 12, "category": 1.2, "active": true, "img": "Blusa2.png", "name": "Blusa roja de cordones"},
		{"id" : 13, "category": 1.2, "active": true, "img": "Blusa3.png", "name": "Blusa negra de lazo"},
		{"id" : 14, "category": 1.2, "active": true, "img": "Blusa4.png", "name": "Blusa negra de cordones"},
		{"id" : 15, "category": 1.2, "active": true, "img": "Blusa5.png", "name": "Blusa blanca de mangas"},
		{"id" : 16, "category": 1.2, "active": true, "img": "Blusa4.png", "name": "Blusa de mangas color mamey rosado"},
		{"id" : 17, "category": 1.3, "active": true, "img": "ShortHembra1.png", "name": "Short blanco de niña"},
		{"id" : 18, "category": 1.3, "active": true, "img": "ShortHembra2.png", "name": "Short anaranjado de niña"},
		{"id" : 19, "category": 1.3, "active": true, "img": "ShortHembra3.png", "name": "Short rojo con cordones para niña"},
		{"id" : 21, "category": 1.4, "active": true, "img": "MonoHembra1.png", "name": "Mono negro estampado para niña"},
		{"id" : 22, "category": 1.4, "active": true, "img": "MonoHembra2.png", "name": "Mono amarillo claro estampado para niña"},
		{"id" : 25, "category": 1.5, "active": true, "img": "JuegoSalon1.png", "name": "Juego de salón azul claro estampado"},
		{"id" : 27, "category": 1.5, "active": true, "img": "JuegoSalon2.png", "name": "Juego de salón azul claro estampado"},
		{"id" : 28, "category": 1.6, "active": true, "img": "JuegoBebita1.png", "name": "Juego de bebita rojo"},
		{"id" : 29, "category": 1.6, "active": true, "img": "JuegoBebita2.png", "name": "Juego de bebita amarillo"},

		{"id" : 27, "category": 2.1, "active": true, "img": "JuegoVaron.png", "name": "Juego de hijo para varón"},
		{"id" : 28, "category": 2.2, "active": true, "img": "Camiseta1.png", "name": "Camiseta estampada para niños"},
		{"id" : 29, "category": 2.2, "active": true, "img": "Camiseta2.png", "name": "Camiseta blanca para niños"},
		{"id" : 30, "category": 2.3, "active": true, "img": "PulloverVaron1.png", "name": "Pullover amarillo para varón"},
		{"id" : 31, "category": 2.3, "active": true, "img": "PulloverVaron2.png", "name": "Pullover blanco para varón"},
		{"id" : 32, "category": 2.3, "active": true, "img": "PulloverVaron3.png", "name": "Pullover color mamey para varón"},
		{"id" : 33, "category": 2.3, "active": true, "img": "PulloverVaron4.png", "name": "Pullover verde para varón"},
		{"id" : 34, "category": 2.3, "active": true, "img": "PulloverVaron5.png", "name": "Pullover verde para varón"},
		{"id" : 35, "category": 2.3, "active": true, "img": "PulloverVaron6.png", "name": "Pullover amarillo claro para varón"},
		{"id" : 36, "category": 2.4, "active": true, "img": "ShortVaron1.png", "name": "Short azul de listas blancas para varón"},
		{"id" : 37, "category": 2.4, "active": true, "img": "ShortVaron2.png", "name": "Short naranja de listas negras para varón"},
		{"id" : 38, "category": 2.4, "active": true, "img": "ShortVaron3.png", "name": "Short naranja de listas blancas para varón"},
		{"id" : 39, "category": 2.4, "active": true, "img": "ShortVaron4.png", "name": "Short largo rojo para varón"},
		{"id" : 40, "category": 2.4, "active": true, "img": "ShortVaron5.png", "name": "Short largo naranja para varón"},
		{"id" : 41, "category": 2.4, "active": true, "img": "ShortVaron6.png", "name": "Short largo azul para varón"},
		{"id" : 42, "category": 2.5, "active": true, "img": "JuegoSalon1.png", "name": "Juego de salón azul claro estampado"},
		{"id" : 43, "category": 2.5, "active": true, "img": "JuegoSalon2.png", "name": "Juego de salón azul claro estampado"},

		{"id" : 45, "category": 3.1, "active": true, "img": "Pannal1.png", "name": "Pañal rosado"},
		{"id" : 46, "category": 3.1, "active": true, "img": "Pannal2.png", "name": "Pañal rojo"},
		{"id" : 47, "category": 3.1, "active": true, "img": "Pannal3.png", "name": "Pañal azul"},
		{"id" : 48, "category": 3.1, "active": true, "img": "Pannal4.png", "name": "Pañal blanco"},
		{"id" : 49, "category": 3.1, "active": true, "img": "Pannal5.png", "name": "Pañal azul"},
		{"id" : 50, "category": 3.1, "active": true, "img": "Pannal6.png", "name": "Pañal amarillo"},
		{"id" : 51, "category": 3.1, "active": true, "img": "Pannal7.png", "name": "Pañal blanco con adornos azules"},
		{"id" : 52, "category": 3.2, "active": true, "img": "JuegoCuna1.png", "name": "Juego de cuna blanco"},
		{"id" : 53, "category": 3.2, "active": true, "img": "JuegoCuna2.png", "name": "Juego de cuna de fresas"},
		{"id" : 54, "category": 3.2, "active": true, "img": "JuegoCuna3.png", "name": "Juego de cuna rojo de osito"},
		{"id" : 55, "category": 3.2, "active": true, "img": "JuegoCuna4.png", "name": "Juego de cuna amarillo clarito"},
		{"id" : 56, "category": 3.2, "active": true, "img": "JuegoCuna5.png", "name": "Juego de cuna rosado de corazones"},
		{"id" : 57, "category": 3.2, "active": true, "img": "JuegoCuna6.png", "name": "Juego de cuna rojo de carritos"},
		{"id" : 58, "category": 3.2, "active": true, "img": "JuegoCuna7.png", "name": "Juego de cuna de mariposas"}
    ]
}

export default INFO;