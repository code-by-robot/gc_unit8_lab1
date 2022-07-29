let cart = [];

function AddToCart(name, price){
    
    let item={
        Name: name,
        Price: price,
    }
    cart.push(item);
    console.log('Added to cart: ', item.Name)
}

function DisplayReceipt(){

    let total =0;
    cart.forEach((element) => {
        console.log(element.Name, element.Price);
        total += element.Price;
    });
    console.log('Total is: ', total);
    cart.length = 0;
}
