"use strict";

const express = require("express");
const productController = require("../../controllers/product.controller");
const { asyncHandler } = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const router = express.Router();

// authentication
router.use(authentication);
//////////////////

// create product
router.post("", asyncHandler(productController.createProduct));

module.exports = router;
