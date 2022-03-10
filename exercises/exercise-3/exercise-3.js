let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let log = console.log;
let bill = 0;

let calcTotal = (quantity, unitPrice) => {
  let total = 0;
  total = quantity * unitPrice;
  return total;
};

  log("QTY     ITEM         TOTAL");

  order.forEach(({ itemName, quantity, unitPrice }) => {

    let total = calcTotal(quantity, unitPrice);
    bill = bill + total;
 
    log(`${quantity}     ${itemName}       ${total}`);
  });
 
  log(`Bill:`, bill);

