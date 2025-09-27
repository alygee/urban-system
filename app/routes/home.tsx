import type { Route } from "./+types/home";
import { Appointment } from "../appointment/appointment";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Appointment customer={{ firstName: "piu" }} />;
}
