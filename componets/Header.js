import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/* Left */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
      </div>

      {/* Center */}
      {/* Right */}
    </div>
  );
};

export default Header;
