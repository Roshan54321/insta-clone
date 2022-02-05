import React from 'react'
import Header from './Header';

export default function ErrorPage() {
    return (
        <>
        <Header/>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                <span><strong>Sorry, this page isn't available.</strong></span>
                <p style={{ padding: '15px' }}>The link you followed may be broken, or the page may have been removed. Go back to Instagram.</p>
            </div>
        </>
    )
}
