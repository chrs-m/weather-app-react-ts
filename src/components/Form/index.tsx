import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import getForecast from "../../hooks/Forecast";

const Form = ({}) => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    getForecast(location, setLoading);
  };

  if (loading) return <p>Loading weather...</p>;

  return (
    <form>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Search location"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit" className={styles.button} onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Form;
