import mongoose from 'mongoose';
import slugify from 'slugify';

const subCategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
  },
});

// Category Schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
    required: [true, 'Please add a category name'],
  },
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
  },
  subCategories: [subCategoriesSchema],
});

// generating slug before saving for categories
categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name);

  next();
});

// generating slug before saving for subCategories
subCategoriesSchema.pre('save', function (next) {
  const parent = this.ownerDocument();
  const combineName = `${this.name} ${parent.name}`;
  this.slug = slugify(combineName);

  next();
});

export default mongoose.model('category', categorySchema);
