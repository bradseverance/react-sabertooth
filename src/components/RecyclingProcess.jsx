 import { useState } from 'react';
 import { STEPS_DATA } from "../data/data.js";
 import { TabButton } from "./TabButton.jsx";
 import Section from './Section.jsx';
 import Tabs from './Tabs.jsx';

export default function RecyclingProcess() {
    function onSelect(stepNumber) {
        setSelectedStep(stepNumber);
    }
     // use state (important)
    const [selectedStep, setSelectedStep] = useState(0);
    return (
        <Section title="Our Recycling Process" id="examples">
            <Tabs 
                buttons={
                <>
                    <TabButton isSelected={selectedStep === 0} onClick={() => onSelect(0)}>Step 1</TabButton>
                    <TabButton isSelected={selectedStep === 1} onClick={() => onSelect(1)}>Step 2</TabButton>
                    <TabButton isSelected={selectedStep === 2} onClick={() => onSelect(2)}>Step 3</TabButton>
                    <TabButton isSelected={selectedStep === 3} onClick={() => onSelect(3)}>Step 4</TabButton>
                    <TabButton isSelected={selectedStep === 4} onClick={() => onSelect(4)}>Step 5</TabButton>
                </>
            }>
                <div id="tab-content">
                    <img src={STEPS_DATA[selectedStep].image} alt="" />
                    <h3>{STEPS_DATA[selectedStep].title}</h3>
                    <p>{STEPS_DATA[selectedStep].description}</p>
                </div>
            </Tabs>            
      </Section>
    );
}