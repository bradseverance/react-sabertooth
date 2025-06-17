import { CONCEPTS_DATA } from "../data/data.js";
import { CoreConcept } from "./CoreConcept.jsx";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <ul>
                {CONCEPTS_DATA.map((conceptItem) => (
                <CoreConcept key={conceptItem.id} {...conceptItem} />
                ))}
            </ul>
        </section>
    );
}