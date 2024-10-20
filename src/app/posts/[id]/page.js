import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import DelButton from "@/components/DelButton";

export const metadata = {
  title: "VIP comments page",
  description:
    "a page where our VIP guests can view and write comments on eachothers posts",
};

export default async function Comments({ params }) {
  console.log(params);

  const pd = await db.query(`SELECT * FROM mainposts WHERE id = ${params.id}`);
  const pdw = pd.rows;

  const cd = await db.query(
    `SELECT * FROM comments WHERE post_id = ${params.id}`
  );
  const cdw = cd.rows;

  async function handleSaveComment(formData) {
    "use server";
    const name = formData.get("name");
    const comment = formData.get("comment");
    const postId = `${params.id}`;

    await db.query(
      `INSERT INTO comments (name, comment, post_id) VALUES ($1, $2, $3)`,
      [name, comment, postId]
    );

    revalidatePath(`/posts/${params.id}`);
  }

  return (
    <div>
      <h2 className="flex items-center justify-center mt-10 bg-amber-300 bg-opacity-25 p-4 rounded-xl">
        post
      </h2>

      {pdw.map((item) => {
        return (
          <>
            <div
              className="flex flex-col items-center justify-center m-20 bg-purple-400 bg-opacity-25 p-5 rounded-xl text-lg "
              key={item.id}
            >
              <p className="text-purple-300">{item.name}:</p>
              <p>{item.post}</p>
            </div>
          </>
        );
      })}
      <h2 className="flex items-center justify-center bg-amber-300 bg-opacity-25 p-4 rounded-xl">
        comments
      </h2>
      <div className="bg-blue-600 bg-opacity-25 p-4 rounded-xl m-10">
        {cdw.map((item2) => {
          return (
            <>
              <div
                className="flex items-center justify-center m-5  bg-blue-400 bg-opacity-25 p-5 rounded-xl"
                key={item2.id}
              >
                <p className="mr-5 text-green-300">{item2.name}:</p>
                <p className="text-cyan-200">{item2.comment}</p>
                <form
                  action={async function handleDel() {
                    "use server";
                    console.log(`delete`);
                    await db.query(
                      `DELETE FROM comments WHERE id = ${item2.id}`
                    );

                    revalidatePath("/posts");
                  }}
                >
                  <DelButton />
                </form>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <form
          action={handleSaveComment}
          className="m-10 mt-20 bg-yellow-400 bg-opacity-25 rounded-xl"
        >
          <label htmlFor="name">name</label>
          <input id="name" type="text" name="name" required />
          <label htmlFor="comment">comment</label>
          <textarea
            className="post-comment"
            id="comment"
            type="text"
            name="comment"
            required
          />
          <button
            className="bg-amber-600 p-2 m-4 rounded-2xl text-red-700"
            type="submit"
          >
            save comment
          </button>
        </form>
      </div>
    </div>
  );
}
