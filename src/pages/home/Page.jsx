import MainLayout from "../../components/templates/MainLayout";
import Jumbotron from "../../components/organism/Jumbotron";
import TipsLists from "../../components/molecules/TipsLists";

export default function Page() {
  return (
    <MainLayout>
      <Jumbotron />
      <TipsLists />
    </MainLayout>
  );
}
