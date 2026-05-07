"use client";

import { Button } from "@workspace/ui/components/button"

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {

  const users = useQuery(api.users.getMany);

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex-col max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        widget page
        <div>
          <Button className="mt-2">Button</Button>
        </div>

      <div>
        {JSON.stringify(users)}
      </div>
        
      </div>
      
    </div>
  )
}
