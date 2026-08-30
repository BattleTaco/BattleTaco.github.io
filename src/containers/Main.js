import React, {useEffect, useState, lazy, Suspense} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

// Lazy-load below-the-fold sections for faster initial page load
const Education = lazy(() => import("./education/Education"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const CompletedProjects = lazy(
  () => import("./completedProjects/CompletedProjects")
);
const ResearchProjects = lazy(
  () => import("./researchProjects/ResearchProjects")
);
const Projects = lazy(() => import("./projects/Projects"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Blogs = lazy(() => import("./blogs/Blogs"));
const Talks = lazy(() => import("./talks/Talks"));
const Twitter = lazy(() => import("./twitter-embed/twitter"));
const Podcast = lazy(() => import("./podcast/Podcast"));
const Profile = lazy(() => import("./profile/Profile"));

// Sections are isolated so that a single failing one is hidden rather than
// taking the whole page down with it.
const sections = [
  ["Education", Education],
  ["WorkExperience", WorkExperience],
  ["CompletedProjects", CompletedProjects],
  ["ResearchProjects", ResearchProjects],
  ["Projects", Projects],
  ["StartupProject", StartupProject],
  ["Achievement", Achievement],
  ["Blogs", Blogs],
  ["Talks", Talks],
  ["Twitter", Twitter],
  ["Podcast", Podcast],
  ["Profile", Profile]
];

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <ErrorBoundary name="Header">
              <Header />
            </ErrorBoundary>
            <ErrorBoundary name="Greeting">
              <Greeting />
            </ErrorBoundary>
            <ErrorBoundary name="Skills">
              <Skills />
            </ErrorBoundary>
            <ErrorBoundary name="StackProgress">
              <StackProgress />
            </ErrorBoundary>
            <Suspense fallback={<div />}>
              {sections.map(([name, Section]) => (
                <ErrorBoundary name={name} key={name}>
                  <Section />
                </ErrorBoundary>
              ))}
            </Suspense>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
