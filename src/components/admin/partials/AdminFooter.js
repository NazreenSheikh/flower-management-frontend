import moment from 'moment'
import React, { Fragment } from 'react'

const AdminFooter = (props) => {
    return (
        <Fragment>
            <footer
                style={{ background: '#303031', color: '#87898A' }}
                className="z-10 px-4 py-6 text-center md:px-12"
            >
                BloomsBay © Copyright {moment().format('YYYY')}
            </footer>
        </Fragment>
    )
}

export default AdminFooter
