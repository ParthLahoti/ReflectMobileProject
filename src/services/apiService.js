// This function pretends to generate images.
export const generateImages = async (prompt) => {
  console.log(`Generating images for prompt: "${prompt}"`);

  // Wait for 2 seconds to simulate a network request
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Return a list of fake image URLs from a placeholder service
  return [
    'https://picsum.photos/seed/1/400',
    'https://picsum.photos/seed/2/400',
    'https://picsum.photos/seed/3/400',
    'https://picsum.photos/seed/4/400',
  ];
};