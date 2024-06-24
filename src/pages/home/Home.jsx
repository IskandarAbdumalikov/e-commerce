import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../products/Products";
import Offers from "../../components/offers/Offers";
import "./home.scss";


const Home = () => {
  return (
    <div>
      <Hero />
      <Products sliceFrom={0} sliceTo={4} title={"Акции"} />
      <Products sliceFrom={4} sliceTo={8} title={"Новинки"} />
      <Products sliceFrom={8} sliceTo={12} title={"Покупали раньше"} />
      <div className="offers container">
        <h1>Специальные предложения</h1>
        <div className="offers__wrapper">
          <Offers
            title={"Оформите карту «Северяночка»"}
            info={"И получайте бонусы при покупке в магазинах и на сайте"}
            img={
              "https://s3-alpha-sig.figma.com/img/0a38/e4b6/27c828e2d747a73618eb8e3b5ec2a80e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dsMKP-TbDz5SeVTH3eAygcJbpV53qROA1AIxgs6hu~WhuBlQgfpI-eW-YN1CcRRhZwnbYhi-Ps2kIjqkVcOr9QqYKbVwqOUhNk6wZIKSVdPMRJwZP3fzFkyzvHE~WAxGxDbaVEHJz1LCw3qb1W1IDoNb9-UOb5KAhJvk7cwihK6Xw5zRld~ftOAl4EeH7JmsEDc2RNRHQ3Wr3egFXWua2iogVG7LjnD6i95czpYZjU-zz9ip7G0nAlQL4it3pjA~JSukeAsxCv~vE-1mjlI7GI39xN8OSPlfGoRW7ub785dFgl0L6ExekRt64IPhxmgf6stlZu5nsZQ0tIUT9MNDbw__"
            }
            color={"#FCD5BA"}
          />
          <Offers
            title={"Покупайте акционные товары"}
            info={"И получайте вдвое больше бонусов"}
            img={
              "https://s3-alpha-sig.figma.com/img/0f47/edce/4fab8faa550474bc0fdd4f67d53093fb?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-LyFTfgx0C725TvlRw9UdhlweAK~oYCPKDAR700TXxWL-Zl6~dbO2RcuUbMtORT79dmbxodvkqekqQjrWeGOits04IxJxUcbjkSdyEECHjLAPg5yauH-XbXxmQZZiPndL-B-tKYs5VjMpwmLcYdWVO9VgjRuz7VPxzxOcEN6em2GkamMBAVu2Xq0EhCBNpzoL3b-2TRg3XrstGqpkveBFe~OhBduHR1uLClaoeyVw6sa8LIpv3W03F8qHHdj2CVzW~xXiOQpaJC7SUGLjeXEpBQkqbbcML86NQNCQAfvDHyRAP~aQKIvc5kUjJVfpdfF64AE3xsEe9sfL0HgEzagQ__"
            }
            color={"#E5FFDE"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
