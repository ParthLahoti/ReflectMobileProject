// src/services/apiService.ts

// IMPORTANT: Add your Stability AI API key here
const API_KEY = 'YOUR_API_KEY_GOES_HERE';

// The specific API endpoint we are using
const API_HOST = 'https://api.stability.ai';
const ENGINE_ID = 'stable-image-core'; // This is their newest model

// Define the shape of the data we expect back from the API
interface StabilityApiResponse {
  artifacts: Array<{
    base64: string;
    finishReason: string;
  }>;
}

export const generateImages = async (
  prompt: string,
): Promise<string[]> => {
  console.log(`Generating REAL images for prompt: "${prompt}"`);

  // 1. Make the network request to the API
  const response = await fetch(
    `${API_HOST}/v1/generation/${ENGINE_ID}/text-to-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 4, // We want 4 images
      }),
    },
  );

  // 2. Check if the request was successful
  if (!response.ok) {
    throw new Error(`Non-200 response: ${await response.text()}`);
  }

  // 3. Parse the JSON response
  const data = (await response.json()) as StabilityApiResponse;

  // 4. The images are returned as 'base64' strings. We need to
  // format them so the <Image> component can read them.
  const imageUrls = data.artifacts.map((image) => {
    return `data:image/png;base64,${image.base64}`;
  });

  console.log('Successfully generated images!');
  return imageUrls;
};