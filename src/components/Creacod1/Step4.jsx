import "./Creacod1.scss";

const Step4 = () => {
    return (
        <div className="trainer-core creacod-app">
            <div className="trainer-window creacod-app__window">
                <header className="trainer-window__titlebar">
                    <span>Creative Coding Puzzle</span>
                </header>

                <div className="trainer-window__body">
                    <div className="trainer-progressbar" aria-hidden="true">
                        <span style={{ width: "100%" }} />
                    </div>

                    <div className="creacod-main">
                        <section className="trainer-briefing">
                            <div className="trainer-briefing__topline">
                                <span className="trainer-briefing__tag">Stap 04</span>
                                <span className="trainer-briefing__tag">
                                    Creative Coding
                                </span>
                            </div>

                            <div className="trainer-briefing__header">
                                <div>
                                    <h2>Stap 4</h2>
                                    <p className="trainer-briefing__objective">
                                        Je hebt het verborgen wachtwoord gevonden.
                                    </p>
                                </div>
                            </div>

                            <div className="trainer-briefing__content">
                                <p className="trainer-briefing__lead">
                                    Mooi werk. Het wachtwoord <code>fibonacci</code> was
                                    correct.
                                </p>
                                <p>
                                    Je bent nu aangekomen bij de vierde stap van creative
                                    coding. Gebruik deze pagina als bevestiging dat de
                                    puzzel is opgelost.
                                </p>
                            </div>
                        </section>

                        <section
                            className="creacod-workbench creacod-workbench--single"
                            aria-label="Creative coding werkvlak"
                        >
                            <section className="creacod-panel">
                                <h2>Voltooid</h2>
                                <p>
                                    De Figma-lagen zijn succesvol ontcijferd en je bent door
                                    naar de laatste stap.
                                </p>
                                <p>
                                    Als er nog een klassikale of mondelinge afronding bij
                                    hoort, kun je daar nu mee verder.
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
