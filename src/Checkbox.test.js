import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox"

test("Selecting checkbox", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkBox = getByLabelText(/not checked/);
    fireEvent.click(checkBox);
    expect(checkBox.checked).toEqual(true);
});