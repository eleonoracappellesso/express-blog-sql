const connection = require("../connection.js");

function index(req, res) {
    const sql = 'SELECT * FROM `posts`'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        console.log(results);
        let data = results;
        const response = {
            totalCount: results.length,
            data,
        };
        res.json(response);

    });
}

function show(req, res) {
    console.log(req.params);
    const postId = parseInt(req.params.id);
    const item = allPosts.posts.find((item) => item.id === postId);
    if (item) {
        res.json({
            success: true,
            item,
        });
    } else {
        res.status(404);
        res.json({
            success: false,
            message: `Il post con l'id ${postId} è inesistente`,
        });
    }
}

function store(req, res) {
    // creo l'id per il nuovo post
    let newId = 0;
    for (let i = 0; i < allPosts.posts.length; i++) {
        if (allPosts.posts[i].id > newId) {
            newId = allPosts.posts[i].id;
        }
    }
    newId += 1;
    // creo il nuovo post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        img: req.body.img,
        tags: req.body.tags, // ['a', 'b', ...]
        published: req.body.published
    };
    // aggiungo il nuovo post al mio array di post
    allPosts.posts.push(newPost);
    console.log(newPost)
    res.status(201).json(newPost);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const item = allPosts.find((item) => item.id === id);
    if (!item) {
        res.status(404).json({ success: false, message: "Il post è inesistente" });
        return;
    }

    console.log(req.body);
    item.title = req.body.title;
    item.content = req.body.content;
    item.image = req.body.image;
    item.tags = req.body.tags;
    // for (key in item) {
    //     if (key !== "id") {
    //         item[key] = req.body[key];
    //     }
    // }

    console.log(allPosts);
    res.json(item);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = allPosts.posts.findIndex((item) => item.id === id);
    if (index !== -1) {
        allPosts.posts.splice(index, 1);
        console.log(allPosts);
        res.sendStatus(204);
    } else {
        res.status(404);
        res.json({
            error: "404",
            message: "Post non trovato",
        });
    }
}

module.exports = { index, show, store, update, destroy };