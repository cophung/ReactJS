import React from 'react'
import { LevelContext } from './LevelContext'

const Section = ({ level, children }) => {
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}

export default Section