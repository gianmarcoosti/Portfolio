import React from 'react';
import { createRoot } from 'react-dom/client';
import FeatureImportanceVisualization from './components/FeatureImportanceVisualization';
import ModelComparisonChart from './components/ModelComparisonChart';
import ConfusionMatrixVisualization from './components/ConfusionMatrixVisualization';
import LearningCurveVisualization from './components/LearningCurveVisualization';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mount each component to its respective container
  const mountPoints = window.visualizationConfig?.mountPoints || {
    featureImportance: 'FeatureImportanceVisualization',
    modelComparison: 'ModelComparisonChart',
    confusionMatrix: 'ConfusionMatrixVisualization',
    learningCurve: 'LearningCurveVisualization'
  };

  // Mount Feature Importance
  const featureImportanceContainer = document.getElementById(mountPoints.featureImportance);
  if (featureImportanceContainer) {
    const featureImportanceRoot = createRoot(featureImportanceContainer);
    featureImportanceRoot.render(
      <React.StrictMode>
        <FeatureImportanceVisualization />
      </React.StrictMode>
    );
  }

  // Mount Model Comparison
  const modelComparisonContainer = document.getElementById(mountPoints.modelComparison);
  if (modelComparisonContainer) {
    const modelComparisonRoot = createRoot(modelComparisonContainer);
    modelComparisonRoot.render(
      <React.StrictMode>
        <ModelComparisonChart />
      </React.StrictMode>
    );
  }

  // Mount Confusion Matrix
  const confusionMatrixContainer = document.getElementById(mountPoints.confusionMatrix);
  if (confusionMatrixContainer) {
    const confusionMatrixRoot = createRoot(confusionMatrixContainer);
    confusionMatrixRoot.render(
      <React.StrictMode>
        <ConfusionMatrixVisualization />
      </React.StrictMode>
    );
  }

  // Mount Learning Curve
  const learningCurveContainer = document.getElementById(mountPoints.learningCurve);
  if (learningCurveContainer) {
    const learningCurveRoot = createRoot(learningCurveContainer);
    learningCurveRoot.render(
      <React.StrictMode>
        <LearningCurveVisualization />
      </React.StrictMode>
    );
  }
});