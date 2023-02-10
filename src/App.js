import { AppContainer } from ".//common/AppContainer/styled";
import { currentSkillset, wantToLearn } from ".//common/SkillsetList/skills";
import About from ".//common/About";
import HireMeButton from ".//common/About/HireMeButton";
import SkillsetList from ".//common/SkillsetList";
import Portfolio from "./features/Portfolio";
import Header from "./features/Portfolio/Header";
import Repos from "./features/Portfolio/Repos";
import LoadingScreen from "./features/Portfolio/LoadingScreen";
import ErrorScreen from "./features/Portfolio/ErrorScreen";

function App() {
  return (
    <AppContainer>
      <About HireMeButton={<HireMeButton />} />
      <SkillsetList
        title="My skillset includes"
        skills={currentSkillset}
      />
      <SkillsetList
        title="What I want to learn next"
        skills={wantToLearn}
      />
      <Portfolio
        Header={<Header />}
        Repos={<Repos />}
        LoadingScreen={<LoadingScreen />}
        ErrorScreen={<ErrorScreen />}
      />
    </AppContainer>
  );
}

export default App;