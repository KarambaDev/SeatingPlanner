import guests from './guests.json';

export type Person = typeof guests[number];

export type Table = {
  number: number | string;
  x: number;
  y: number;
  chairCount: number;
};

export type LayerState = "default" | "focused" | "blurred";