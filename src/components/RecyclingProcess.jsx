 import { STEPS_DATA } from "../data/data.js";
 import { TabButton } from "./TabButton.jsx";
 
 // use state (important)
const [selectedStep, setSelectedStep] = useState(0);

function onSelect(stepNumber) {
    setSelectedStep(stepNumber);
}

export default function RecyclingProcess() {
    return (
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
    );
}