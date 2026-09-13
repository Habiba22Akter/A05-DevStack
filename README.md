# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive React application where developers can explore popular technologies and create their own development stack.

Users can browse frontend, backend, database, language, styling and DevOps technologies, add them to a personal stack, remove individual items and clear the whole stack.

## 🌐 Live Demo

Live Website: https://ubiquitous-wisp-d3c212.netlify.app/#contact

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON

## ✨ Features

1. Explore 12 popular development technologies loaded from a local JSON file.
2. Add, remove and clear technologies from the Your Stack panel with Toastify notifications.
3. Fully responsive UI with sticky navbar, mobile menu, loading state and shared gradient theme.

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to read and write.

## 2. What is the difference between props and state?

Props pass data from a parent component to a child component. State stores changing data inside a component.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores and updates component data. I used it for technologies, selected technologies, loading state and the mobile menu.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side-effect code after rendering. I used it to fetch `/data.json` when the app first loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list item changed, was added or was removed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In Your Stack, an empty message appears when no technology is selected; otherwise selected items are shown.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props. A child can call a callback function passed through props to send an action or value back to the parent.

## 🚀 Run Locally

```bash
npm install
npm run dev
```
