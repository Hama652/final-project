//one place for the backend url - change only here when deploying
//locally it uses localhost; on deploy set REACT_APP_API_URL in the host settings
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export default API_URL
