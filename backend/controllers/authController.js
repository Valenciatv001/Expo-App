const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    res.json({ user: newUser.toObject() });
  } catch (error) {
    console.error("Error during user registration", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  //   res.json({ message: "User registration successful" });
  // } catch (error) {
  //   console.error("Error during user registration", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        UserInfo: {
          email: user.email,
          _id: user._id,
          username: user.username,
        },
      },
      "eyJ1c2VyX2lkIjoxMjM0NSwidXNlcm5hbWUiOiJleGFtcGxlX3VzZXIiLCJleHAiOjE2NDY3MDcyMDB9",
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error during user login", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
