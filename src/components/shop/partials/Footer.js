import moment from 'moment'
import React, { Fragment } from 'react'

const Footer = (props) => {
    return (
        <Fragment>
            <footer
                style={{ background: '#303031', color: '#87898A' }}
                className="z-10 py-6 px-4 md:px-12 text-center"
            >
                Blooms Bay © Copyright {moment().format('YYYY')}
            </footer>
        </Fragment>
    )
}

export default Footer
