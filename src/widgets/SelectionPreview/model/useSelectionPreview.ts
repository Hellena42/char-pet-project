import { useEffect } from "react";
import { useSelectionPreviewStore } from "./useSelectionPreviewStore";

export const useSelectionPreview = () => {
  const { isPreviewVisible, selectedItem, previewType, clearSelectedItem } = useSelectionPreviewStore();

  useEffect(() => {
    if (isPreviewVisible) {
      const timer = setTimeout(() => {
        // useMealStore.setState({isPreviewVisible: false});
        clearSelectedItem();
      }, 1000);

      return () => clearTimeout(timer);
    }
  },[isPreviewVisible]);

  return { isPreviewVisible, selectedItem, previewType }
}