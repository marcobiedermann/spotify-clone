/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly SPOTIFY_ACCESS_TOKEN: string;
  readonly SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
