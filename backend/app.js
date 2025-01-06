const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware for JSON parsing and CORS
app.use(bodyParser.json());
app.use(cors());

// POST endpoint for `/api/optimize`
app.post('/api/optimize', (req, res) => {
    const { inputs, outputs } = req.body;

    // Validate inputs
    if (!inputs || !outputs) {
        return res.status(400).json({ error: 'Inputs and outputs are required' });
    }

    // Fee calculation logic
    const fee = calculateFee(inputs, outputs);

    // Send response
    res.json({ optimizedFee: fee });
});

// Fee calculation logic
function calculateFee(inputs, outputs) {
    // Example logic (replace with actual implementation if needed)
    return inputs.length * 100 + outputs.length * 50;
}

// Fallback route for invalid endpoints
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
