import React from 'react';

import { LoadingPage } from './style';

import LoadingGif from '../../assets/loadingGif';

function Loading() {
  return ( 
    <LoadingPage>
      <LoadingGif />
    </LoadingPage>
   );
}
 
export default Loading;