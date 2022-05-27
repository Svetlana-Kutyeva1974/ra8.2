import PropTypes from 'prop-types';
import React from 'react';
import './Loading.css';
import useJsonFetch from '../hook/useJsonFetch';

function Loading({ url }) {
  const [{data, loading, error}] = useJsonFetch(url);

  console.log('useJsonFetch ---', data,  loading, error);

  return (
    <div className="load">
      {(loading && !error) ? <div>Loading ...</div> : <div>{`Loading: Load success`} </div> }
    </div>
  )

}

Loading.propTypes = {
  url: PropTypes.string.isRequired
}

export default Loading;
