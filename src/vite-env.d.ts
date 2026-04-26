/// <reference types="vite/client" />

interface ElectronAPI {
  minimize: () => void
  maximize: () => void
  close: () => void
}

declare global {
  interface Window {
    electronAPI: ElectronAPI | undefined
  }
}

export {}
