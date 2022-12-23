
import './form-input.styles.scss'
const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="group">
        <input className="form-input"{...otherProps}/>
        {/* render label only if present in props () */}
        {label && (
            <label className={`${otherProps.value.length > 0? 'shrink':""} form-input-label`}>{label}</label>

        )}

    </div>
  );
};

export default FormInput;
