import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ModelComparisonChart = () => {
  // Data extracted from your results DataFrame
  const data = [
    {
      name: 'Logistic Regression',
      Accuracy: 95.6,
      F1: 94.1,
      Precision: 95.2,
      Recall: 93.0,
    },
    {
      name: 'Random Forest',
      Accuracy: 97.4,
      F1: 96.6,
      Precision: 97.8,
      Recall: 95.5,
    },
    {
      name: 'Optimized Logistic Regression',
      Accuracy: 96.5,
      F1: 95.3,
      Precision: 96.0,
      Recall: 94.7,
    },
  ];

  return (
    <div style={{ padding: '1rem 2rem 2rem 2rem', backgroundColor: '#1a1a2e', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'}}>
      <div className="w-full max-w-4xl p-4 rounded-lg" style={{ backgroundColor: '#1a1a2e' }}>
        <h3 className="heading-sm mb-30 text-white">Model Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12, fill: '#fff' }}/>
            <YAxis domain={[85, 100]} label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#fff' }} tick={{ fill: '#fff' }} />
            <Tooltip 
              formatter={(value) => `${value.toFixed(1)}%`} 
              contentStyle={{ backgroundColor: '#2a2a40', border: 'none', color: '#fff' }}
            />
            <Legend 
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: 50 }}
              formatter={(value, entry) => (
                <span style={{ color: '#fff', marginRight: 10 }}>{value}</span>
              )}
            />
            <Bar dataKey="Accuracy" fill="#a78bfa" />
            <Bar dataKey="F1" fill="#4ade80" />
            <Bar dataKey="Precision" fill="#fcd34d" />
            <Bar dataKey="Recall" fill="#fb923c" />
          </BarChart>
        </ResponsiveContainer>
        <div className="wysiwyg mt-4 text-white">
          <p>Random Forest achieved the highest performance across all metrics. The optimized Logistic Regression model showed improved performance over the baseline Logistic Regression model.</p>
        </div>
      </div>
    </div>
  );
};

export default ModelComparisonChart;