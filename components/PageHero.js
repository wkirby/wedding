import { Hero, HeroBody } from "bloomer";
import React from "react";
import { HeroHeader } from "./HeroHeader";
export const PageHero = ({
  children,
  background,
  size = "medium",
  ...props
}) => (
  <Hero
    isColor="dark"
    isSize={size}
    className="has-bg-img has-border has-vignette"
    style={{ backgroundImage: background }}
    {...props}
  >
    <HeroBody>
      <HeroHeader>{children}</HeroHeader>
    </HeroBody>
  </Hero>
);
