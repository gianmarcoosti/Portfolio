import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LearningCurve = () => {
  // Learning curve data extracted from your code
  const data = [
    { size: "10%", training: 100, validation: 91.2 },
    { size: "20%", training: 99.8, validation: 93.4 },
    { size: "30%", training: 99.6, validation: 94.5 },
    { size: "40%", training: 99.3, validation: 95.2 },
    { size: "50%", training: 99.1, validation: 95.8 },
    { size: "60%", training: 98.9, validation: 96.3 },
    { size: "70%", training: 98.7, validation: 96.7 },
    { size: "80%", training: 98.5, validation: 97.1 },
    { size: "90%", training: 98.3, validation: 97.2 },
    { size: "100%", training: 98.1, validation: 97.4 },
  ];

  // Custom tooltip to ensure it displays properly
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ 
          backgroundColor: '#2a2a40', 
          padding: '10px', 
          border: 'none', 
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
          color: '#fff' 
        }}>
          <p className="label" style={{ margin: '0 0 5px 0' }}>{`Training Size: ${label}`}</p>
          <p style={{ margin: '0', color: '#a78bfa' }}>{`Training: ${payload[0].value.toFixed(1)}%`}</p>
          <p style={{ margin: '0', color: '#4ade80' }}>{`Validation: ${payload[1].value.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{padding: '2rem 2rem 2rem 2rem', backgroundColor: '#1a1a2e', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
        <div className="w-full max-w-lg p-4 rounded-lg" style={{ backgroundColor: '#1a1a2e' }}>
          <h3 className="heading-sm mb-30 text-white">Learning Curves - Random Forest Model</h3>
          <ResponsiveContainer width="100%" height={550}>
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis 
                dataKey="size" 
                label={{ value: 'Training Set Size', position: 'insideBottom', offset: -20, fill: '#fff' }} 
                tick={{ fill: '#fff' }}
              />
              <YAxis 
                domain={[90, 100]} 
                label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', fill: '#fff' }} 
                tick={{ fill: '#fff' }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#666', strokeWidth: 1 }} />
              <Legend 
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                wrapperStyle={{
                  paddingTop: 30,
                  paddingLeft: 30,
                  paddingRight: 10,
                }}
                formatter={(value, entry) => (
                  <span style={{ marginRight: 40, color: '#fff' }}>{value}</span>
                )}
              />
              <Line 
                type="monotone" 
                dataKey="training" 
                stroke="#a78bfa" 
                name="Training Accuracy" 
                activeDot={{ r: 8, stroke: '#a78bfa', strokeWidth: 2, fill: '#1a1a2e' }} 
                dot={{ stroke: '#a78bfa', strokeWidth: 2, fill: '#1a1a2e', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="validation" 
                stroke="#4ade80" 
                name="Validation Accuracy" 
                activeDot={{ r: 8, stroke: '#4ade80', strokeWidth: 2, fill: '#1a1a2e' }}
                dot={{ stroke: '#4ade80', strokeWidth: 2, fill: '#1a1a2e', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="wysiwyg mt-30 text-white">
            <p>The learning curve shows how model performance improves as training data increases. The narrowing gap between training and validation accuracy indicates the model generalizes well.</p>
          </div>
        </div>
      </div>
  );
};

export default LearningCurve;