import React from "react";
import appStoreIcon from "../../assets/app-store.png";
import googlePlayIcon from "../../assets/google-play.png";
import heroImage from "../../assets/hero.png";
import Container from "../Container";
import LinkButton from "../LinkButton";

export default function HeroSection() {
  return (
    <Container>
      <section className="mx-auto flex max-w-[51.25rem] flex-col items-center pt-14 text-center">
        <h1 className="heading-1">
          We Build <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {" "}
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="mb-10">
          At APPGALAXY, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="xs:flex-row xs:gap-4 mb-10 flex flex-col gap-2 transition duration-300">
          <LinkButton
            styles="border border-gray-300 hover:bg-gray-200 transition duration-300"
            target="_blank"
            to="https://play.google.com/store/games?hl=en"
          >
            <img
              className="h-8 object-contain"
              src={googlePlayIcon}
              alt="Google Play Icon"
            />
            <span className="text-heading font-semibold">Google Play</span>
          </LinkButton>

          <LinkButton
            styles="border border-gray-300 hover:bg-gray-200 transition duration-300"
            target="_blank"
            to="https://www.apple.com/app-store/"
          >
            <img
              className="h-8 object-contain"
              src={appStoreIcon}
              alt="App Store Icon"
            />
            <span className="text-heading font-semibold">App Store</span>
          </LinkButton>
        </div>
        <figure>
          <img src={heroImage} alt="Website hero image" />
        </figure>
      </section>
    </Container>
  );
}
