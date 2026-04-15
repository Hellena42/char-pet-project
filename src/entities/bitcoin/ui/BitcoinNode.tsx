import { DataNodeCard, type DataNodeCardProps } from '@/shared/components/ui';
import { WidgetIcons } from '@/assets/images/widget-icons';
import { useBitcoin } from '../model/useBitcoin';
import type { CryptoData } from '../model/types';
import { useEffect } from 'react';
import { useMoodStore } from '@/widgets/MoodIndicator/model/useMoodStore';

export const BitcoinNode = () => {
  const { common } = WidgetIcons;
  const cryptoData: CryptoData | null = useBitcoin();

  const updateMood = useMoodStore(s => s.updateFactor);

  const setBitcoinValue = (price?: number) => {
    const value = Math.min(price ?? 0, 999999);
    return `$${value.toLocaleString('en-US')}`;
  };

  const setBitcoinFlag = (change?: number) => {
    if (change == null) return '';
    return change >= 0 ? 'up' : 'down';
  };

  const setChange = (change24h?: number) => {
    if (change24h == null) return '0%';
    return `${change24h.toFixed(1)}%`;
  };

  const price = cryptoData?.price ?? 0;
  const change = cryptoData?.change24h ?? 0;

  useEffect(() => {
    if (change === 0) return;

    if (cryptoData) {
      const factorValue = change >= 0 ? -1 : 1;
      updateMood('bitcoin', factorValue);
    }

  }, [change, updateMood, cryptoData]);

  const data: DataNodeCardProps = {
    title: 'Bitcoin',
    icon: common.bitcoinIcon,
    value: setBitcoinValue(price),
    note: {
      show: true,
      flag: setBitcoinFlag(change),
      value: setChange(change)
    }
  };

  return (
    <DataNodeCard
      {...data}
    />
  )
}