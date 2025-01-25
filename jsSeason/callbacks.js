let cart = ["tshirt", "paint", "kurta"];

createOrder(cart, () => {
  Payment(() => {
    showSummary(() => {

    });
  });
});

// Benefits : Provide asynchronous functionality to code
// Drawbacks : 1.Callback Hell creates pyramid of doom
//             2. Inversion Of Control loosing control over code