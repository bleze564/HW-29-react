import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';
export function SearchBox() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
}
