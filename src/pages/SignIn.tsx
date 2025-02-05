import { Field } from "redux-form";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
    required,
    maxLength20,
    minLength8,
    maxLengthMobileNo,
    minLengthMobileNo,
    digit,
} from "../../utils/validation";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";

export default function SignInForm(props){
    const { handleSubmit, submitting, onSubmit, submitFailed } = props;
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
            noValidate
        >
            <Field
                name="email"
                type="string"
                label="Email"
                component={renderFormGroupField}
                placeholder="Email address (ex. twistedspur67@gmail.com)"
                icon={IconShieldLock}
                validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
                required={true}
                className="mb-3"
            />
            <Field
                name="password"
                type="password"
                label="Your password"
                component={renderFormGroupField}
                placeholder="******"
                icon={IconShieldLock}
                validate={[required, maxLength20, minLength8]}
                required={true}
                maxLength="20"
                minLength="8"
                className="mb-3"
            />
            <div className="d-grid">
                <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    disabled={submitting}
                >
                    Log In
                </button>
            </div>
            <Link className="float-start" to="/account/signup" title="Sign Up">
                Create your account
            </Link>
            <Link
                className="float-end"
                to="/account/forgotpassword"
                title="Forgot Password"
            >
                Forgot password?
            </Link>
            <div className="clearfix"></div>
            <hr></hr>
            <div className="row">
                <div className="col- text-center">
                    <p className="text-muted small">Or you can sign in with</p>
                </div>
                <div className="col- text-center">
                    <Link to="/" className="btn btn-light text-white bg-twitter me-3">
                        <i className="bi bi-twitter-x" />
                    </Link>
                    <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
                        <i className="bi bi-facebook mx-1" />
                    </Link>
                    <Link to="/" className="btn btn-light text-white me-3 bg-google">
                        <i className="bi bi-google mx-1" />
                    </Link>
                </div>
            </div>
        </form>
    );
};
