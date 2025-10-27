// src/services/apiService.ts

// !!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!
// 1. Go to https://platform.stability.ai/signup to get a free API key.
// 2. Paste your key here.
const YOUR_API_KEY_HERE = 'YOUR_API_KEY_HERE';
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// This is the REAL function we will use
export const generateRealImages = async (prompt: string, style: string) => {
  if (YOUR_API_KEY_HERE === 'YOUR_API_KEY_HERE') {
    console.error('API key is not set. Please update apiService.ts');
    // Return mock data if key isn't set
    return generateMockImages(prompt); 
  }

  console.log(`Generating REAL images for prompt: "${prompt}"`);

  try {
    const response = await fetch(
      'https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${YOUR_API_KEY_HERE}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
            },
          ],
          cfg_scale: 7,
          height: 512,
          width: 512,
          samples: 4, // Generate 4 images
          steps: 30,
          style_preset: style, // Use the style from the app
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Non-200 response: ${await response.text()}`);
    }

    const data = await response.json();
    
    // The API returns images as "base64" strings.
    // We must format them so the <Image> component can read them.
    const imageUrls = data.artifacts.map((image: { base64: string }) => {
      return `data:image/png;base64,${image.base64}`;
    });

    return imageUrls;

  } catch (error) {
    console.error('Error generating images:', error);
    return []; // Return an empty array on failure
  }
};


// This is the MOCK function for testing
export const generateMockImages = async (prompt: string) => {
  console.log(`Generating MOCK images for prompt: "${prompt}"`);

  await new Promise((resolve) =>
    setTimeout(() => resolve(undefined), 1000),
  );

  // Return a list of fake image URLs
  return [
    `https://picsum.photos/seed/${prompt.length}/400`,
    `https://picsum.photos/seed/${prompt.length + 1}/400`,
    `https://picsum.photos/seed/${prompt.length + 2}/400`,
    `https://picsum.photos/seed/${prompt.length + 3}/400`,
  ];
};