import MainLayout from "../layouts/MainLayout";

import MobileHero from "../components/aarhcomponents/MobileHero/MobileHero";
import MobileNav from "../components/aarhcomponents/MobileNav/MobileNav";
import MobileCardPost from "../components/aarhcomponents/MobileCardPost/MobileCardPost";
const Mobile = () => {

    const HeroData = {
      image:
        "https://images.unsplash.com/photo-1605092262243-28c74cfc74c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      category: "Business",
      type: "video link",
      title:
        "Army Reservist patay sa pamamaril sa Caloocan kasama ang ilang sibilyan.",
      date: "October 19, 2020",
    };

    const CardData = {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiVw20WET3Mfb-7MDKOQEGlYsbFJba4TrAw&usqp=CAU",
      category: "Entertainment",
      type: "basic article",
      title:
        "Lea Salinga treats 'ASAP' viewers with 'Bakit Labis kitang mahal'",
      date: "October 19, 2020",
    };

    return (
      <>
        <MainLayout>
          <MobileNav />
          <MobileHero data={HeroData} />
          <div
            style={{
              margin: "1.3rem auto",
              width: "300px",
              height: "250px",
              backgroundColor: "white",
            }}
          >
            <div>AD BANNER</div>
          </div>

          <MobileCardPost data={CardData} />
          <MobileCardPost data={CardData} />
          <MobileCardPost data={CardData} />
          <MobileCardPost data={CardData} />
        </MainLayout>
      </>
    );
}

export default Mobile;