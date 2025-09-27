import { Box } from "@chakra-ui/react";

export type Customer = {
  firstName: string;
};
export type AppointmentProps = {
  customer: Customer;
};

export function Appointment({ customer }: AppointmentProps) {
  return (
    <Box>
      <pre>{customer.firstName}</pre>
    </Box>
  );
}
