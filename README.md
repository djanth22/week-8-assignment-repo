<!-- reflection -->

# repo link

https://github.com/djanth22/week-8-assignment-repo

# deployment link

https://week-8-assignment-jet.vercel.app/

# planning

![wireframe](/public/planning.png)

# schema

![schema](/public/schema.png)

## Required

- 🎯 What requirements did you achieve?
- 🎯 Were there any requirements or goals that you were unable to achieve?
- 🎯 If so, what was it that you found difficult about these tasks?

# Optional

- 🏹 Feel free to add any other reflections you would like to share about your submission, for example:

- Requesting feedback about a specific part of your submission.
- What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
- What errors or bugs did you encounter while completing your assignment? How did you solve them?
- What went really well and what could have gone better?

## my reflection

What requirements did I achieve?
below are the assignment requirements

# Requirements

- 🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
- 🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
  Please submit your database schema, as is mentioned in the submission instructions.
- 🎯 Create a delete button on posts that allows users to delete the post from the database.
- 🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
- 🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
- 🎯 Add a redirect when a user creates a post to redirect them to the posts page.

- I have managed to display all posts on my page and have implemented links to sort them into ascending and descending order
- my SQL schema shows the posts and comments tables connected with a foreign key
- my posts and my comments have a button for deleting them from the database
- I have a form that saves comments to a dedicated comments table
- users can comment on individual posts in thei dynamic routes
- upon submitting the posts form it redirects from the new post page to the posts page

# other stuff

similarly to the last assignment I had a few issues wrapping my head around certain concepts, in this case the delete button for comments and posts. I knew I needed to nest a client component inside of a server component but getting it to work took me a lot of time. Rendering the button was the easy part, but making sure the logic was implemented in a way that achieved the delete query for the individual post was frustrating. but after my usual panic, google searches and faffing with it for a while (longer than I'd like to admit) finally i managed to get something that gave me the results I wanted.

I'd also enjoy playing with this more after potentially looking into user authentication so that the user writing the post/comment is the only one who can delete their content.
