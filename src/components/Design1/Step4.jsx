import { useEffect } from "react";
import "./Design1.scss";

const Step4 = () => {
    useEffect(() => {
        document.title = "CAESAR";
        const commentNode = document.createComment(
            " Gebruik de cipher die in de titel staat om het volgende te oncijferen: Ola huadvvyk chu ola yhhkzls vw klgl whnpuh ollma al thrlu tla hssl huklyl dhjoadvvyklu ava ub avl. Kvl vuklygvlr! Hsz ql ola dhjoadvvyk dlla, rbu ql ola oply pucbsslu: khzoivhyk.pualywvs.zk-shi.us/klzpnu1/mpuhs "
        );

        document.body.appendChild(commentNode);

        return () => {
            commentNode.remove();
        };
    }, []);

    return (
        <div className="trainer-core design1-app">
            <div className="trainer-window design1-app__window">
                <header className="trainer-window__titlebar">
                    <span>CAESAR</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "100%" }} />
                    </div>

                    <div className="design1-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Stap 04</span>
                                <span className="trainer-briefing__tag">Design1</span>
                            </div>

                            <div className="trainer-briefing__header">
                                <div>
                                    <h2>CAESAR</h2>
                                    <p className="trainer-briefing__objective">
                                        Gebruik de titel als cipher en ontdek waar je het
                                        laatste antwoord moet invullen.
                                    </p>
                                </div>
                            </div>

                            <div className="trainer-briefing__content">
                                <p className="trainer-briefing__lead">
                                    De afbeeldingen in de voorgaande figma puzzel zijn
                                    hints. Gebruik die hints in combinatie met de volgende
                                    om het wachtwoord te ontrafelen:
                                </p>
                                <p>
                                    "Ik ben een reeks waarin elk getal de som is van de
                                    twee voorgaande."
                                </p>
                            </div>
                        </section>

                        <section
                            className="design1-workbench design1-workbench--single"
                            aria-label="Design1 werkvlak"
                        >
                            <section className="design1-panel">
                                <h2>Laatste hint</h2>
                                <p>
                                    Niet alles wat je nodig hebt staat zichtbaar op deze
                                    pagina. Kijk ook goed naar de HTML.
                                </p>
                                <p>
                                    Als je de cipher goed toepast, vind je de route naar de
                                    plek waar je het eindantwoord kunt invullen.
                                </p>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step4;
