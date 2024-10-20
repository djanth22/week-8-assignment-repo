import DelButton from "@/components/DelButton";
import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export const metadata = {
  title: "VIP posts page",
  description: "a page showcasing posts from our VIP guests",
};

export default async function Posts({ searchParams }) {
  const Data = await db.query("SELECT * FROM mainposts");
  const wrangle = Data.rows;
  if (searchParams.sort === "desc") {
    wrangle.reverse();
  }
  return (
    <>
      <div>
        <h1 className="flex justify-center m-5">posts</h1>
        <div className="flex justify-center">
          <Link
            className="m-4 bg-amber-600 bg-opacity-25 p-3 rounded-xl"
            href="/posts?sort=asc"
          >
            sort ascending
          </Link>
          <Link
            className="m-4 bg-amber-600 bg-opacity-25 p-3 rounded-xl"
            href="/posts?sort=desc"
          >
            sort descending
          </Link>
        </div>

        {wrangle.map((item) => {
          return (
            <div className="flex flex-col m-2 items-center" key={item.id}>
              <p
                id={item.id}
                className="m-2 bg-slate-800 p-5 rounded-xl text-purple-200"
              >
                {item.name}: {item.post}
              </p>
              <div className="flex">
                <Link
                  href={`posts/${item.id}`}
                  className="flex m-2 bg-purple-950 p-1.5 rounded-2xl w-40 justify-center items-center"
                >
                  leave a comment
                </Link>
                <form
                  action={async function handleDel() {
                    "use server";
                    console.log(`delete`);
                    await db.query(
                      `DELETE FROM mainposts WHERE id = ${item.id}`
                    );

                    revalidatePath("/posts");
                  }}
                >
                  <DelButton />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
