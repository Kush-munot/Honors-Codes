const router = require('express').Router();
let Customer = require('../models/customer.model');

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find().sort({ firstName: 1 })
        res.json(customers)
    } catch (err) {
        res.send(err)
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        const c1 = await customer.delete();
        res.json(c1);
    } catch (err) {
        res.send(err);
    }
});
module.exports = router;