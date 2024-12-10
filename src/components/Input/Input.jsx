import PropTypes from 'prop-types';
import "./Input.css"

export default function Input({placeholder, type, onChange}) {
  return <input className="input" type={type} placeholder={placeholder} onChange={onChange}/>
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}