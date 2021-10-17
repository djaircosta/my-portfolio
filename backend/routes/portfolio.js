
const router = require('express').Router();

const auth = require('../middlewares/auth')

const { update } = require('../models/Portfolio');
const Portfolio = require('../models/Portfolio');

//Create
router.post('/', auth, async (req, res) => {
    const portifolio = new Portfolio({
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription,
        image: req.body.image,
        technologies: req.body.technologies
    });

    try {
        const savedPortfolio = await portifolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

})


//Read
router.get('/', async (req, res) => {

    try {
        const portfolio = await Portfolio.find();

        res.json({
            success: true,
            data: portfolio

        })

    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

});


router.get('/:slug', async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            data: portfolio
        })

    } catch (err) {
        res.json({
            success: false,
            message: err

        })
    }
})


//Update

router.patch('/:slug', auth, async (req, res) => {
    try {
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
            {
                title: req.body.title,
                description: req.body.description
            })

        res.json({
            success: true,
            updates: updatedPortfolio.nModified

        })

    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

//Delete

router.delete('/:slug', auth, async (req, res) => {
    try {
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        })

    } catch {
        res.json({
            success: false,
            message: err
        })
    }

})

module.exports = router