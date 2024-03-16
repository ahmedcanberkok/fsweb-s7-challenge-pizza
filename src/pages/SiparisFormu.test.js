import React from "react";
import { render, screen,} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import SiparisFormu from "./SiparisFormu";

beforeEach(() => {
  render(<SiparisFormu />);
});

test("birden fazla malzeme seçilebiliyor", () => {
  userEvent.click(screen.getByText("Pepperoni"));
  expect(screen.getByLabelText("Pepperoni")).toBeChecked();
  userEvent.click(screen.getByText("Mısır"));
  expect(screen.getByLabelText("Mısır")).toBeChecked();
  userEvent.click(screen.getByText("Domates"));
  expect(screen.getByLabelText("Domates")).toBeChecked();

});

test("sayfa sorunsuz açılıyor ve buton aktif değil", () => {
  expect(screen.getByRole("button", { name: /SİPARİŞ VER/i })).toBeDisabled();
});
test("17 tane input var", () => {
  expect(screen.getAllByTestId("input")).toHaveLength(17);
});

test("iki tane count butonu var", () => {
  const buttons = screen.getAllByTestId("counter");
  expect(buttons).toHaveLength(2);
});

test("iki tane başlık gözüküyor", () => {
  const twoLevelHeadings = screen.getAllByRole("heading", { level: 2 });
  expect(twoLevelHeadings).toHaveLength(2);
} );

test("bir tane buton var", () => {
  const btn = screen.getAllByRole("button", { name: /SİPARİŞ VER/i });
  expect(btn).toHaveLength(1);
} );
