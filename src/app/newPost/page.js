import { db } from "@/utils/dbConnectionString";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title: "VIP new posts page",
  description: "a page for our VIP guests to add new posts",
};

export default function NewPost() {
  async function handleSave(formData) {
    "use server";
    const name = formData.get("name");
    const post = formData.get("post");

    await db.query(`INSERT INTO mainposts (name, post) VALUES ($1, $2)`, [
      name,
      post,
    ]);

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <>
      <h2 className="flex justify-center items-center m-5">New posts</h2>
      <p className="flex justify-center items-center m-5">
        Let us know whats on your mind, provide feedback or just test things out
      </p>
      <form id="new-post" action={handleSave}>
        <label htmlFor="name">name</label>
        <input id="name" type="text" name="name" required />
        <label htmlFor="post">post</label>
        <textarea
          className="post-comment"
          id="post"
          type="text"
          name="post"
          required
        />
        <button
          className="bg-amber-600 p-2 m-4 rounded-2xl text-red-700"
          type="submit"
        >
          save post
        </button>
      </form>
    </>
  );
}
