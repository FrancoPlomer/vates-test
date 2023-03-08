import { memo, useState } from "react"
import AccessContext from "store/context";

const DashboardProvider = memo(({ children }) => {
    const [ List, setList ] = useState([]);

    return <AccessContext.Provider value={{ List, setList }}> { children } </AccessContext.Provider>
})

export default DashboardProvider;