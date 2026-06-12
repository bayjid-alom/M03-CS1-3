function calcBill(prices, items) {
    // console.log(prices, items)


    let itemCount = {};

    for (let item of items) {
        // console.log(item)
        if (itemCount.hasOwnProperty(item)) {
            itemCount[item]++;
        }
        else {
            itemCount[item] = 1;
        }
    }
    console.log(itemCount)

    let total = 0;
    for (let item in itemCount) {
        // let price = prices[item];
        // console.log(price)
        // total = total + price;
        console.lot(item, "->", price)
    }
    // console.log(total)
    return {
        total,
        itemCount: {},
    }
}

let output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output)