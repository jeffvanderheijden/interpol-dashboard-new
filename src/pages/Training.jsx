import { GameProvider } from "./../context/GameContext";
import Desktop from "./../components/Desktop/Desktop";

const Training = () => {
    return (
        <GameProvider>
            <Desktop />
        </GameProvider>
    );
}

export default Training;