export async function optimizeTransaction(data) {
    const response = await fetch('http://localhost:5000/api/optimize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to optimize transaction');
    }

    return await response.json();
}