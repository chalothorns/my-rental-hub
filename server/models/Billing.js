const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    billingDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' },
    paymentDate: { type: Date, default: null }
});

module.exports = mongoose.model('Billing', BillingSchema);