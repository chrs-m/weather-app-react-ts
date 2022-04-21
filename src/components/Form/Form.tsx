import React, { useState } from "react";
import styles from "../../styles/Scss/Form.module.scss";
import getForecast from "../../hooks/getForecast";

interface props {
  setData: (value: object) => void;
  setError: (value: String) => void;
  setLoading: (value: boolean) => void;
}

const Form = ({ setData, setLoading, setError }: props) => {
  const [location, setLocation] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response = await getForecast(location, setLoading);

    if (!response) {
      setError("Something went wrong");
      return;
    }

    setData(response);
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
