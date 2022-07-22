const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1.", () => {
    const result = calculateChange(5, 6);
    expect(result).toBe(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", () => {
    const result = calculateChange(12.3, 13.03);
    expect(result).toBe(0.73);
  });
  test("Given total 9.99 and payment 10, it returns 0.01.", () => {
    const result = calculateChange(9.99, 10);
    expect(result).toBe(0.01);
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true", () => {
    const result = isSufficientPayment(5, 6);
    expect(result).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false.", () => {
    const result = isSufficientPayment(10, 7);
    expect(result).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true.", () => {
    const result = isSufficientPayment(3, 3);
    expect(result).toBe(true);
  });
  test("Given total 8.50 and payment 10, it returns true", () => {
    const result = isSufficientPayment(8.5, 10);
    expect(result).toBe(true);
  });
});

describe("calculateTotal function", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99.", () => {
    const itemsArray = [
      {
        name: "Jelly",
        price: 4.99,
      },
    ];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    const itemsArray = [
      {
        name: "Peanut Butter",
        price: 3.5,
      },
      {
        name: "Bread",
        price: 12.99,
      },
      {
        name: "Banana",
        price: 0.03,
      },
    ];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(16.52);
  });
  test("Given an empty itemsArray, it returns 0.", () => {
    const itemsArray = [];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(0);
  });
  test("Given an itemsArray of two items with prices 3.00, and 4.00, it returns 7.00.", () => {
    const itemsArray = [
      {
        name: "Bread",
        price: 3.0,
      },
      {
        name: "Banana",
        price: 4.0,
      },
    ];
    const result = calculateTotal(itemsArray);
    expect(result).toBe(7);
  });
});

describe("addItem function", () => {
  test("Call addItem with an empty itemsArray, name 'Beans' and price 3. Then check that itemsArray has one item in it: { name: 'Beans', price: 3 }.", () => {
    const itemsArray = [];
    addItem(itemsArray, "Beans", 3);
    expect(itemsArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test("Create an itemsArray with one item in it: { name: 'Beans', price: 3 }. Call addItem with itemsArray, name 'Sugar' and price 2. Then check that itemsArray has two items in it: { name: 'Beans', price: 3 } and { name: 'Sugar', price: 2 }.", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    addItem(itemsArray, "Sugar", 2);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items.", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Peanut", price: 0.03 },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Peanut", price: 0.03 },
    ]);
  });
});
