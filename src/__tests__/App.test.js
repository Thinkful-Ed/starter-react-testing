import { render, screen} from "@testing-library/react";
import App from "../App";

describe("App", () => {
    test("renders without crashing",() => {
        render(<App />);
    });
    test("renders three Welcome back messages",() =>{
        render(<App />);
        const messages = screen.getAllByText(/welcome back/i);
        expect(messages).toHaveLength(3);
    });
    test("renders three greetings",() =>{
        render(<App />);
        const greeting = screen.getAllByText(/hello and /i); 
        //("Hello and ") doesnt like it
        expect(greeting).toHaveLength(3);
    });


});

    /*test("WelcomeBack are called 3 times",() => {
        render(<App />);
        const text = screen.getByText("WelcomeBack");
        expect(text).toBeInTheDocument();
    })*/
    //how to write test for this