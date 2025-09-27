import { screen } from "@testing-library/react";
import { render } from "./utils/test-utils";
import { Welcome } from "../welcome/welcome";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    render(<Welcome />);

    expect(screen.getByText("Ashley")).toBeInTheDocument();
  });
});
