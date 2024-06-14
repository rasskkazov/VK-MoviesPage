import { Card } from "@/entities";
import { API_TOKEN } from "@/shared/api/token";
import ava from "@/shared/assets/img/ava.webp";
import wall from "@/shared/assets/img/wall.jpg";
import Vec from "@/shared/assets/svg/vector.svg";

export const Movies = () => {
  console.log(API_TOKEN);

  return (
    <div>
      <Card
        img="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/07/demon-slayer-characters.jpg"
        title="Anime"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div>It's the Main page, bruh</div>
      <div className="images">
        <img src={wall} alt="" width={100} />
        <img src={ava} alt="" width={100} />
        <Vec width={16} color="green" />
      </div>
    </div>
  );
};
