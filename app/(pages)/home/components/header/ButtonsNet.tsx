import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ButtonsNet() {
  return (
    <div className="mt-5 space-x-7">
      <Button asChild size="lg" className="bg-greenpf">
        <Link href="https://www.linkedin.com/in/gabriel-saldana00/">
          Ir a Linkedin
        </Link>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <Link href="https://github.com/gabyakd2">Ir a Github</Link>
      </Button>
    </div>
  );
}

export default ButtonsNet;
