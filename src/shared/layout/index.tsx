import { Header } from "./Header";
import { Box } from "@chakra-ui/core";

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
    </>
  );
};
