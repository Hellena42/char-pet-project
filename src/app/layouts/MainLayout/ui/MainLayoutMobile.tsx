import { ActionText } from "@/widgets/ActionText/ui/ActionText";
import { BackgroundLayer } from "@/widgets/BackgroundLayer";
import { MobileHeader } from "@/widgets/MobileHeader/";
import { SelectionPreview } from "@/widgets/SelectionPreview/";
import type { MainLayoutProps } from "./types";
import { usePostEffect } from "../model/usePostEffect";
import clsx from "clsx";
import styles from "./MainLayout.module.scss";

export const MainLayoutMobile = ({children}: MainLayoutProps) => {
  const { isPostEffectActive, actionEffect } = usePostEffect();

  return (
    <div className={clsx(styles.layout)}>
      <div className={clsx(styles.contentWrapper, isPostEffectActive && styles[`${actionEffect}Effect`])}>
        <BackgroundLayer />

        <MobileHeader />
        <SelectionPreview></SelectionPreview>

        {isPostEffectActive && <ActionText />}

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}