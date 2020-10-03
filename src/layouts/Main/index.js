import React from 'react'
import PropTypes from 'prop-types'

import css from './main.module.scss'

// Components
import Navbar from 'components/Navbar'

const MainLayouts = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Navbar />
      {children}
    </div>
  )
}

MainLayouts.defaultProps = {
  children: '<div />',
}

MainLayouts.propTypes = {
  children: PropTypes.node,
}

export default MainLayouts
