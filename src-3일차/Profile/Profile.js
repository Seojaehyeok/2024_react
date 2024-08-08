import ProfileImage from "./ProfileImage";
import Profileinfo from "./Profileinfo";

const Profile = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <ProfileImage src="https://i.namu.wiki/i/WngjPURmV8ifxOGurIHr0J4_PstTWtyPiO5iKWDyv8eoA3cd7QNro1YEcuKoyzENe8jPk3aYJBT7g35Ba5_g0BoJyKK6Dek5NM3oXKVHkVTjyEse-ShFTnrILG9sIfLVF4SFfsLqYPxHh8Dz1sgzSg.webp"></ProfileImage>
      <Profileinfo name="장원영" date="August 8th, 2024"></Profileinfo>
    </div>
  );
};

export default Profile;
