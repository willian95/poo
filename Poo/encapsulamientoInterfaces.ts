interface CartRepository{
    addItemToCart():boolean
    deleteItemFromCart():boolean
    amountOfItemInCart():number
}


class CartRepositoryMysql implements CartRepository{

    addItemToCart(): boolean {
        console.log("Item added succesfully to cart MYSQL")
        return true
    }
    deleteItemFromCart(): boolean {
        console.log("Item deleted succesfully from cart MYSQL")
        return true
    }
    amountOfItemInCart(): number {
        console.log("Counted elements MYSQL")
        return 5
    }

}

class CartRepositoryMongoDB implements CartRepository{
    addItemToCart(): boolean {
        console.log("Item added succesfully to cart MongoDB")
        return false
    }
    deleteItemFromCart(): boolean {
        console.log("Item deleted succesfully from cart MongoDB")
        return false
    }
    amountOfItemInCart(): number {
        console.log("Counted elements MongoDB")
        return 8
    }

}

const cartRepositoryMysql = new CartRepositoryMysql()
cartRepositoryMysql.addItemToCart()
cartRepositoryMysql.deleteItemFromCart()
cartRepositoryMysql.amountOfItemInCart()

const cartRepositoryMongoDB = new CartRepositoryMongoDB()
cartRepositoryMongoDB.addItemToCart()
cartRepositoryMongoDB.deleteItemFromCart()
cartRepositoryMongoDB.amountOfItemInCart()