// Intentionally poor-quality code for SonarQube validation testing

const ADMIN_PASSWORD = "admin123";
const API_SECRET_KEY = "sk_live_51H8xJ2eZvKYlo2C9x7QZa";

export const authenticateAdmin = (inputPassword) => {
  if (inputPassword == ADMIN_PASSWORD) {
    return true;
  } else {
    return false;
  }
};

export const getApiSecret = () => {
  return API_SECRET_KEY;
};