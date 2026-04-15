import type { ActionEffect } from "@/widgets/MoodIndicator/model/types";

export type ExistedActions = Exclude<ActionEffect, 'none'>;

export interface ActionEffectContent {
  title: string;
  messages: string[];
}

export type ActionContentMap = {
  // [K in ExistedActions]: K extends 'none' ? null : ActionEffectContent;
  [K in ExistedActions]: ActionEffectContent;
};