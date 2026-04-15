import { ActionText } from "@/widgets/ActionText/ui/ActionText"
import { BackgroundLayer } from "@/widgets/BackgroundLayer/ui/BackgroundLayer"
import { Header } from "@/widgets/Header"
import { SelectionPreview } from "@/widgets/SelectionPreview/"
import { usePostEffect } from "../model/usePostEffect"
import type { MainLayoutProps } from "./types"
import { TempFooter } from "./TempFooter"
import clsx from "clsx"
import styles from "./MainLayout.module.scss"

export const MainLayoutDesktop = ({children}: MainLayoutProps) => {
  const { isPostEffectActive, actionEffect } = usePostEffect();

  return (
    <div className={clsx(styles.layout)}>
      <div className={clsx(styles.contentWrapper, isPostEffectActive && styles[`${actionEffect}Effect`])}>
        <BackgroundLayer />
        <Header />

        <SelectionPreview></SelectionPreview>

        {isPostEffectActive && <ActionText />}

        <main>
          {children}
        </main>

        <TempFooter />
      </div>
    </div>
  )
}