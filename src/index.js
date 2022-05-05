import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from "./components/Quiz.js"
import { QuizProvider } from './context/quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);

