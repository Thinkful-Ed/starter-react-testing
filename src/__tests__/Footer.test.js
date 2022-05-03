import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("renders the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/footer/i);
    expect(footerText).toBeInTheDocument();
  });
});