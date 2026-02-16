import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the expected available times', () => {
  expect(initializeTimes()).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
});

test('updateTimes returns the same value provided in state', () => {
  const state = initializeTimes();

  expect(
    updateTimes(state, { type: 'date_changed', selectedDate: '2026-02-15' })
  ).toEqual(state);
});
