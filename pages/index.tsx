import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Container, Header } from "components";
import { RulesModal } from "modals";

const PlayGround = dynamic(() => import("components/PlayGround"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <PlayGround />
      <RulesModal />
    </Container>
  );
};

export default Home;
