const Joi = require('joi');

const idSchema = Joi.number().integer().min(1);
const nameSchema = Joi.string().min(3);

const productsTable = Joi.object({
  id: idSchema,
  name: nameSchema,
});

module.exports = {
  idSchema,
  nameSchema,
  productsTable,
};