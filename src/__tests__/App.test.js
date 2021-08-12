import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("renders three Welcome back messages", () => {
    render(<App />);
    const messages = screen.getAllByText(/welcome back/i);
    expect(messages).toHaveLength(3);
  });
});
