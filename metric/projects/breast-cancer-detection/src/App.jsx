import React from 'react';
import ModelComparisonChart from './components/ModelComparisonChart.jsx';
import LearningCurve from './components/LearningCurveVisualization.jsx';
import ConfusionMatrix from './components/ConfusionMatrixVisualization.jsx';
import FeatureImportanceChart from './components/FeatureImportanceVisualization.jsx';
import './assets/main_ver=b512eba7d4e7778c7f248891fb5d7d86.css'; // Import CSS file

const App = () => {
  return (
    <div>
      <h1>Breast Cancer Detection Model</h1>
      <ModelComparisonChart />
      <LearningCurve />
      <ConfusionMatrix />
      <FeatureImportanceChart />
    </div>
  );
};

export default App;