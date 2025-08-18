<div align="center">

  <img src="public/logo.png" alt="Dream Render Logo" width="120"/>

  <h1 style="font-size: 3rem; font-weight: 300; letter-spacing: -1.5px;">
    Dream Render
  </h1>

  <p>
    An elegant and powerful AI Image Generator built with React, Vite, and Tailwind CSS.
  </p>
  <br/>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS Badge"/>
  </p>

</div>

---

<div align="center">

  <a href="https://dreamrender.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/View%20Live%20Demo-20232A?style=for-the-badge&logo=rocket&logoColor=white" alt="View Live Demo"/>
  </a>

</div>

---

## ✨ Features

Dream Render is a feature-rich application designed to provide a seamless and inspiring creative experience.

* **Stunning User Interface**: A polished, responsive, and modern UI built with a light theme and beautiful gradients.
* **Homepage**: A professional landing page that introduces the application and its features.
* **AI Image Generator**: An intuitive interface to generate images by providing prompts, selecting image sizes, and choosing from different AI models.
* **Inspiration Gallery**: A curated gallery of pre-built images to showcase the AI's capabilities and spark user creativity.
* **Dynamic Image Grid**: Generated images are instantly added to a responsive grid for easy viewing.
* **Image Download**: Users can download their generated creations directly to their local machine.
* **Fully Responsive**: The entire application is optimized for a seamless experience on all devices, from mobile phones to desktops.
* **SEO Optimized**: The `index.html` is configured with comprehensive meta tags for better search engine visibility and social media sharing.

---

## 🛠️ Tech Stack

This project leverages a modern, efficient, and powerful technology stack to deliver a high-quality user experience.

| Technology | Description |
| :--- | :--- |
| **React** | A JavaScript library for building user interfaces. |
| **Vite** | A next-generation frontend tooling that provides an extremely fast development experience. |
| **TypeScript** | A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
| **Tailwind CSS** | A utility-first CSS framework for rapidly building custom user interfaces. |
| **React Router** | A standard library for routing in React, enabling navigation among views. |
| **Lucide Icons** | A beautiful and consistent icon toolkit. |

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

Make sure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (v18.x or higher is recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the Repository**
    ```sh
    git clone [https://github.com/your-username/dream-render.git](https://github.com/your-username/dream-render.git)
    cd dream-render
    ```

2.  **Install Dependencies**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Environment Variables

This project requires an API key to connect to the image generation service.

1.  Create a new file named `.env` in the **root** of your project directory.
2.  Add your API key to this file as follows:

    ```env
    # .env
    VITE_API_KEY=your_api_key_here
    ```
    > **Note**: This is a crucial step. The application will not be able to generate images without this key.

### Running the Application

Once the dependencies are installed and the environment variables are set, you can start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5177` (or another port if 5177 is in use).

---

## 📂 Project Structure

The project follows a clean and organized folder structure to make development and maintenance easier.

```
dream-render/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   └── images/      # Local images for the gallery
│   ├── components/      # Reusable React components
│   │   ├── AIImageGenerator.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── Header.tsx
│   │   └── HomePage.tsx
│   ├── data/
│   │   └── gallery-data.ts  # Data for the inspiration gallery
│   ├── App.tsx          # Main app component with routing
│   ├── index.css        # Tailwind CSS directives
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables (API key)
├── index.html           # Main HTML file (SEO optimized)
├── package.json
├── README.md            # You are here!
└── vite.config.ts       # Vite configuration (with proxy setup)
```

---

## 📜 License

This project is open-source and available under the MIT License.

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>
    Designed & Developed by Donavalli Jayanth
  </p>
  <p>
    <a href="https://github.com/Jayanth0124" target="_blank">GitHub</a> • 
    <a href="https://linkedin.com/in/jayanth-donavalli" target="_blank">LinkedIn</a>
  </p>
</div>