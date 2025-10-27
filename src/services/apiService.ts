// src/services/apiService.ts

// We tell TypeScript that 'prompt' is a string
export const generateImages = async (prompt: string) => {
  console.log(`Generating images for prompt: "${prompt}"`);

  // We wrap `resolve` in a new function () => resolve(undefined)
  // This new function matches what `setTimeout` expects: () => void
  await new Promise((resolve) =>
    setTimeout(() => resolve(undefined), 2000),
  );

  return [
    'https://picsum.photos/seed/1/400',
    'https://picsum.photos/seed/2/400',
    'https://picsum.photos/seed/3/400',
    'https://picsum.photos/seed/4/400',
  ];
};