import React, { useState } from "react";
import styles from "../styles/Scss/Form.module.scss";
import getForecast from "../hooks/getForecast";

interface props {
  setData: (value: object) => void;
  setError: (value: String) => void;
  setLoading: (value: boolean) => void;
}

const Form = ({ setData, setLoading, setError }: props) => {
  const [location, setLocation] = useState("");

  const onSubmit = async (e: any) => {
    setError("");

    e.preventDefault();

    if (location.length <= 3) {
      setError("Please enter a valid location");
      return;
    }

    const response = await getForecast(location, setLoading);

    if (!response) {
      setError("Something went wrong, please try again.");
      return;
    }

    if (response) {
      setData(response);
      setError("");
    }
  };

  return (
    <form>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Search city"
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
