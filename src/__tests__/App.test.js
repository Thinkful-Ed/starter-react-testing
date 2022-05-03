import { render, screen} from "@testing-library/react";
import App from "../App";

describe("App", () => {
    test("renders without crashing",() => {
        render(<App />);
    });
    test("render three Welcome back messages",() =>{
        render(<App />);
        const messages = screen.getAllByText(/welcome back/i);
        expect(messages).toHaveLength(3);
    });
});

    /*test("WelcomeBack are called 3 times",() => {
        render(<App />);
        const text = screen.getByText("WelcomeBack");
        expect(text).toBeInTheDocument();
    })*/
    //how to write test for this