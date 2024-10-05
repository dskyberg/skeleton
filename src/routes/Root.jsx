import { Outlet } from "react-router-dom";
import Container from "../components/Container";

export default function Root() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
