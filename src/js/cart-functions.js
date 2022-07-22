const calculateChange = (total, payment) => {
  return Math.round((payment - total) * 100) / 100;
};

const isSufficientPayment = (total, payment) => payment >= total;

const calculateTotal = (itemsArray) => {
  //   let total = 0;
  //   itemsArray.forEach((item) => (total += item.price));
  //   return parseFloat(total.toFixed(2));
  return itemsArray.reduce((pv, cv) => pv + cv.price * 100, 0) / 100;
};

const addItem = (array, name, price) => {
  const newItem = { name, price };
  array.push(newItem);
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
