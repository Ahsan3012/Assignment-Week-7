type CartItem = {
    name: string;
    quantity: number;
    price: number;
};

class ShoppingCart {
    private cart: CartItem[] = [];

    addItem(item: CartItem): void {
        this.cart.push(item);
        this.printCart();
    }

    removeItem(itemName: string): void {
        const index = this.cart.findIndex(item => item.name === itemName);
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.printCart();
        } else {
            console.log(`Item '${itemName}' not found in the cart.`);
        }
    }

    updateQuantity(itemName: string, newQuantity: number): void {
        const index = this.cart.findIndex(item => item.name === itemName);
        if (index !== -1) {
            this.cart[index].quantity = newQuantity;
            this.printCart();
        } else {
            console.log(`Item '${itemName}' not found in the cart.`);
        }
    }

    private printCart(): void {
        console.log("Cart Contents:");
        console.table(this.cart);
    }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: "Laptop", quantity: 1, price: 999.99 });
shoppingCart.addItem({ name: "Mouse", quantity: 2, price: 19.99 });
shoppingCart.removeItem("Laptop");
shoppingCart.updateQuantity("Mouse", 3);
