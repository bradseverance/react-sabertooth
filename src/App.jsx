import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CONCEPTS_DATA } from "./data/data.js";
import { STEPS_DATA } from "./data/data.js";
import { CoreConcept } from "./components/CoreConcept/CoreConcept.jsx";
import { Header } from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton/TabButton.jsx";

function App() {
  // use state (important)
  const [selectedStep, setSelectedStep] = useState(0);

  function onSelect(stepNumber) {
    setSelectedStep(stepNumber);
  }

  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
      </main>

      <section id="core-concepts">
        <ul>
          <CoreConcept {...CONCEPTS_DATA[0]} />
          <CoreConcept {...CONCEPTS_DATA[1]} />
          <CoreConcept {...CONCEPTS_DATA[2]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Our Recycling Process</h2>
        <menu>
          <TabButton
            isSelected={selectedStep === 0}
            onSelect={() => onSelect(0)}
          >
            Step 1
          </TabButton>
          <TabButton
            isSelected={selectedStep === 1}
            onSelect={() => onSelect(1)}
          >
            Step 2
          </TabButton>
          <TabButton
            isSelected={selectedStep === 2}
            onSelect={() => onSelect(2)}
          >
            Step 3
          </TabButton>
          <TabButton
            isSelected={selectedStep === 3}
            onSelect={() => onSelect(3)}
          >
            Step 4
          </TabButton>
          <TabButton
            isSelected={selectedStep === 4}
            onSelect={() => onSelect(4)}
          >
            Step 5
          </TabButton>
        </menu>
        <div id="tab-content">
          <img src={STEPS_DATA[selectedStep].image} alt="" />
          <h3>{STEPS_DATA[selectedStep].title}</h3>
          <p>{STEPS_DATA[selectedStep].description}</p>
        </div>
      </section>
    </div>
  );
}

export default App
