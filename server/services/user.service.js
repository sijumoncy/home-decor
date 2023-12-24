const User = require("../../models/User.Model");

async function updateUser(id, userBody) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: userBody },
      { new: true }
    );
    return updatedUser;
  } catch (err) {
    throw new Error(err);
  }
}

async function deleteUser(id) {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (err) {
    throw new Error(err);
  }
}

async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error(err);
  }
}

async function getUsers(limit, pageNum) {
  try {
    const users = await User.find()
      .limit(limit || 100)
      .skip(pageNum)
      .select("-password")
      .exec();
    return users;
  } catch (err) {
    throw new Error(err);
  }
}

async function getUserStatus() {
  try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserStatus
};
