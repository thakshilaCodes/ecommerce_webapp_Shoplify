const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfeI7cIOx6DSDC8tCUNKAe2W0L9U9S8R-UpfiZvltLLzVacr1UdYUp7-hZUXyu2gcCx1-mx9KN49_Vq3",
  client_secret: "EO1R8SiuxSnIeV1PEtKottGe4ySpttxu7f12o0PtWD1TPI5O6WWR3xlXy1Qs5GBW--HpcGV9UTv8SyMr",
});

module.exports = paypal;