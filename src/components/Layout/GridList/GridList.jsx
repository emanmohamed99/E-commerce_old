import React from 'react';
import styles from "./GridList.module.css"

import Loading from '../../Loading/Loading';
const GridList = ({data,loading,error,renderChild}) => {
    const {grid}=styles;
    const renderItems=
    data.length>0? data.map((record) =>renderChild(record))
    :"there is no record avalible"
  return (
  <Loading loading={loading} error={error}>
    <div className={grid}> {
      renderItems
  }
    </div>
    </Loading>
  );
}

export default GridList;
