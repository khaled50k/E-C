const mongoose = require("mongoose");
const Product = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
      required: true,
    },
    sluger: {
      type: String,
      default: "",
      required: true,
    },
    categories: [
      {
        cateporyId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
          required: true,
        },
        categoryTitle: {
          type: String,
          required: true,
        },
      },
    ],
    sizes: {
      type: String,
      required: true,
      enum: ["S", "M", "L", "XL", "XXL"],
    },
    colors: {
      type: Array,
      required: true,
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", Product);
