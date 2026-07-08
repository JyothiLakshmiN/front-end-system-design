import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

let problems = [
  {
    id: 0,
    title: "Polyfill of Array.map",
    description: "Some description",
  },
  {
    id: 1,
    title: "Polyfill of Promise.all()",
    description: "Some description",
  },
];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/app/problems", (req, res) => {
  res.json(problems);
});

app.post("/app/problems", (req, res) => {
    const body = req.body;
    problems = [...problems, body];
    res.json(problems);
});

app.delete("/api/problems/:id", (req, res) => {
  const id = req.params.id;
  problems = problems.filter((p) => p.id != id);
  res.json(problems);
});

app.put("/app/problems/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    problems = problems.map((problem) => {
        if (problem.id === parseInt(id)) {
            return body;
        }
        return problem;
    });
    res.json(problems);
})

app.patch("/app/problems/:id", (req, res) => {
    const body = req.body;
    const id  = req.params.id;
    problems = problems.map((problem) => {
        if (problem.id === parseInt(id)) {
            return { ...problem, ...body };
        }
        return problem;
    });
    res.json(problems);
})