
import image1 from '../assets/images/image1.png';   // <-- Change the file name
import image2 from '../assets/images/image2.png';  // <-- Change the file name
import image3 from '../assets/images/image3.png';   // <-- Change the file name
import image4 from '../assets/images/image4.png'; // <-- Change the file name
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
// ... import more images as needed

export interface GalleryImage {
  id: number;
  prompt: string;
  imageUrl: string; // This will now be the imported image path
}

// 2. Use the imported images in your data array
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    prompt: "A majestic lion with a nebula for a mane, floating in outer space, digital art.",
    imageUrl: image1, // Use the imported image variable here
  },
  {
    id: 2,
    prompt: "An enchanted forest path at twilight with glowing mushrooms and sparkling fireflies.",
    imageUrl: image2, // Use the imported image variable here
  },
  {
    id: 3,
    prompt: "A futuristic cyberpunk city skyline at night, with neon signs reflected in the rain-slicked streets.",
    imageUrl: image3, // Use the imported image variable here
  },
  {
    id: 4,
    prompt: "A tranquil Japanese garden with a koi pond, cherry blossom trees, and a traditional pagoda.",
    imageUrl: image4, 
  },
  {
    id: 5,
    prompt: "An adorable, fluffy, big-eyed robot tending to a small plant on a windowsill.",
    imageUrl: image5, 
  },
  {
    id: 6,
    prompt: "A surreal desert landscape where the sand is made of colorful, swirling abstract patterns",
    imageUrl: image6, 
  },
];