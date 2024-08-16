import { createContext, useState } from "react";
import PropTypes from "prop-types";

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleLoading = (isLoading = true) => {
    setError(null);
    setLoading(isLoading);
  };

  const logErrors = (isError = null) => {
    setError(isError);
    if (isError) setLoading(false);
  };

  return (
    <APIContext.Provider value={{ isLoading, error, toggleLoading, logErrors }}>
      {children}
    </APIContext.Provider>
  );
};

APIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default APIContext;
