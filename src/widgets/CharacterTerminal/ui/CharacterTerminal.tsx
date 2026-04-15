import CharacterAvatar from '../../../assets/images/widget-icons/dialogue/dialogue-avatar.png';
import { useCharacterStore } from '../model/useCompTerminalStore';
import { getRandomMsg } from '../model/default.data';
import styles from './CharacterTerminal.module.scss';

export const CharacterTerminal = () => {
  const defaultMessage = getRandomMsg();
  const storedMessage = useCharacterStore(s => s.message);
  const displayedMessage = storedMessage || defaultMessage;

  return (
    <div className={styles.terminalContainer}>
      <img src={CharacterAvatar} alt="" className={styles.terminalAvatar} />
      <div className={styles.terminalSpeechBox}>
        <div className={styles.terminalSpeech}>{displayedMessage}</div>
      </div>
    </div>
  )
}