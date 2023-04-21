const { createSlice } = require('@reduxjs/toolkit');

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currencySymbol: "$",
        currencyName: "CAD",
        currencyRate: 1
    },
    reducers: {
        setCurrency(state, action) {
            const currencyName = action.payload;

            if (currencyName === "CAD") {
                return state = {
                    currencySymbol: "$",
                    currencyRate: 1,
                    currencyName
                };
            }
            if (currencyName === "EUR") {
                return state = {
                    currencySymbol: "€",
                    currencyRate: 0.68,
                    currencyName
                };
            }
            if (currencyName === "GBP") {
                return state = {
                    currencySymbol: "£",
                    currencyRate: 0.6,
                    currencyName
                };
            }
        }
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
