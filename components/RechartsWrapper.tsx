import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell, AreaChart, Area } from 'recharts';

interface ChartProps {
  type: 'mood' | 'tasks';
  data: any[];
}

export const RechartsWrapper: React.FC<ChartProps> = ({ type, data }) => {
  if (type === 'mood') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#94a3b8' }} 
            dy={10}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={12}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#13b6ec' : '#d1fae5'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  // Task/Progress Area Chart
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#13b6ec" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#13b6ec" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#94a3b8' }} 
            dy={10}
        />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#13b6ec" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};