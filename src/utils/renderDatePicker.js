import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const renderDatePicker = (props) => {
    const {
        input,
        tips,
        label,
        required,
        meta: {touched, error, warning},
    } = props;
    return (
        <React.Fragment>
            {label && (
                <label
                    className={`form-label ${required ? "required" : ""}`}
                    htmlFor={input.name}
                >
                    {label}
                </label>
            )}
            <br/>
            <DatePicker
                {...input}
                dateFormat="yyyy-MM-dd"
                selected={input.value ? new Date(input.value) : null}
                onChange={input.onChange}
                className="form-control"
            />
            {tips && <div className="form-text">{tips}</div>}
            {touched &&
                ((error && <div className="invalid-feedback">{error}</div>) ||
                    (warning && <span>{warning}</span>))}
        </React.Fragment>
    );
};

export default renderDatePicker;