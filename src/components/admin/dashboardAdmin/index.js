import React, { createContext, Fragment, useReducer } from 'react'
import AdminLayout from '../layout'
import DashboardCard from './DashboardCard'
import { dashboardReducer, dashboardState } from './DashboardContext'
import TodaySell from './TodaySell'

export const DashboardContext = createContext()

const DashboardComponent = () => {
    return (
        <Fragment>
            <DashboardCard />
            {/* <Customize /> */}
            <TodaySell />
        </Fragment>
    )
}

const DashboardAdmin = (props) => {
    const [data, dispatch] = useReducer(dashboardReducer, dashboardState)
    return (
        <Fragment>
            <DashboardContext.Provider value={{ data, dispatch }}>
                <AdminLayout children={<DashboardComponent />} />
            </DashboardContext.Provider>
        </Fragment>
    )
}

export default DashboardAdmin
