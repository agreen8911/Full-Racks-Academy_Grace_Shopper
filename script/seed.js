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
      productName: "Lat PullDown",
      price: 30708,
      description: "Used for building the cobra back",
      productType: "Strength"
    }),
    Product.create({
      productName: "Elliptical",
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
      productName: "Leg Press",
      price: 80003,
      description: "Used for building Legs",
      productType: "Strength"
    }),
    Product.create({
      productName: "Chest Fly",
      price: 12999,
      description: "Used for building chest",
      productType: "Strength"
    }),
    Product.create({
      productName: "Sled",
      price: 20099,
      description: "Used for lower body",
      productType: "Cardio"
    }),
    Product.create({
      productName: "Lifting Platform",
      price: 28799,
      description: "Used for deadlifts",
      productType: "Strength"
    }),
    Product.create({
      productName: "Pull-Up Bar",
      price: 8899,
      description: "Used for building back",
      productType: "Strength"
    }),
    Product.create({
      productName: "Smith Machine",
      price: 30708,
      description: "Used for multiple exercises",
      productType: "Strength"
    }),
    Product.create({
      productName: "Leg Extension",
      price: 12999,
      description: "Used for building legs",
      productType: "Strength"
    }),
    Product.create({
      productName: "Leg Curl",
      price: 18999,
      description: "Used for building hamstrings",
      productType: "Strength"
    }),
    Product.create({
      productName: "Calf Press",
      price: 50099,
      description: "Used for building calves",
      productType: "Strength"
    }),
    Product.create({
      productName: "Seated Row",
      price: 50099,
      description: "Used for building thick back",
      productType: "Strength"
    }),
    Product.create({
      productName: "Seated Decline Press",
      price: 50099,
      description: "Used for building chest",
      productType: "Strength"
    }),
    Product.create({
      productName: "Seated Incline Press",
      price: 50099,
      description: "Used for building chest",
      productType: "Strength"
    }),
    Product.create({
      productName: "Back Extension",
      price: 10099,
      description: "Used for building lower back",
      productType: "Strength"
    }),
    Product.create({
      productName: "Hack Squat",
      price: 37199,
      description: "Used for building legs",
      productType: "Strength"
    }),
    Product.create({
      productName: "Shake-Weight",
      price: 299,
      description: "Used for building some random muscle",
      productType: "Cardio"
    }),
    Product.create({
      productName: "Stair Master",
      price: 50599,
      description: "Used for great cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "Stationary Bike",
      price: 8399,
      description: "Used for cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "Treadmill",
      price: 8399,
      description: "Used for cardio",
      productType: "Cardio"
    }),
    Product.create({
      productName: "Preacher Curl Machine",
      price: 28999,
      description: "Used for building Biceps",
      productType: "Strength"
    }),
    Product.create({
      productName: "Tricep Extension Machine",
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
