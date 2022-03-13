import { render } from "@testing-library/react";
import App from "./App";

test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello world from React/);
    expect(h1).toHaveTextContent(
        "Hello world from React"
    );
});