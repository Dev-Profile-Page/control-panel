import { Navigate, useNavigate } from "react-router-dom";
import { Flex } from "antd";
import { Logo } from "../../components/Logo/Logo";
import { PaddedFlex, ResponsiveVerticalFlex } from "../../components/styled/Flex";
import { authService } from "../../shared/singletons";
import { AuthButtons, HeadlineContainer, HeadlineHeading1, HeadlineHeading3 } from "./Auth.styled";
import { GreenText } from "../../components/styled/Text";
import { AuthButton } from "../../components/AuthButton/AuthButton";
import { Github, ShellPrompt } from "../../components/Icons/Icons";
import { Container } from "../../components/Container/Container";

export default function Auth() {
  const navigate = useNavigate();

  const onSignInClick = async () => {
    const signInResult = await authService.signInWithPopup();

    if(signInResult) {
      navigate('/');
    }
  };

  const isLoggedIn = authService.isUserLoggedIn();

  if(isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <Flex vertical justify="space-between" style={{height: 'calc(100vh - 50px)'}}>
      <PaddedFlex justify="center"><Logo /></PaddedFlex>

      <Container>
        <ResponsiveVerticalFlex>
          <HeadlineContainer>
            <ShellPrompt />
            <HeadlineHeading1>Unlock your <GreenText>&lt;developer/&gt;</GreenText><br/>profile</HeadlineHeading1>
            <HeadlineHeading3>Sign in now to showcase your developer profile and connect with coding community!</HeadlineHeading3>
          </HeadlineContainer>

          <AuthButtons>
            <AuthButton icon={Github} name='Github' id='GITHUB' onClick={onSignInClick} />
          </AuthButtons>
        </ResponsiveVerticalFlex>
        <p style={{textAlign: 'center', marginTop: 30}}>Let's <span style={{fontSize: 24}}>git init</span> you</p>
      </Container>

      <div>
        <p style={{textAlign: 'center'}}>By continuing sign up, you're accepting our Terms and Privacy policy</p>
      </div>
    </Flex>
  );
}
