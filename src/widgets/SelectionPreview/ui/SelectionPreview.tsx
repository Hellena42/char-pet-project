import { useSelectionPreview } from '../model/useSelectionPreview';
import { getPreviewLabel } from '../model/getPreviewLabel';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import styles from './SelectionPreview.module.scss';

export const SelectionPreview = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const {isPreviewVisible, selectedItem, previewType } = useSelectionPreview();
  const label = getPreviewLabel(previewType, selectedItem);
  const isWeatherDefault = previewType === 'weather' && selectedItem?.id === 'defaultWeather';
  const shouldShowLabel = !isMobile || !isWeatherDefault;
  
  return isPreviewVisible ? (
    <>
      <div className={clsx('overlay', styles.overlay)}></div>
      <div className={styles.selectionPreviewWrapper}>
        <div className={styles.selectionImgWrapper}>
          <img src={selectedItem?.icon} alt="" className={styles.selectionImg} />
          {shouldShowLabel && <span>{label}</span>}
        </div>
      </div>
    </>
  ): null
}