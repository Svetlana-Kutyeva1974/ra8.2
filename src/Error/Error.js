import './Error.css';
import PropTypes from 'prop-types'
import useJsonFetch from '../hook/useJsonFetch';

function Error({ url }) {
  const [{data, loading, error}] = useJsonFetch(url);
  console.log(data,loading,error);
  return (
    <div className='details-list'>
      {error && <div>{`Error: ${error.text}`}</div>}
    </div>
  )

}

Error.propTypes = {
  url: PropTypes.string.isRequired
}

export default Error;
