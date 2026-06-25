/**
 * Centralized image imports for the Lingua app
 * Import all image assets here and export through the `images` object
 */

// Import mascot and brand assets
// (Add mascot and brand images as they are created)

// Export images object for use throughout the app
export const images = {
  // Mascot
  // mascot: require('@/assets/images/mascot.png'),
  // mascotHappy: require('@/assets/images/mascot-happy.png'),
  // mascotSad: require('@/assets/images/mascot-sad.png'),
  // Icons
  // (Icon imports will be added as needed)
} as const;

export type ImageKey = keyof typeof images;
