import Cards from "../components/ui/Cards";
import ConceptualSec from "../components/ui/ConceptualSec";
import HeroMain from "../components/ui/HeroMain";
import InsurancePlan from "../components/ui/InsurancePlan";

export default function Home() {
  return (
    <>
      <HeroMain />
      <ConceptualSec/>
      <Cards />
      <InsurancePlan/>
    </>
  );
}
