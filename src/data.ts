export const data ={
  banners:[
    {img:'/assets/banners/banner-1.png', link:''},
    {img:'/assets/banners/banner-2.png', link:''},
    {img:'/assets/banners/banner-3.png', link:''},
    {img:'/assets/banners/banner-4.png', link:''},
  ],

  // product list
  products: [
    {id: 1,label:'Camisa PHP', price: 40.90, image:'/assets/products/camiseta-php.png', liked: false},
    {id: 2,label:'Camisa Laravel', price: 30.90, image:'/assets/products/camiseta-laravel-branca.png', liked: false},
    {id: 3,label:'Camisa Node', price: 20.90, image:'/assets/products/camiseta-node.png', liked: false},
    {id: 4,label:'Camisa React', price: 10.90, image:'/assets/products/camiseta-react-azul.png', liked: false},

  ],
  product: 
    {
      id: 1,
      label:'Camisa PHP', 
      images:[
        '/assets/products/camiseta-php.png', 
        '/assets/products/camiseta-laravel-branca.png'
      ],
      price: 40.90, 
      liked: false,
      description: 'Descrição do produto',
    }
  

}