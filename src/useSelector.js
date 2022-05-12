import useStore from './useStore';

function useSelector(fn) {
  const store = useStore();
  const storeState = store.getState();

  return fn(storeState);
}

export default useSelector;
