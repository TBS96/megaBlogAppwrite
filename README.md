# Blogify

Blogify is a dynamic, modern web application for creating, managing, and sharing blogs seamlessly. Built using cutting-edge technologies like React, RTK, Tailwind CSS, and Appwrite, it provides a robust platform for bloggers to express themselves while ensuring scalability, security, and a rich user experience.

## Features

- **User Authentication**: Secure user login and registration using Appwrite's authentication system.
- **Blog Management**: Create, edit, and delete blogs with ease.
- **Rich Text Editing**: Format your blogs with an intuitive and user-friendly text editor.
- **Responsive Design**: Fully responsive and optimized for all screen sizes.
- **Real-Time Updates**: Blogs are updated in real-time without refreshing the page.
- **Secure Backend**: All user and blog data are securely managed with Appwrite.

## Technologies Used

### Frontend
- **React**: For building the dynamic and interactive user interface.
- **Redux and RTK**: For managing and and centralizing application states.
- **Tailwind CSS**: For rapid UI design and responsive layouts.
- **DaisyUI**: Tailwind plugin for pre-designed UI components.

### Backend
- **Appwrite**: A self-hosted backend-as-a-service platform for managing authentication, database, and storage.

### Others
- **React Router**: For seamless navigation.
- **Vite**: For fast and efficient development.
- **ESLint**: To maintain code quality.

## Getting Started

Follow these steps to set up and run the project on your local machine:

### Prerequisites
- Node.js (v16+)
- Appwrite Server (self-hosted or Appwrite Cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TBS96/megaBlogAppwrite.git
   cd megaBlogAppwrite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Appwrite:**
   - Create a project in your Appwrite console.
   - Configure your database and authentication.
   - Update the Appwrite endpoint and project ID in the app configuration.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app in your browser:**
   Navigate to `http://localhost:5173`.

### Deployment

To build the app for production, run:
```bash
npm run build
```

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Contact

If you have any questions or feedback, feel free to reach out:
- **GitHub**: [TBS96](https://github.com/TBS96)
- **Email**: 9tbs6@proton.me

---

*Happy Blogging!*


<!-- ## Packages to be installed:

```bash
npm i @reduxjs/toolkit
```
```bash
npm i react-redux
```
```bash
npm i react-router-dom
```
```bash
npm i appwrite
```
```bash
npm i @tinymce/tinymce-react
```
```bash
npm i html-react-parser
```
```bash
npm i react-hook-form
```
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
```bash
npm i react-loading-indicators
```
```bash
npm i -D daisyui@latest
```
- ### Inline:
```bash
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form react-loading-indicators
``` -->