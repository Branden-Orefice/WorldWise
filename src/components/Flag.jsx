import styles from "./Flag.module.css";

function Flag({ countryCode }) {
  if (!countryCode) return null;

  countryCode = countryCode.toLowerCase();
  const BASE_URL = `https://flagcdn.com/${countryCode}.svg`;

  return (
    <img
      className={styles.flag}
      src={BASE_URL}
      alt={`Flag of ${countryCode}`}
    />
  );
}

export default Flag;
