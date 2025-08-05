import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
   <div>
    <p>Hello world</p>
    <Input placeholder="Type here..." />
    <Button variant="destructive" size="sm">Click Me</Button>
   </div>
  );
}
