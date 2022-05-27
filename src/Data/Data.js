import React from 'react'
import PropTypes from 'prop-types'
import './Data.css'
import useJsonFetch from '../hook/useJsonFetch';
import {nanoid} from 'nanoid';

function Data({url}) {
  const [{data, loading, error}] = useJsonFetch(url);
  const data2 = (data !== null ? data : {text: 'Загружено'});// example

  const entries = Object.entries(data2);
  let obj = [];
  for (const [key, value] of entries) {
    console.log('key value\n', key, value);
    obj.push(<div key={nanoid()}>{value}</div>);
  }

  if(loading){
    return<div>Loading info...</div>
  }

  if(error){
    <div>{error.text}</div>
  }

  return (
    <div className='details-item'>
      {obj}
    </div>
  )
}

Data.propTypes = {
  url: PropTypes.string.isRequired
}

export default Data;