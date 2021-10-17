const mongoose = require('mongoose');
const slug = require('slug');

const { Schema } = mongoose;

const portfolioSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function () {
            return slug(this.title)
        }

    },
    description: {
        type: String,
        require: true
    },
    longDescription: {
        type: String
    },
    image: {
        type: String,
        require: true
    },
    technologies: [
        {
            label: String,
            icon: String,
            iconType: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('portfolio', portfolioSchema);