import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "../slider/sliderLogo";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/profile.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/profile.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/profile.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/profile.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/profile.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/profile.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
