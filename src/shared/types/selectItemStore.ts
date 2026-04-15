export interface SelectItemStore {
  selectedItem: any; //TODO: Select interface
  isPreviewVisible: boolean;
  previewType?: 'meal' | 'weather' | null,
}