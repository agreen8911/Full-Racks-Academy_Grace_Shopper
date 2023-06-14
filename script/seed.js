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
      price: 19999,
      description: "Used for building the chest",
      userId: 1,
      productType: "Strength"
    }),
    Product.create({
      productName: "Dumbbells",
      price: 50001,
      description: "Used for building the pipes",
      productType: "Strength"
    }),
    Product.create({
      productName: "latPullDown",
      price: 30708,
      description: "Used for building the cobra back",
      productType: "Strength"
    }),
    Product.create({
      productName: "Eliptical",
      price: 30708,
      description: "Used for cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "TRX",
      price: 30708,
      description: "Used for multiple exercises",
      productType: "Recovery"
    }),
    Product.create({
      productName: "legPress",
      price: 80003,
      description: "Used for building Legs",
      productType: "Strength"
    }),
    Product.create({
      productName: "pecDeck",
      price: 12999,
      description: "Used for building chest",
      productType: "Strength"
    }),
    Product.create({
      productName: "sled",
      price: 20099,
      description: "Used for lower body",
      productType: "Cardio"
    }),
    Product.create({
      productName: "platform",
      price: 28799,
      description: "Used for deadlifts",
      productType: "Strength"
    }),
    Product.create({
      productName: "pullUpBar",
      price: 8899,
      description: "Used for building back",
      productType: "Strength"
    }),
    Product.create({
      productName: "smithMachine",
      price: 30708,
      description: "Used for multiple exercises",
      productType: "Strength"
    }),
    Product.create({
      productName: "legExtension",
      price: 12999,
      description: "Used for building legs",
      productType: "Strength"
    }),
    Product.create({
      productName: "legCurl",
      price: 18999,
      description: "Used for building hamstrings",
      productType: "Strength"
    }),
    Product.create({
      productName: "calfPress",
      price: 50099,
      description: "Used for building calves",
      productType: "Strength"
    }),
    Product.create({
      productName: "seatedRow",
      price: 50099,
      description: "Used for building thick back",
      productType: "Strength"
    }),
    Product.create({
      productName: "seatedDeclinePress",
      price: 50099,
      description: "Used for building chest",
      productType: "Strength"
    }),
    Product.create({
      productName: "seatedInclinePress",
      price: 50099,
      description: "Used for building chest",
      productType: "Strength"
    }),
    Product.create({
      productName: "backExtension",
      price: 10099,
      description: "Used for building lower back",
      productType: "Strength"
    }),
    Product.create({
      productName: "hackSquat",
      price: 37199,
      description: "Used for building legs",
      productType: "Strength"
    }),
    Product.create({
      productName: "shakeWeight",
      price: 299,
      description: "Used for building some random muscle",
      productType: "Cardio"
    }),
    Product.create({
      productName: "stairMaster",
      price: 50599,
      description: "Used for great cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "stationaryBike",
      price: 8399,
      description: "Used for cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "treadmill",
      price: 8399,
      description: "Used for cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "preacherCurlMachine",
      price: 28999,
      description: "Used for building Biceps",
      productType: "Strength"
    }),
    Product.create({
      productName: "tricepExtensionMachine",
      price: 14999,
      description: "Used for building triceps",
      productType: "Strength"
    }),
    Product.create({
      productName: "Foam Roller",
      price: 20000,
      description: "Used for rolling out those knots",
      productType: "Recovery"
    }),
    Product.create({
      productName: "Yoga mat",
      price: 80000,
      description: "Used for all those good stretches",
      productType: "Recovery"
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
