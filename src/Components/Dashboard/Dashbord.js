import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashbord = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    const rangeData = [
      {
        "day": "05-01",
        "temperature": [
          -1,
          10
        ]
      },
      {
        "day": "05-02",
        "temperature": [
          2,
          15
        ]
      },
      {
        "day": "05-03",
        "temperature": [
          3,
          12
        ]
      },
      {
        "day": "05-04",
        "temperature": [
          4,
          12
        ]
      },
      {
        "day": "05-05",
        "temperature": [
          12,
          16
        ]
      },
      {
        "day": "05-06",
        "temperature": [
          5,
          16
        ]
      },
      {
        "day": "05-07",
        "temperature": [
          3,
          12
        ]
      },
      {
        "day": "05-08",
        "temperature": [
          0,
          8
        ]
      },
      {
        "day": "05-09",
        "temperature": [
          -3,
          5
        ]
      }
    ]
      
    return (
        <div className='chart'>
      <div>
      <LineChart width={300} height={400} data={data}>
            <Line dataKey={'investment'}></Line>
            
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>

        </LineChart>
      </div>


      <div>
      <AreaChart
  width={730}
  height={250}
  data={rangeData}
  margin={{
    top: 20, right: 20, bottom: 20, left: 20,
  }}
>
  <XAxis dataKey="day" />
  <YAxis />
  <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
  <Tooltip />
</AreaChart>
      </div>

        </div>

        
    );
};

export default Dashbord;