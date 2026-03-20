const Step2 = () => {
    return (
        <div className="creacod1-step2">
            <h1>Goed gedaan</h1>
            <p>Open de verborgen link op je telefoon. Vind en scan 4 posters. Iedere poster stuurt je naar de volgende poster. De 4e poster geeft het wachtwoord.</p>
            <input type="text" placeholder="Wachtwoord" />
            <button>Submit</button>
            <a href="{{hiddenLink}}" target="_blank" rel="noopener noreferrer" style={{ display: 'none' }}>Verborgen link</a>
        </div>
    );
}

export default Step2;