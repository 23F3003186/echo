import { mutation, query } from "./_generated/server";


export const getMany = query({
    args: {},
    handler: async (ctx) => {

        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
          throw new Error("Not authenticated");
        }

        console.log("Convex identity", identity);

        const orgId =identity.orgId ??identity.org_id ??(identity as unknown as { o?: { id?: string } }).o?.id;

        if (!orgId) {
            throw new Error("missing organization");
        }

        const users = await ctx.db.query("users").collect();

        return users
    }
});


export const add = mutation({
    args: {},
    handler: async (ctx) => {
        const userId = await ctx.db.insert("users", {
            name: "raju",
        });
    }
})