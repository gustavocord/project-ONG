var express = require("express");
const {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
} = require("../controllers/testimonialController");
const {
  validateTestimonial
} = require("../middlewares/testimonialsValidationRules");
const idParamsValidation = require("../middlewares/idParamsValidation");
const { esAdminRole } = require("../middlewares/validarRoles");
const { validarJWT } = require("../middlewares/validarJWT");

var router = express.Router();

/* POST testimonial create. */
router.post("/", validarJWT, esAdminRole,validateTestimonial, createTestimonial);

/* GET testimonials listing. */
router.get("/", getAllTestimonials);

/* GET testimonial by ID. */
router.get(
  "/:id",
  validarJWT,
  esAdminRole,
  idParamsValidation,
  getTestimonialById
);

/* PUT update a testimonial by ID. */
router.put(
  "/:id",
  validarJWT,
  esAdminRole,
  validateTestimonial,
  idParamsValidation,
  updateTestimonial
);

/* DELETE delete testimonial by ID. */
router.delete(
  "/:id",
  validarJWT,
  esAdminRole,
  idParamsValidation,
  deleteTestimonial
);

module.exports = router;
