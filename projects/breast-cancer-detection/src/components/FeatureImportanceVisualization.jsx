import React, { useState } from 'react';

const FeatureImportanceChart = () => {
  const featureData = [
    { feature: "radius_worst", importance: 0.27 },
    { feature: "perimeter_worst", importance: 0.25 },
    { feature: "area_worst", importance: 0.22 },
    { feature: "concave points_worst", importance: 0.18 },
    { feature: "concave points_mean", importance: 0.16 },
    { feature: "concavity_mean", importance: 0.15 },
    { feature: "texture_worst", importance: 0.12 },
    { feature: "area_mean", importance: 0.11 },
    { feature: "concavity_worst", importance: 0.10 },
    { feature: "radius_mean", importance: 0.09 }
  ].sort((a, b) => b.importance - a.importance);
  
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const maxImportance = Math.max(...featureData.map(d => d.importance));
  
  return (
    <div style={{ padding: '1rem 2rem 2rem 2rem', backgroundColor: '#1a1a2e', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'}}>
      <h3 className="heading-sm mb-30 text-white">Top 10 Feature Importance - Random Forest Model</h3>
      <div>
        {featureData.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              marginBottom: '1.5rem',
              transform: hoveredFeature === index ? 'translateX(10px)' : 'translateX(0)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="text-white" style={{ 
                fontSize: '1.4rem', 
                fontWeight: '500',
                color: hoveredFeature === index ? '#a78bfa' : 'white'
              }}>{item.feature}</span>
              <span className="text-white" style={{ 
                fontSize: '1.4rem', 
                fontWeight: '500',
                color: hoveredFeature === index ? '#a78bfa' : 'white'
              }}>{(item.importance * 100).toFixed(1)}%</span>
            </div>
            <div style={{ width: '100%', height: '12px', backgroundColor: '#2a2a40', borderRadius: '9999px', overflow: 'hidden' }}>
              <div 
                style={{
                  width: `${(item.importance / maxImportance) * 100}%`,
                  height: '100%',
                  backgroundColor: hoveredFeature === index ? '#c4b5fd' : '#a78bfa',
                  borderRadius: '9999px',
                  transition: 'width 1s ease-out, background-color 0.3s ease'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="wysiwyg mt-30 text-white">
        <p>Features like radius_worst, perimeter_worst, and area_worst have the highest influence on breast cancer prediction. These measurements represent the most extreme (largest) values of cell nuclei characteristics.</p>
      </div>
    </div>
  );
};

export default FeatureImportanceChart;