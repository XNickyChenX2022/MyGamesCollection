// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   searchQuery: localStorage.getItem("searchQuery")
//     ? JSON.parse(localStorage.getItem("searchQuery"))
//     : null,
// };

// const IGDBSlice = createSlice({
//   name: "igdb",
//   initialState,
//   reducers: {
//     search: (state, action) => {
//       state.searchQuery = action.payload;
//       localStorage.setItem("searchQuery", JSON.stringify(action.payload));
//     },
//   },
// });

// export const { search } = IGDBSlice.actions;
// export default IGDBSlice.reducer;
