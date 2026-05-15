import jwt from "jsonwebtoken";

export const verifyToken = (role) => {

  return (req, res, next) => {

    try {

      // get token from cookies
      const token = req.cookies.token;

      if (!token) {
        return res.status(401).json({
          message: "Unauthorized. Token missing."
        });
      }

      // verify token
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY
      );

      // attach user to request
      req.user = decoded;

      // IMPORTANT FIX
      // only check role IF role is provided
      if (role && decoded.role !== role) {

        return res.status(403).json({
          message: "Forbidden. You dont have access."
        });

      }

      next();

    } catch (err) {

      return res.status(401).json({
        message: "Invalid or expired token."
      });

    }
  };
};