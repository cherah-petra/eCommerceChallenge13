const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await tag.findAll({
      include: [{ model: tagName }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagDataById = await tag.findByPk(req.params.id, {
      include: [{ model: tagData }],
    });
    if (!tagDataById) {
      res.status(404).json({ message: "No tag with this ID was found!" });
      return;
    }
    res.status(200).json(tagDataById);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const tagCreated = await tag.create(req.body);
    res.status(200).json(tagCreated);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await tag.update(
      {
        tagName: req.body.tagName,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateTag) {
      res.status(404).json({ message: "No category with this ID was found!" });
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {

  // delete a tag by its `id` value
  try {
    const deleteTag = await tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteTag) {
      res.status(404).json({ message: "No tag with this ID was found!" });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
