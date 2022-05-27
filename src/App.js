import React from 'react';
import Data from './Data/Data';
import Error from './Error/Error';
import Loading from './Loading/Loading';

export default function App() {
    return (
        <>
        <div className="App">
            <Data url={`${process.env.REACT_APP_URL}/data`} />
            <Error url={`${process.env.REACT_APP_URL}/error`} />
            <Loading url={`${process.env.REACT_APP_URL}/loading`} />
      </div>
       </>
    );
}
