import { ShoppingCart } from './shopping-cart';

export class Order {

    datePlaced: number;
    items: any[];
    netPrice: number;
    user: {
      //username: string,
      userId: string
    };

    constructor (public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.items.map(i => {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            }
        });

        this.user = {
            userId: userId,
            //username: userName
          };
          this.netPrice = shoppingCart.totalPrice;
    }
}