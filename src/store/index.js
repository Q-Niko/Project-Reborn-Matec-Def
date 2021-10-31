import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cart:[],
    newProduct:6,
    onUser:"Ospite",
    
    wishList:[],

    products: [
      {
        id: 1,
        productCode:"code-123-1",
        name: "Lampada",
        nameImage: "./img_product/segnaposto_principale.jpg",
        imgV1:"./img_product/segnaposto_V1.jpg",
        imgV2:"./img_product/segnaposto_V2.jpg",
        imgV3:"./img_product/segnaposto_V3.jpg",
        imgV4:"./img_product/segnaposto_V4.jpg",
        shortInfo:"Una bellissima lampada Vintage adatta ad arredare la tua scrivania e le tue serate in studio.",
        description: "Con questa bella lampada da terra, ad esempio, si può progettare con stile l'area di seduta di un salotto arredato in stile antico e, inoltre, si può creare una confortevole illuminazione ambientale. Telaio e base di Lincolndale convincono con una lavorazione dettagliata e brillano in tonalità bronzo scuro. La tonalità di lino di colore naturale è leggermente strutturata e non solo emette luce verso l'alto e verso il basso, ma la lascia anche brillare delicatamente attraverso il lino.",
        addInfo: [
          
          "Materiale: Legno/Tessuto",
          "Peso:Leggero",
          "Stile:Vintage",
          "Status:Nuovo",
          

          ],
        alt:"alt_prodotto_lampada_reborn",
        comments:["Ottima!","Bellissima!"],
        seller: {
          idUser:1,
          name: "Luca",
          surname:"Bianchi",
          role: "Antiquario",
          rating: 5,
        },
        price:1000,
        facilities:"Rateizzabile",
        location: {
          nation: "Italia",
          city: "Novara",
        },
        available: "true",
        inventory: 10,
        initialInventory:10,
        published: true,
        special:false,
      },
      {
        id: 2,
        productCode:"code-123-2",
        name: "Bollitore",
        nameImage: "./img_product/segnaposto_principale.jpg",
        imgV1:"./img_product/segnaposto_V1.jpg",
        imgV2:"./img_product/segnaposto_V2.jpg",
        imgV3:"./img_product/segnaposto_V3.jpg",
        imgV4:"./img_product/segnaposto_V4.jpg",
        shortInfo:"Bellissima Bollitore da the.",
        description: "descrizione-prodotto-bollitore-reborn",
        addInfo: [
          
          "Materiale: metallo/Plastica",
          "Peso:Leggero",
          "Stile:Moderno",
          "Status:Nuovo",
          

          ],
        alt:"alt_prodotto_bollitore_reborn",
        comments:["Suplime!", "Stiloso!", "Fantastico!"],
        seller: {
          idUser:2, 
          name: "Andrea",
          surname:"Verdi",
          role: "Artigiana",
          rating: 4,
        },
        price: 500,
        facilities:"Rateizzabile",
        location: {
          nation: "Italia",
          city: "Nuoro",
        },
        available: "true",
        inventory: 10,
        initialInventory:10,
        published: true,
        special:false,
      },

      {
        id: 3,
        productCode:"code-123-3",
        name: "Piatti",
        nameImage: "./img_product/segnaposto_principale.jpg",
        imgV1:"./img_product/segnaposto_V1.jpg",
        imgV2:"./img_product/segnaposto_V2.jpg",
        imgV3:"./img_product/segnaposto_V3.jpg",
        imgV4:"./img_product/segnaposto_V4.jpg",
        shortInfo:"Bellissimi piatti per cene rustiche.",
        description: "descrizione-prodotto-piatti-reborn",
        addInfo: [
          
          "Materiale: Ceramica",
          "Peso:Leggeri",
          "Stile:Rustico",
          "Status:Usati",
          

          ],
        alt:"alt_prodotto_piatti_reborn",
        comments:["T-Suplimei!", "T-Stilosi!", "T.Santastici!"],
        seller: {
          idUser:3, 
          name: "Silvio",
          surname:"Grigis",
          role: "Commerciante",
          rating: 2,
        },
        price: 100,
        facilities:"Rateizzabile",
        location: {
          nation: "Italia",
          city: "Varese",
        },
        available: "true",
        inventory: 100,
        initialInventory:100,
        published: true,
        special:false,
      },
      {
        id: 4,
        productCode:"code-123-4",
        name: "Porta Ombrelli",
        nameImage: "./img_product/segnaposto_principale.jpg",
        imgV1:"./img_product/segnaposto_V1.jpg",
        imgV2:"./img_product/segnaposto_V2.jpg",
        imgV3:"./img_product/segnaposto_V3.jpg",
        imgV4:"./img_product/segnaposto_V4.jpg",
        shortInfo:"Portaombrelli per nottate spaventose.",
        description: "descrizione-prodotto-portaombrelli-reborn",
        addInfo: [
          
          "Materiale: Metallo/Tessuto",
          "Peso:Leggero",
          "Stile:Moderno",
          "Status:Nuovo",
          

          ],
        alt:"alt_prodotto_portaombrelli_reborn",
        comments:["C-Suplime!", "C-Stilosa!", "C-Fantastica!"],
        seller: {
          idUser:4, 
          name: "Francesco",
          surname:"Lanza",
          role: "Amatore",
          rating: 5,
        },
        price: 700,
        facilities:"Nessuna",
        location: {
          nation: "Italia",
          city: "Ancona",
        },
        available: "true",
        inventory: 5,
        initialInventory:5,
        published: true,
        special:true,
      },

      {
        id: 5,
        productCode:"code-123-5",
        name: "Sedia",
        nameImage: "./img_product/segnaposto_principale.jpg",
        imgV1:"./img_product/segnaposto_V1.jpg",
        imgV2:"./img_product/segnaposto_V2.jpg",
        imgV3:"./img_product/segnaposto_V3.jpg",
        imgV4:"./img_product/segnaposto_V4.jpg",
        shortInfo:"Sgabello da per il vostro bar casalingo.",
        description: "descrizione-prodotto-sgabello-reborn",
        addInfo: [
          
          "Materiale: Legno/Tessuto",
          "Peso:Pesante",
          "Stile:Retrò",
          "Status:Usato",
          

          ],
        alt:"alt_prodotto_sgabello_reborn",
        comments:["Suplime!", "Stilosa!", "Fantastica!"],
        seller: {
          idUser:5, 
          name: "Giulia",
          surname:"Biondi",
          role: "Collezionista",
          rating: 2,
        },
        price: 200,
        Facilities:"Spedizione Gratuita",
        location: {
          nation: "Italia",
          city: "Milano",
        },
        available: "true",
        inventory: 1000,
        initialInventory:1000,
        published: true,
        special:true,
      },


    ],

    users: [ {
     
     idUser:1,
     name:"Alessandro",
     surname:"Rossi",
     email:"ale.rossi@email.com",
     role:"shopper",
     rating:2,
  
    },
    {
     
      idUser:2,
      name:"Mauro",
      surname:"Neri",
      email:"mauro.neri@email.com",
      role:"shopper",
      rating:4,
   
     },
    
    ],


    listNewletters: ["mail@reborn.it", "mail2@reborn.it"],

    teamReborn:  [{

    idTeam:1,
    name:"Nicola",
    surname:"Quadrelli",
    img:"img_team/reborn_nicola.jpeg",
    email:"nicola@mymail.me",
    biography:"La storia di Nicola....Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum diam metus, sit amet aliquet elit volutpat sit amet. Duis dictum maximus nisl. Maecenas id quam non leo volutpat porta. Phasellus in convallis nunc. Phasellus accumsan turpis laoreet, varius ex a, consequat enim. Cras laoreet, metus vitae eleifend gravida, elit velit accumsan sem, at convallis nulla diam at felis. Aliquam non turpis velit. Morbi ac facilisis metus. Fusce finibus dolor sed sapien faucibus, sed feugiat enim sodales.",
    city:"Novara",
    role:"Back-End Developer"
    },

    { 
    idTeam:2,
    name:"Paola",
    surname:"Fois",
    img:"img_team/reborn_paola.jpeg",
    email:"paola@mymail.me",
    biography:"La storia di Paola....Pellentesque egestas et odio vitae bibendum. Cras sollicitudin ornare erat ac tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam porta placerat augue eget eleifend. In eget dictum purus, in viverra tellus. Praesent id eros nunc. Sed mattis molestie bibendum. Donec ornare id neque in maximus. Sed semper erat vel lorem interdum sollicitudin. Nam nisl elit, porttitor id justo at, malesuada luctus ipsum. Maecenas tortor nibh, aliquet quis erat sit amet, dignissim suscipit ipsum. ",
    city:"Nuoro",
    role:"Media Manager - ReBorn Design"
    },
    
    {
    idTeam:3,
    name:"Elena",
    img:"img_team/reborn_elena.jpeg",
    surname:"Gorini",
    email:"elena@mymail.me",
    biography:"La storia di Elena....Aliquam rhoncus metus eu blandit maximus. Praesent eleifend suscipit dolor id commodo. Nullam quis libero ex. In hac habitasse platea dictumst. Cras ut dui pulvinar, efficitur erat ac, placerat sem. Nullam elementum justo eu lacus efficitur scelerisque. Donec a rhoncus arcu. Donec blandit lorem vel mauris consequat, nec egestas augue interdum. Nullam posuere tincidunt nunc, vel ornare arcu pellentesque et. Vivamus vitae vestibulum leo. Maecenas venenatis egestas velit.",
    city:"Torino",
    role:"Account manager - ReBorn Design."
    }
  ],


  },
  mutations: {

    /* Aggiunge Prodotto */

    addNewProduct: function (state, product) {
      product.id = state.newProduct;
      state.newProduct++;
      state.products.push(product);
    },

    /* fine */

    reduceInventory: function (state, index) {  
    state.products[index].inventory = state.products[index].inventory -1


    },

    /* fine */


/*Ripristino l'inventario */
restoreStock: function(state, index) { return state.products[index].inventory = state.products[index].initialInventory ;},

    /* fine */

    /* aggiunge mail */

    addNewMail: function (state, mail) {
      
      
      state.listNewletters.push(mail);
    },

    /* fine*/

     /* aggiunge nome alla whish */

     pushWish: function (state, name) {
     
      
      state.wishList.push(name);
    },

    /* fine*/
    
  },
  actions: {
  },
  modules: {
  },
  getters: {

    /*Prendo l'array di "products" da usare all'interno dei componenti [getters] */ 
    getProducts: function(state) { return state.products;},

    /*Prendo l'array di "cart" da usare all'interno dei componenti [getters]*/ 
    getCart: function(state) { return state.cart;},

    /*Prendo l'array di "user" da usare all'interno dei componenti/view [getters] */ 
    getUser: function(state) { return state.users;},

    /*Prendo "teamReborn" da usare per simulare il log in e i cambi di stato relativi */ 
    getLoggedUser: function(state) { return state.teamReborn;},

    /* Prende il valore di "OnUser" da usare nella Navbar */

    getOnline: function(state) { return state.onUser;},

    /* Prende il valore di "listNewletters" da usare nella Navbar */

    getMail: function(state) { return state.listNewletters;},

    /* Prendo la lista dei desideri */

    getWish: function(state) { return state.wishList;},



    


    




  },

});
