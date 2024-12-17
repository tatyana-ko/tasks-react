import { useState } from "react";
import PropTypes from "prop-types";
import "./UserProfileForm.css";

export default function UserProfileForm({ onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleCheckboxChange = (evt) => {
    switch (evt.target.name) {
      case "smsNotifications":
        setSmsNotifications((prevState) => !prevState);
        break;

      case "emailNotifications":
        setEmailNotifications((prevState) => !prevState);
        break;

      default:
        return;
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "phone":
        setPhone(value);
        break;

      case "email":
        setEmail(value);
        break;

      default:
        return;
    }

    handleFormValidation(name, value);
    validate();
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit({
      name,
      phone,
      email,
      emailNotifications,
      smsNotifications,
    });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setEmailNotifications(initialData.emailNotifications);
    setSmsNotifications(initialData.smsNotifications);
  };

  //для ошибок
  const handleFormValidation = (name, value) => {
    const validateEmail = (mail) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(mail);
    };
  
    const validatePhone = (phone) => {
      const phonePattern = /^\+1[0-9]{8}$/;
      return phonePattern.test(phone);
    };


    if (name === "name" && !value.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Field cannot be blank.",
      }));
    } else if ((name === "name" && value.length < 3) || value.length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        name: "The name must be at least 3 and up to 15 characters long.",
      }));
    } else if (name === "email" && !validateEmail(value)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email.",
      }));
    } else if (name === "phone" && !validatePhone(value)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid phone number (example: +123456789).",
      }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: "" }));
    }
  };

  //для активации кнопки
  const validate = () => {
    const validateName = (name) => {
      if (name.trim() === "") {
        return false;
      }
      if (name.length < 3) {
        return false;
      }
      if (name.length > 15) {
        return false;
      }
      return true;
    };

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
      const phoneRegex = /^\+1[0-9]{7}$/;
      return phoneRegex.test(phone);
    };

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    setDisabled(isNameValid && isEmailValid && isPhoneValid);
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmitForm}>
        <div className="form-section">
          <h3>Contact Information</h3>
          <fieldset className="form-field">
            <label htmlFor="displayName">Name * </label>
            <input
              type="text"
              id="displayName"
              name="name"
              required
              value={name}
              placeholder={initialData.displayName}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label htmlFor="email">Email * </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              placeholder={initialData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="tel">Phone number * </label>
            <input
              type="tel"
              id="tel"
              name="phone"
              required
              value={phone}
              placeholder={initialData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </fieldset>
        </div>

        <div className="form-section">
          <h3>Notification Preferences</h3>
          <fieldset className="form-field">
            <label htmlFor="emailNotifications">Email notifications: </label>
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={emailNotifications}
              onChange={handleCheckboxChange}
            />

            <label htmlFor="smsNotifications">Sms notifications: </label>
            <input
              type="checkbox"
              id="smsNotifications"
              name="smsNotifications"
              checked={smsNotifications}
              onChange={handleCheckboxChange}
            />
          </fieldset>
        </div>

        <div className="form-preview">
          <h3>Preview</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>
            Sms Notifications: {smsNotifications ? "allowed" : "not allowed"}
          </p>
          <p>
            Email Notifications:{" "}
            {emailNotifications ? "allowed" : "not allowed"}
          </p>
        </div>

        <div className="form-actions">
          <button className="button" type="submit" disabled={!disabled}>
            Submit
          </button>
          <button className="button" type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

UserProfileForm.propTypes = {
  initialData: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    emailNotifications: PropTypes.bool,
    smsNotifications: PropTypes.bool,
  }),
  onSubmit: PropTypes.func,
};
