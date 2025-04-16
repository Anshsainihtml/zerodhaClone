import React from 'react'
import WatchList from './WatchList'
import { Route, Routes } from 'react-router-dom'
import Summary from './Summary'
import Orders from './Orders'
import Holding from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import App from '../App'
import Apps from './Apps'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <WatchList />
        <div className='content'>
            <Routes>
                <Route   path='/' element={<Summary />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/holdings' element={<Holding />} />
                <Route path='/positions' element={<Positions />} />
                <Route path='/funds' element={<Funds />} />
                <Route path='/apps' element={<Apps />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
