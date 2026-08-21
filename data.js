import { createIcons, icons } from 'lucide';

// We map out the data visually via main.js
export const skills = [
  { name: 'Python', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TensorFlow', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OpenCV', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
  { name: 'scikit-learn', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'Pandas', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  { name: 'Matplotlib', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Matplotlib_logo.svg' },
  { name: 'Seaborn', logoUrl: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
  { name: 'Power BI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Tableau', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png' },
  { name: 'SQL', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'PyTorch', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'Keras', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg' },
  { name: 'Jupyter', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
  { name: 'Git', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
];

export const projects = [
  {
    title: 'Linear Regression House Pricing',
    description: 'Linear Regression model for house price prediction. Explores basic predictive modeling and data wrangling.',
    image: './assets/linear_regression.png',
    tech: ['Python', 'scikit-learn', 'Pandas'],
    github: 'https://github.com/Abhisheknath25/PRODIGY_ML_01'
  },
  {
    title: 'Customer Segmentation',
    description: 'Segment Retail Customers Using K-Means. Applies clustering algorithms to discover hidden patterns in retail data.',
    image: './assets/customer_segmentation.png',
    tech: ['Python', 'K-Means', 'NumPy'],
    github: 'https://github.com/Abhisheknath25/PRODIGY_ML_02'
  },
  {
    title: 'Cat vs Dog Classifier',
    description: 'Support Vector Machine (SVM) combined with OpenCV to accurately classify images of cats and dogs.',
    image: './assets/cat_dog_classifier.png',
    tech: ['Python', 'OpenCV', 'SVM'],
    github: 'https://github.com/Abhisheknath25/PRODIGY_ML_03'
  },
  {
    title: 'Hand Gesture Recognition',
    description: 'A deep learning-based hand gesture recognition system for intuitive human-computer interaction.',
    image: './assets/hand_gesture.png',
    tech: ['Python', 'TensorFlow', 'Deep Learning'],
    github: 'https://github.com/Abhisheknath25/PRODIGY_ML_04'
  },
  {
    title: 'CNN Digit Recognizer',
    description: 'Convolutional Neural Network model for recognizing handwritten digits using deep learning.',
    image: './assets/cnn_digit.jpg',
    tech: ['Python', 'TensorFlow', 'Deep Learning'],
    github: 'https://github.com/Abhisheknath25/CNN-Digit-Recognizer'
  },
  {
    title: 'NLP Emotion Analysis',
    description: 'Natural Language Processing model to analyze emotions and sentiment from text data.',
    image: './assets/nlp_emotion.jpg',
    tech: ['Python', 'NLP', 'Machine Learning'],
    github: 'https://github.com/Abhisheknath25/NLP-emotion-analysis'
  },
  {
    title: 'Artificial Neural Networks',
    description: 'Deep Learning project exploring Artificial Neural Networks (ANN) architecture.',
    image: './assets/ann_project.jpg',
    tech: ['Python', 'Deep Learning', 'ANN'],
    github: 'https://github.com/Abhisheknath25/Ann-Project'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Machine learning based system to recommend movies to users based on preferences and ratings.',
    image: './assets/movie_recommendation.jpg',
    tech: ['Python', 'Machine Learning'],
    github: 'https://github.com/Abhisheknath25/Movie-Recommendation-System'
  },
  {
    title: 'Fraud Detection System',
    description: 'Anomaly detection model for identifying fraudulent transactions in financial data.',
    image: './assets/fraud_detection.jpg',
    tech: ['Python', 'Machine Learning', 'Anomaly Detection'],
    github: 'https://github.com/Abhisheknath25/-fraud-detection'
  }
];

export const contacts = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/Abhisheknath25', 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.23 4.2 4.2 0 0 0 -.1-3.2s-1.1-.35-3.5 1.3a12 12 0 0 0-6 0C6.1 1.05 5 1.4 5 1.4a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.5 7.82c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 2.98V22"/><path d="M3 20s-1 0-1-2"/></svg>` 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/abhisheknath18', 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>` 
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/abh1shek.nath', 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>` 
  },
  { 
    name: 'Call', 
    url: 'tel:8457071638', 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` 
  }
];
