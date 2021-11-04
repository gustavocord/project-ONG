const { Testimonial } = require("../models/index");

const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.getAllTestimonials();
    return res.status(200).json({ testimonials });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getTestimonialById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.getTestimonialById(id);
    if (testimonial) {
      return res.status(200).json({ testimonial });
    }
    return res.status(404).send("User with the specified ID does not exists");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createTestimonial = async (req, res, next) => {
  try {
    const data = req.body;
    const testimonial = await Testimonial.createTestimonial(data);
    return res.status(201).json({ testimonial });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// UPDATE en POSTMAN

const updateTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    //const { data } = req.body;
    const updated = await Testimonial.updateTestimonial(id);
    if (updated) {
      const updatedTestimonial = await Testimonial.findOne({
        where: { id: id }
      });
      return res.status(200).json({ updatedTestimonial });
    }
    throw new Error("Testimonial not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Testimonial.deleteTestimonial(id);
    if (deleted) {
      return res.status(200).send("Testimonial deleted");
    }
    throw new Error("Testimonial not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
};
