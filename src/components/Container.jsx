import { Container as MuiContainer } from "@mui/material";
/*
const Container = styled("div")(({ theme }) => ({
  margin: 0,
  // backgroundColor: theme.palette.primary.main,
  paddingTop: "10vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
}));
*/
export default function Container({ children, ...props }) {
  return <MuiContainer {...props}>{children}</MuiContainer>;
}
