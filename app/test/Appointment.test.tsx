import { screen } from "@testing-library/react";
import { render } from "./utils/test-utils";
import { Appointment, type Customer } from "../appointment/appointment";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer: Customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);

    expect(screen.getByText("Ashley")).toBeInTheDocument();
  });

  it("renders another customer first name", () => {
    const customer: Customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);

    expect(screen.getByText("Jordan")).toBeInTheDocument();
  });
});
