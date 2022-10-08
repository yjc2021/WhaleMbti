import { atom } from "recoil";

export const swimAtom = atom({
  key: "swimTrigger",
  default: false,
});
export const loginAtom = atom({
  key: "loginAtom",
  default: false,
});
export const counterAtom = atom({
  key: "counterAtom",
  default: 1,
});

export const popUpAtom = atom({
  key: "popUpAtom",
  default: { isPopUpOpen: false, id: undefined },
});

export const historyPopUpAtom = atom({
  key: "historyPopUpAtom",
  default: { isPopUpOpen: false, id: undefined },
});
