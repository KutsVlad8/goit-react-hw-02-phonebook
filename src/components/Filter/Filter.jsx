import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
