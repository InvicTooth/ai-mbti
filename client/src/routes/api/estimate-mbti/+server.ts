import dotenv from 'dotenv';
dotenv.config();

export const POST = async ({ request }) => {
	const userData = await request.json();

	// Preprocess userData and send it to the GPT-3.5 API to estimate MBTI.
	const prompt = `Given the following social media data, please estimate the user's MBTI type: ${JSON.stringify(
		userData
	)}`;
	const estimatedMbti = await callGpt35Api(prompt);

	return new Response(JSON.stringify({ mbti: estimatedMbti }), { status: 200 });
};

const callGpt35Api = async (prompt: string) => {
	const apiKey = process.env.OPENAI_API_KEY;
	const apiUrl = "https://api.openai.com/v1/completions";
  const apiOrg = process.env.OPENAI_ORGANIZATION;

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${apiKey}`,
      organization: apiOrg,
		},
		body: JSON.stringify({
			prompt,
      model: 'text-davinci-003',
			max_tokens: 500,
			n: 1,
			stop: null,
			top_p: 0.1
		})
	});

	if (response.ok) {
		const data = await response.json();
		return data.choices[0].text.trim();
	} else {
		console.error('Failed to call GPT-3.5 API');
		return null;
	}
};
