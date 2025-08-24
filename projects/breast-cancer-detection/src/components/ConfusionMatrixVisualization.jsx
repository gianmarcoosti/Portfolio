import React from 'react';

const ConfusionMatrix = () => {
  const confusionMatrix = [
    [71, 2],  // True Negatives, False Positives
    [3, 38]   // False Negatives, True Positives
  ];
  
  const total = confusionMatrix.flat().reduce((sum, val) => sum + val, 0);
  const accuracy = ((confusionMatrix[0][0] + confusionMatrix[1][1]) / total * 100).toFixed(1);
  
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#1a1a2e',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      width: '100%',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '4px',
      marginBottom: '2rem'
    },
    trueNegative: {
      padding: '2rem',
      backgroundColor: '#0d4429',
      border: '1px solid #166534',
      textAlign: 'center'
    },
    falsePositive: {
      padding: '2rem',
      backgroundColor: '#7f1d1d',
      border: '1px solid #991b1b',
      textAlign: 'center'
    },
    falseNegative: {
      padding: '2rem',
      backgroundColor: '#7f1d1d',
      border: '1px solid #991b1b',
      textAlign: 'center'
    },
    truePositive: {
      padding: '2rem',
      backgroundColor: '#0d4429',
      border: '1px solid #166534',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <h3 className="heading-sm mb-30 text-white">Confusion Matrix - Random Forest Model</h3>
      <div style={styles.grid}>
        <div className="heading-sm text-white" style={{textAlign: 'center', padding: '0.5rem'}}>Predicted Benign</div>
        <div className="heading-sm text-white" style={{textAlign: 'center', padding: '0.5rem'}}>Predicted Malignant</div>
        
        <div style={styles.trueNegative}>
          <div className="heading-md text-white" style={{
            fontWeight: 'bold', 
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>{confusionMatrix[0][0]}</div>
          <div className="copy-sm text-white" style={{textAlign: 'center'}}>True Negative</div>
        </div>
        <div style={styles.falsePositive}>
          <div className="heading-md text-white" style={{
            fontWeight: 'bold', 
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>{confusionMatrix[0][1]}</div>
          <div className="copy-sm text-white" style={{textAlign: 'center'}}>False Positive</div>
        </div>
        
        <div style={styles.falseNegative}>
          <div className="heading-md text-white" style={{
            fontWeight: 'bold', 
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>{confusionMatrix[1][0]}</div>
          <div className="copy-sm text-white" style={{textAlign: 'center'}}>False Negative</div>
        </div>
        <div style={styles.truePositive}>
          <div className="heading-md text-white" style={{
            fontWeight: 'bold', 
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>{confusionMatrix[1][1]}</div>
          <div className="copy-sm text-white" style={{textAlign: 'center'}}>True Positive</div>
        </div>
      </div>
      
      <div className="wysiwyg mt-30 text-white">
        <p><strong>Accuracy:</strong> {accuracy}%</p>
        <p><strong>True Positives:</strong> {confusionMatrix[1][1]} correctly identified malignant cases</p>
        <p><strong>True Negatives:</strong> {confusionMatrix[0][0]} correctly identified benign cases</p>
        <p><strong>False Positives:</strong> {confusionMatrix[0][1]} benign cases incorrectly classified as malignant</p>
        <p><strong>False Negatives:</strong> {confusionMatrix[1][0]} malignant cases incorrectly classified as benign</p>
      </div>
    </div>
  );
};

export default ConfusionMatrix;