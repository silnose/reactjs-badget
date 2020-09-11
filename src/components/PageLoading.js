import React from "react";
import Loader from "react-loader-spinner";

const PageLoading = () => {
  return (
    <div className='text-center'>
      <Loader type='ThreeDots' color='#2BAD60' height='100' width='100' />
    </div>
  );
};

export default PageLoading;
