interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface ICartItem {
    product: IProduct;
    amount: number;
}

class Cart {
    private items: ICartItem[] = [];

    addToCart(product: IProduct) : void {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.amount += 1;
        } else {
            this.items.push({product, amount: 1});
        }
    }

    removeFromCart(productId: number) : void {
        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem){
            if (existingItem.amount) {
                existingItem.amount -= 1;
            }
        } else {
            this.items = this.items.filter( item => item.product.id !== productId)
        }
    }

    clearCart() : void {
        this.items = [];
    }

    getItems() : ICartItem[] {
        return this.items;
    }
}

const cart = new Cart();

const product1: IProduct = { id: 1, name: "Laptop", price: 999.99 };
const product2: IProduct = { id: 2, name: "Phone", price: 499.99 };

cart.addToCart(product1); // Добавляем первый продукт
cart.addToCart(product1); // Увеличиваем количество первого продукта
cart.addToCart(product2); // Добавляем второй продукт

console.log(cart.getItems());
