const Member = require('../models/Member');

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createMember = async (req, res) => {
  const { name, role, imageUrl, socials } = req.body;

  try {
    const newMember = new Member({
      name,
      role,
      imageUrl,
      socials
    });

    const member = await newMember.save();
    res.json(member);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateMember = async (req, res) => {
  const { name, role, imageUrl, socials } = req.body;

  try {
    let member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ msg: 'Member not found' });
    }

    member.name = name;
    member.role = role;
    member.imageUrl = imageUrl;
    member.socials = socials;

    member = await member.save();
    res.json(member);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteMember = async (req, res) => {
  try {
    let member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ msg: 'Member not found' });
    }

    await member.remove();
    res.json({ msg: 'Member removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
