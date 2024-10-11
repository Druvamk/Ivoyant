import BigColorCards from "../../cards/BigColorCards";
import Cards from "../../cards/Cards";
import Impressions from "../../cards/Impressions";
import SocialCards from "../../cards/SocialCards";
import StaticCards from "../../cards/StaticCards";
import CombineCards from "../../cards/CombineCards";
import FooterCards from "../../cards/FooterCards";

export default function Statistics() {
  return (
    <div>
      <StaticCards />
      <BigColorCards />
      <SocialCards />
      <Impressions />
      <Cards />
      <CombineCards />
      <FooterCards />
    </div>
  );
}
