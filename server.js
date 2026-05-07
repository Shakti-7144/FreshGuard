import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/api/gemini-suggest', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });
    if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: 'Missing GEMINI_API_KEY in .env' });

    const systemText = `You are FreshGuard AI. Suggest practical ways, recipes, or methods to eat or use food items before they get spoiled or stale. Help reduce food waste by recommending quick meals, storage tips, or alternative uses for items nearing expiry. If a food item appears spoiled, rotten, foul-smelling, moldy, or unsafe to consume, clearly tell the user to discard it immediately and do not recommend using or eating it.`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemText}\n\n${prompt}` }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 350 }
      })
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.error?.message || 'Gemini API error' });
    const text = data.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('\n') || '';
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`FreshGuard running at http://localhost:${PORT}`));
