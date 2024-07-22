import { StyleSheet } from "react-native";

export const StyleDetalleCuenta = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  containerCodigo: {
    height: 50,
    paddingLeft: 20,
    justifyContent: "center",
    width: "100%",
  },
  textTittle: {
    fontSize: 30,
    fontWeight: "800",
  },
  textAument: {
    fontSize: 22,
    fontWeight: "800",
  },
  containerDescripcion: {
    width: "100%",
    padding: 20,
    paddingBottom: 5,
    justifyContent: "center",
    height: 150,
    marginBottom: 15,
  },
  textDescripcion: {
    fontSize: 18,
  },
  tittleDescripcion: {
    fontSize: 22,
    fontWeight: "800",
  },
  containerDC: {
    height: 500,
    width: "100%",
    flexDirection: "column",
    marginTop: 10,
  },
  //debitos y creditos
  debito: {
    width: "100%",
    alignItems: "center",
  },
  credito: {
    width: "100%",
    alignItems: "center",
  },
  textDC: {
    fontSize: 16,
    fontWeight: "400",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tittleCredito: {
    height: 30,
    fontSize: 25,
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontWeight: "800",
    paddingLeft: 20,
    color: "#89CFF3",
  },
  tittleDebito: {
    height: 30,
    fontSize: 25,
    width: "100%",
    textAlignVertical: "center",
    textAlign: "left",
    fontWeight: "800",
    paddingLeft: 20,
    color: "#872341",
  },

  //selector de pestaña
  containerSelector: {
    height: 60,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
});
