// src/components/Desktop/apps/EditorApp/EditorApp.jsx
import './EditorApp.scss';
import { useState } from 'react';

const EditorApp = () => {
    const [content, setContent] = useState(
        `
####################################
# VERDACHT #
####################################

[GEEN TOEGANG]

De gehackte afbeelding bevat een gecodeerde boodschap van de verdachte. Deze boodschap is een hint naar de volgende locatie. De code is:
'De volgende stap ligt verborgen op een plek waar de broncode wordt gedeeld.'

`
    );

    return (
        <div className="editor-app">
            <textarea
                className="editor-textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                readOnly
            ></textarea>
        </div>
    );
};

export default EditorApp;