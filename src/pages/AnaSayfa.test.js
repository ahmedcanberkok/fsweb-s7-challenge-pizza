import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AnaSayfa from "./AnaSayfa";

beforeEach(() => {
  render(<AnaSayfa />);
});
test("2.seviye iki tane başlık gözüküyor", () => {
  const twoLevelHeadings = screen.getAllByRole("heading", { level: 2 });
  expect(twoLevelHeadings).toHaveLength(4);
});
test("anasayfada bir  buton var", () => {
  const btn = screen.getAllByRole("button", { name: /ACIKTIM/i });
  expect(btn).toHaveLength(1);
});
test("anasayfada bir  buton var", () => {
  const btn = screen.getAllByRole("button", { name: /SİPARİŞ VER/i });
  expect(btn).toHaveLength(3);
});
