import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
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

    const bardata = [
        {
          "name": "Page A",
          "price": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "price": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "price": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "price": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "price": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "price": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "price": 3490,
          "pv": 4300
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
          <BarChart width={300} height={400} bardata={bardata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Bar dataKey={'name'} fill={'#8884d9'}></Bar>
          <Bar dataKey={'pv'} fill='#8884d9'></Bar>
          <Bar dataKey={'price'} fill='#82ca9d'></Bar>
          </BarChart>
      </div>

        </div>

        
    );
};

export default Dashbord;