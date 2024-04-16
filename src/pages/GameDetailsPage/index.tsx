import { useParams } from "react-router-dom";
import GameCard from "../../components/GameCard";

const GameDetailsPage = (props: any) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return <GameCard id={id} />;
};

export default GameDetailsPage;
