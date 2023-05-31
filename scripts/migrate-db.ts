import fs from "fs";

import knex from "knex";
const pg = knex({
  client: "pg",
  connection: "postgresql://postgres:gDSUGW8luv@localhost:5433/fy-jobs",
  searchPath: ["knex", "public"],
});

pg.select("*")
  .from("authors")
  .then((authors) => {
    console.log(authors);
    fs.writeFileSync("authors.json", JSON.stringify(authors));
  });

pg.select("*")
  .from("blog_posts")
  .then((posts) => {
    console.log(posts);
    fs.writeFileSync("posts2.json", JSON.stringify(posts));
  });
