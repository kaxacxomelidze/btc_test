import React, { useState } from 'react';
import { optimizeTransaction } from '../services/api';

function OptimizeForm() {
    const [inputs, setInputs] = useState('');
    const [outputs, setOutputs] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await optimizeTransaction({
                inputs: inputs.split(',').map(Number),
                outputs: outputs.split(',').map(Number),
            });
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Inputs:</label>
                    <input type="text" value={inputs} onChange={(e) => setInputs(e.target.value)} />
                </div>
                <div>
                    <label>Outputs:</label>
                    <input type="text" value={outputs} onChange={(e) => setOutputs(e.target.value)} />
                </div>
                <button type="submit">Optimize</button>
            </form>
            {result && <p>Optimized Fee: {result.optimizedFee}</p>}
        </div>
    );
}

export default OptimizeForm;