import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import PropTypes from "prop-types";
import { useReducer } from "react";

import { loginService } from "../services/authServices";

const initialState = {
  user: null,
};

const AuthState = ({ children }) => {
  const [globalState, dispatch] = useReducer(authReducer, initialState);

  const iniciarSesion = async (form) => {
    try {
      const resp = await loginService(form);
      // console.log(resp.data.data);
      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: globalState.user,
        iniciarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.PropTypes = {
  children: PropTypes.node,
};

export default AuthState;
