"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      firstName: "Cody",
      lastName: "Jones",
      email: "cjones@hotmail.com",
      cart: [],

    }),
    User.create({
      username: "murphy",
      password: "123",
      firstName: "Murphy",
      lastName: "Coolname",
      email: "cjones@hotmail.com",
      cart: []
    }),
    User.create({
      username: "coolguy999",
      password: "123",
      firstName: "Cool",
      lastName: "Guy",
      email: "coolguy@hotmail.com",
      cart: []
    }),
    User.create({
      username: "JD123",
      password: "123",
      firstName: "Jon",
      lastName: "Does",
      email: "jdoe@hotmail.com",
      cart: []
    }),
  ]);

  const products = await Promise.all([
    Product.create({
      productName: "Bench",
      price: 199.99,
      description: "Used for building the chest",
      userId: 1
    }),
    Product.create({
      productName: "Dumbbells",
      price: 500.01,
      description: "Used for building the pipes",
    }),
    Product.create({
      productName: "latPullDown",
      price: 307.08,
      description: "Used for building the cobra back",
    }),
    Product.create({
      productName: "Eliptical",
      price: 307.08,
      description: "Used for cardio",
    }),
    Product.create({
      productName: "TRX",
      price: 307.08,
      description: "Used for multiple exercises",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    products: {
      bench: products[0],
      dumbbells: products[1],
      latPullDowb: products[2],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
