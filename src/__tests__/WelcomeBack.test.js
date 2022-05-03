import { render, screen} from "@testing-library/react";
import WelcomeBack from "../WelcomeBack";

describe("Welcome Back",() => {
    test("renders the default value without a name prop",() => {
        render(<WelcomeBack />)
        const text = screen.getByText("Welcome back, valued customer!");
        expect(text).toBeInTheDocument();
    });
    test("renders the customer name passed in as a prop",() => {
        render(<WelcomeBack name="John" />)
        const text = screen.getByText("Welcome back, John!");
        expect(text).toBeInTheDocument();
    });
});