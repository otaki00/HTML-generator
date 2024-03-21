// import React from 'react'
import PropTypes from 'prop-types'
import './ButtonComponent.css'

const ButtonComponent = ({name, icon}) => {
  return (
    <button className='bg-slate-900 hover:bg-slate-700 text-sky-50 p-5 rounded  border-slate-500 border-2 text-2xl w-24 h-24  m-1'  >
        <i className={icon}></i>
        <p className='text-xs'>{name}</p>
    </button>
  )
}

ButtonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default ButtonComponent
