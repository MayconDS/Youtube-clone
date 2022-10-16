import { createContext, useReducer } from "react";

export const YoutubeContext = createContext();

const STAGES = ["YT"];

const initialState = {
  appStage: STAGES[0],
  search: "Caracol Raivoso",
  idVideo: "kgx4WGK0oNU",
  dataItems: [],
};

const youtubeReduce = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };
    case "SET_ID_VIDEO": {
      return { ...state, idVideo: action.payload.idVideo };
    }
    case "SET_DATA_ITEMS": {
      return { ...state, dataItems: action.payload.dataItems };
    }
    default:
      return state;
  }
};

export const YoutubeProvider = ({ children }) => {
  const value = useReducer(youtubeReduce, initialState);

  return (
    <YoutubeContext.Provider value={value}>{children}</YoutubeContext.Provider>
  );
};
