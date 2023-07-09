import { createContext, useState } from 'react'

const ConfigContext = createContext();

// eslint-disable-next-line
const ConfigProvider = ({ children }) => {
  const [value, setValue] = useState(null);

  const values = {
    value,
    setValue
  };

  return (
    <ConfigContext.Provider value={values}>
      {children}
    </ConfigContext.Provider>
  )
}

export { ConfigContext, ConfigProvider }