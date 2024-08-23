import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'June',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'July',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'August',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'September',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'October',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'November',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'December',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#1f8ef1" fill="#1f8ef1" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
