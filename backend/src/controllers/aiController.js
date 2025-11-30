const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getChatResponse = async (req, res) => {
    try {
        const { message, history } = req.body;

        if (!message) {
            return res.status(400).json({ msg: "Message is required" });
        }

        // Initialize the model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        let formattedHistory = history ? history.map(msg => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
        })) : [];

        // Remove leading model messages
        while (formattedHistory.length > 0 && formattedHistory[0].role === "model") {
            formattedHistory.shift();
        }

        const chat = model.startChat({
            history: formattedHistory,
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        

        

        let msgToSend = message;
        if (!history || history.length === 0) {
            msgToSend = `


You are Tairis, an advanced AI medical emergency assistant. Your goal is to provide immediate, calm, and structured guidance for medical situations.

CRITICAL PROTOCOL:
1. **IMMEDIATE TRIAGE**: If the user describes a life-threatening situation (e.g., severe bleeding, difficulty breathing, chest pain, unconsciousness), your FIRST sentence MUST be: "🚨 CALL EMERGENCY SERVICES (911/112) IMMEDIATELY."
2. **DISCLAIMER**: Always imply you are an AI assistant and not a doctor, but do not clutter the response with long disclaimers unless necessary.
3. **STRUCTURED ADVICE**: Provide instructions in clear, numbered steps.
4. **CALM TONE**: Use reassuring and direct language.
5. **CLARIFICATION**: If the situation is ambiguous, ask ONE critical clarifying question to better assess the urgency.

Example Response Structure:
"🚨 CALL EMERGENCY SERVICES IMMEDIATELY if the person is unconscious.

While you wait for help:
1. Lay the person down flat.
2. Check for breathing.
3. ..."

User Query: ${message}`;
        }

        const result = await chat.sendMessage(msgToSend);
        const response = await result.response;
        const text = response.text();

        res.json({ text });

    } catch (err) {
        console.error("Error in AI chat:", err);
        res.status(500).json({ msg: "Error processing AI response", error: err.message });
    }
};

module.exports = {
    getChatResponse
};
