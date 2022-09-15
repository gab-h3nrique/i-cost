import { createContext, useState } from "react";

export const BudgetContext = createContext({});

// export const BudgetProvider = ({ children }:any) => {

//     const [budget, setBudget] = useState({});

//     const addBudget = (budgetId:Object) => {
//         setBudget(budgetId)
//     }

//     return (
//         <BudgetContext.Provider value={{budget, addBudget}}>
//             {children}
//         </BudgetContext.Provider>
//     )

// }