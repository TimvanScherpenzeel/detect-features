// Vendor
import { getGPUTier } from 'detect-gpu';

export default ((): { tier: string; type: string } =>
  getGPUTier({
    desktopBenchmarkPercentages: [0, 50, 30, 20], // (Default) [TIER_0, TIER_1, TIER_2, TIER_3]
    mobileBenchmarkPercentages: [0, 50, 30, 20], // (Default) [TIER_0, TIER_1, TIER_2, TIER_3]
  }))();
