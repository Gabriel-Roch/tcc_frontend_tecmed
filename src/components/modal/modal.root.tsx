import { ReactNode, useState } from "react"
import { ModalComponentContext } from "../../context/modalContext"

interface ModalRootProps {
  children: ReactNode
}

export default function ModalRoot({ children }: ModalRootProps) {
  return children
}