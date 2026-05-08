"use client";

import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"

import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {

  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
    <Authenticated>
      <UserButton/>
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          
          <Button className="mt-2" onClick={() => addUser()}>Add</Button>
        </div>

        <div>
          {add(1,2)}

          {JSON.stringify(users)}
          
        </div>
      </div>
    </div>
    </Authenticated>
    <Unauthenticated>
      <p>must be signed in</p>
      <SignInButton/>
    </Unauthenticated>
    </>
  )
}
