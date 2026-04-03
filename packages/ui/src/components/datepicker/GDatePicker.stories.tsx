import type { Meta, StoryObj } from '@storybook/react';
import { GDatePicker, GDateRangePicker, GTimePicker, GDateTimePicker } from './index';
import { DateRange } from 'react-day-picker';
import React, { useState } from 'react';
import { addDays } from 'date-fns';

const meta: Meta = {
  title: 'Components/Form/GDatePicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const SingleDatePicker: StoryObj = {
  render: () => {
    const [date, setDate] = useState<Date>();
    return (
      <div className="w-80">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Pilih Tanggal Transaksi</label>
        <GDatePicker date={date} setDate={setDate} />
        {date && (
          <p className="mt-4 text-sm text-gray-600">
            Terpilih: <span className="font-bold text-orange-600">{date.toDateString()}</span>
          </p>
        )}
      </div>
    );
  },
};

export const RangeDatePicker: StoryObj = {
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });

    return (
      <div className="w-[400px]">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Rentang Laporan Penjualan</label>
        <GDateRangePicker date={date} setDate={setDate} />
        <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
           <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Preview Rentang:</p>
           <p className="text-sm text-gray-900 mt-1">
              {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString() || '...'}
           </p>
        </div>
      </div>
    );
  },
};

export const TimePicker: StoryObj = {
  render: () => {
    const [time, setTime] = useState<string>('08:00');
    return (
      <div className="w-80">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Jam Operasional Buka</label>
        <GTimePicker value={time} onChange={setTime} />
        <p className="mt-4 text-sm text-gray-600">
          Waktu: <span className="font-bold text-orange-600">{time}</span>
        </p>
      </div>
    );
  },
};

export const DateTimePicker: StoryObj = {
  render: () => {
    const [date, setDate] = useState<Date>();
    return (
      <div className="w-80">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Jadwal Shift Kasir</label>
        <GDateTimePicker date={date} setDate={setDate} />
        {date && (
          <p className="mt-4 text-sm text-gray-600">
            Terpilih: <span className="font-bold text-orange-600">{date.toLocaleString()}</span>
          </p>
        )}
      </div>
    );
  },
};
