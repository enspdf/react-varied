const router = require('express').Router();

const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middlewares/verifyToken');

router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save()

        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Order deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/income', verifyTokenAndAuthorization, async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: '$amount'
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ])

        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;