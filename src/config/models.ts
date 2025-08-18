export interface Model {
  id: string;
  name: string;
  description: string;
}

export const availableModels: Model[] = [
  {
    id: "img3",
    name: "Imagen 3",
    description: "High-quality image generation with advanced features"
  },
  {
    id: "img4",
    name: "Imagen 4",
    description: "Latest model with improved quality and speed"
  },
  {
    id: "qwen",
    name: "Qwen",
    description: "Versatile model for various image generation tasks"
  },
  {
    id: "uncen",
    name: "Uncensored",
    description: "Unrestricted creative image generation"
  }
];
