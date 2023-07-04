"use client";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    return undefined;
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, book or rent a car!</h1>
        <p className="hero__subtitle">Streamline your car rental experience.</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
