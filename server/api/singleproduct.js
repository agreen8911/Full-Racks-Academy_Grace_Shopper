
const express = require('express');


//we are importing the two objects and we source them from our backend through the "../db"
// const { default: SingleProduct } = require( "../client/features/SingleProduct" );
 const { SingleProduct } = require("../db");
const { Product } = require("../db");

// The code creates an instance of the Express 
// router using express.Router(). This router will handle
//  the incoming HTTP requests related to students.

const router = express.Router();

// GET /api/students


// The code defines a route for the GET request to "/". 
// When a GET request is made to this route, it executes an asynchronous 
// function that retrieves all students from the database using Student.findAll().


router.get("/", async (req, res, next) => {
  try {
    const SingleProduct = await SingleProduct.findAll();
    res.send(allProducts);
  } catch (error) {
    next(error);
  }
});

// GET /api/SingleProduct/:id

//when a get request is made to this route , it executes an asynchronous function that retrieves
// the student with the specified ID from the database using findByPK(include: Campus)
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const SingleProduct = await SingleProduct.findByPk(id);

    if (!SingleProduct) {
      return res.status(404).send("SingleProduct not found");
    }

    res.send(SingleProduct);
  } catch (error) {
    next(error);
  }
});

// POST /api/students

// this post route wiil create a new studennt using SingleProduct.create({productName, description  and price })
router.post("/", async (req, res, next) => {
  try {
    const { productName, description, price } = req.body;

    const SingleProduct = await SingleProduct.create({
      productName,
      description,
      price,
    });

    res.status(201).send(newSingleProduct);
  } catch (error) {
    next(error);
  }
});


//this put route will be in charge of upadting the student 
router.put("/:id", async (req, res, next) => {
  try {
    const { productName, description, price } = req.body;
    const updateResult = await SingleProduct.update(
      { productName, description, price },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(updateResult);
  } catch (error) {
    next(error);
  }
});





module.exports = router;
