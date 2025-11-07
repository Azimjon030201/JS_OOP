class CoffeeShop{
    constructor(name, menu){
        this.name = name;
        this.menu = menu;
        this.order = []
    }
    addOrder(name){
        let items = this.menu.map((element)=>element.item)
        console.log(items);
        
        if(items.includes(name)){
            this.order.push(name)
            return "Order added!"
        } else return "This item is currently unavailable!"
    }
    fulfillOrder(){
        if(this.order.length == 0){
            return "All orders have been fulfilled!"
        }else{
            return `The ${this.order.shift()} is ready!`
        }
    }
    listOrders(){
        return this.order;
    }
    dueAmount(){
        let result = 0;
        for (const element of this.order) {      
            result = result + this.menu.find((el) => el.item == element).price;
        }
        return result;
    }
    cheapestItem(){
        let cheapPrice = this.menu[0].price;
        let cheapName = this.menu[0].item;
        for (const element of this.menu) {
            if(element.price<=cheapPrice){
                cheapName = element.item;
            }
        }
        return cheapName;
    }
    drinksOnly(){
        return this.menu.filter((element) => element.type =="drink")
        .map((element) => element.item)
    }
    foodOnly(){
        return this.menu.filter((element) => element.type =="food")
        .map((element) => element.item)
    }
}

const menu = [
  { item: "Coffee", type: "drink", price: 3 },
  { item: "Tea", type: "drink", price: 2 },
  { item: "Sandwich", type: "food", price: 5 },
  { item: "Cake", type: "food", price: 4 }
];
let Azimjon = new CoffeeShop("Azimjon's Coffe", menu);
console.log(Azimjon.menu);

console.log(Azimjon.addOrder("Tea"));

console.log(Azimjon.addOrder("Sandwich"));

console.log(Azimjon.listOrders());

console.log(Azimjon.dueAmount());

console.log(Azimjon.fulfillOrder());

console.log(Azimjon.listOrders());

console.log(Azimjon.fulfillOrder());

console.log(Azimjon.listOrders());

console.log(Azimjon.drinksOnly());

console.log(Azimjon.foodOnly());

console.log(Azimjon.cheapestItem());

