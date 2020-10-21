import React from "react";
import "./styles.css";

const WizardContext = React.createContext();

const ButtonPrev = () => {
  const { activePageIndex, goNextPage, steps } = React.useContext(
    WizardContext
  );

  return activePageIndex < pages.length + 1 ? (
    <button
      type="button"
      className="wizard__buttons-right"
      onClick={goNextPage}
    >
      Siguiente
    </button>
  ) : null;
};

const ButtonNext = () => {
  const { activePageIndex, goPrevPage } = React.useContext(WizardContext);

  return activePageIndex > 0 ? (
    <button type="button" className="wizard__buttons-left" onClick={goPrevPage}>
      Atras
    </button>
  ) : null;
};

const Pages = ({ children }) => (
  <div className="wizard__content">{children}</div>
);

const Wizard = ({ children, steps }) => {
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const context = {
    activePageIndex,
    goPrevPage,
    goNextPage,
    steps,
  };

  return (
    <WizardContext.Provider value={context}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
};

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
  </div>
);
const Page2 = () => (
  <div>
    <h1>Page 2</h1>
  </div>
);
const Page3 = () => (
  <div>
    <h1>Page 3</h1>
  </div>
);

export default function App() {
  return (
    <Wizard steps={3}>
      <Wizard.Pages>
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard.Pages>
      <Wizard.ButtonNext />
      <Wizard.ButtonPrev />
    </Wizard>
  );
}
