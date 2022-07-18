import React from "react";
import { Url } from "url";

// interface User {
//     email?: string
//     name: string
//     avatar?: Url
// }

const userContext = React.createContext({user: {}})

export { userContext }
// export type { User }