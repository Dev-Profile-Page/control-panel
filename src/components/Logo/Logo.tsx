import { GreenText, BlueText, RedText } from "../styled/Text";
import { LogoContainer } from "./Logo.styled";


export function Logo() {
  return (
    <LogoContainer>
      <div>&lt;<GreenText>dev</GreenText>&gt;</div>
      <BlueText>Profile</BlueText>
      <div>&lt;/<RedText>page</RedText>&gt;</div>
    </LogoContainer>
  );
}