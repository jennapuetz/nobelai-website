import type {Brand} from './types';
import {bella} from './bella/brand';
import {moveology} from './moveology/brand';
import {nobelAi} from './nobel-ai/brand';
import {yba} from './yba/brand';

export type {Brand} from './types';

/** Every brand this repo can render. Add new brands here. */
export const BRANDS: Brand[] = [nobelAi, yba, moveology, bella];

export const getBrand = (slug: string): Brand => {
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) {
    throw new Error(
      `Unknown brand "${slug}". Available: ${BRANDS.map((b) => b.slug).join(', ')}`,
    );
  }
  return brand;
};

export {bella, moveology, nobelAi, yba};
