const express = require('express');
const { inngest } = require('../config/inngest');

const router = express.Router();

router.post('/api/webhooks/clerk', express.json(), async (req, res) => {
    try {
        console.log('📥 Clerk webhook received');
        console.log('Event type:', req.body.type);
        console.log('Event data:', JSON.stringify(req.body.data, null, 2));

        const eventType = req.body.type;
        const eventData = req.body.data;

        // Transform Clerk webhook into Inngest event
        if (eventType === 'user.created') {
            await inngest.send({
                name: 'clerk/user.created',
                data: eventData,
            });
            console.log('✅ Sent clerk/user.created event to Inngest');
        } 
        else if (eventType === 'user.updated') {
            await inngest.send({
                name: 'clerk/user.updated',
                data: eventData,
            });
            console.log('✅ Sent clerk/user.updated event to Inngest');
        }
        else if (eventType === 'user.deleted') {
            await inngest.send({
                name: 'clerk/user.deleted',
                data: eventData,
            });
            console.log('✅ Sent clerk/user.deleted event to Inngest');
        }
        else {
            console.log('ℹ️ Unhandled event type:', eventType);
        }

        res.status(200).json({ success: true, received: eventType });
    } catch (error) {
        console.error('❌ Webhook error:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;