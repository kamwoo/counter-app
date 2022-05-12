import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

function useStore() {
  return useContext(ReactReduxContext).store;
}

export default useStore;
