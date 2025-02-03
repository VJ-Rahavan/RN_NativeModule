import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

type stringOrNull = string | null;
export interface Spec extends TurboModule {
  setItem(value: string, key: string): stringOrNull;
  getItem(key: string): stringOrNull;
  removeItem(key: string): void;
  clear(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalStorage');
