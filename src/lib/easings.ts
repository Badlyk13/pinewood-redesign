export const easings = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  sharp: [0.4, 0, 0.2, 1] as const,
  spring: [0.175, 0.885, 0.32, 1.275] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
} as const;

export type EasingName = keyof typeof easings;
