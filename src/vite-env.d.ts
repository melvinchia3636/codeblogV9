/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Window {
  __navigate: (path: string) => void;
}
