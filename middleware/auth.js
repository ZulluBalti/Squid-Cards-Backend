const auth = async (req, res, next) => {
  const token = req.get("z-auth-token");
  if (!token) return res.status(403).json({ msg: "Token is required" });

  next();
};
