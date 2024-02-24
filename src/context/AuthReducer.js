const reducer = (globalState, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...globalState,
        user: action.payload,
      };

    case "REGISTRAR_USUARIO":
      return {
        ...globalState,
        user: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
