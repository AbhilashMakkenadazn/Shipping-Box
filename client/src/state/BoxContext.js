import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5050"; // ✅ You can also load from .env

const BoxContext = createContext();

const initialState = {
  boxes: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, boxes: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };
    case "ADD_BOX":
      return { ...state, boxes: [...state.boxes, action.payload] };
    default:
      return state;
  }
}

export function BoxProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBoxes = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(`${API_URL}/api/boxes`);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", error: err.message });
    }
  };

  const addBox = async (box) => {
    const res = await axios.post(`${API_URL}/api/boxes`, box);
    dispatch({ type: "ADD_BOX", payload: res.data });
  };

  useEffect(() => {
    fetchBoxes();
  }, []);

  return (
    <BoxContext.Provider value={{ ...state, addBox }}>
      {children}
    </BoxContext.Provider>
  );
}

export default BoxContext;
