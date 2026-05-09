"use client";

import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Page() {

  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
    <div className="flex flex-col gap-4">
      <UserButton/>
      <OrganizationSwitcher hidePersonal/>
    </div>

    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          
          <Button className="mt-2" onClick={() => addUser()}>Add</Button>
        </div>

        <div>
          {add(2,2)}

          {JSON.stringify(users)}
          
        </div>
      </div>
    </div>
    </>
  )
}
