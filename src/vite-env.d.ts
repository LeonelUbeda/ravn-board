/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
