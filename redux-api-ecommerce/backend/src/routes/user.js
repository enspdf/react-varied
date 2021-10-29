const User = require('../models/User');
const CryptoJS = require('crypto-js');

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    console.log(req.body.password)
    console.log(req.params.id)
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete(':/id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)

        res.status(200).json({ message: 'User deleted' })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/', verifyTokenAndAdmin, async (req, res) => {


    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                }
            },
            {
                $group: {
                    _id: "$month",
                    count: { $sum: 1 }
                }
            }
        ])

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;