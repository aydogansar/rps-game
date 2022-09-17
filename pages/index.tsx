import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Container, Header } from "components";

const PlayGround = dynamic(() => import("components/PlayGround"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <PlayGround />
    </Container>
  );
};

export default Home;
