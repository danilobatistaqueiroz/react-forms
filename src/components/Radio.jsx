import './Radio.css'
import PropTypes from 'prop-types';

const Radio = ({id,pergunta,active,options,onChange}) => {
  if (active == false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option, index) => (
        <label key={`radio${index}`}>
          <input type="radio" id={`radio${index}`} name={id} value={option} onChange={onChange} />{option}
        </label>
      ))}
    </fieldset>
  )
}
Radio.propTypes = {
  pergunta: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default Radio
