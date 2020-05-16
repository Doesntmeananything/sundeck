import { Header } from "./Header";
import { Box } from "@chakra-ui/core";

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
    </>
  );
};
