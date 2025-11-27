import { useState } from "react";
import WebcamCapture from "../../_shared/WebcamCapture/WebcamCapture";
import { updateAdminGroup } from "../../../api/groups";
import "./AdminEditTeamImage.scss";

export default function AdminEditTeamImage({ team, onClose, onSaved }) {
    const [image, setImage] = useState(team.image_url);
    const [capturing, setCapturing] = useState(false);

    const handlePhotoCaptured = (dataUrl) => {
        setImage(dataUrl);
        setCapturing(false);
    };

    const handleDelete = () => {
        setImage(null);
    };

    const handleSave = async () => {
        await updateAdminGroup(team.id, {
            name: team.name,
            className: team.class,
            image_url: image
        });

        onSaved();
    };

    return (
        <div className="edit-team-image-backdrop">
            <div className="edit-team-image-modal">

                <h2>Teamfoto wijzigen</h2>

                {capturing ? (
                    <WebcamCapture
                        onCapture={handlePhotoCaptured}
                        onCancel={() => setCapturing(false)}
                    />
                ) : (
                    <>
                        <div className="image-preview">
                            {image ? (
                                <img src={image} alt="teamfoto" />
                            ) : (
                                <div className="placeholder">Geen afbeelding</div>
                            )}
                        </div>

                        <div className="buttons">
                            <button onClick={() => setCapturing(true)}>Nieuwe Foto</button>
                            <button className="delete" onClick={handleDelete}>
                                Verwijderen
                            </button>
                        </div>

                        <div className="footer">
                            <button onClick={onClose}>Annuleren</button>
                            <button className="save" onClick={handleSave}>
                                Opslaan
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}
