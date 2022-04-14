import React, { Dispatch, SetStateAction, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import getForecast from "../../hooks/getForecast";

interface props {
  setData: (value: object) => void;
}

const Form = ({ setData }: props) => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setData(await getForecast(location, setLoading));
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
