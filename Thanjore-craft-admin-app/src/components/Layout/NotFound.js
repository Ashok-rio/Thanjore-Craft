import React from 'react'

const  NotFound = () => {
    return (
        <React.Fragment>
            <div style={{ width: '100%', height:'1000px',textAlign: 'center', padding: '5%' , backgroundColor:'black',color:'white'}}>
            <p style={{ fontSize: '25px'}} >Not Found</p>
                <p style={{ fontSize: '25rem' }}>404</p>
                <p style={{ fontSize: '20px' }} >Take me back to <a href={'/login'}>ThanjoreCraft.com</a></p>
                </div>
        </React.Fragment>
    )
}

export default NotFound
