const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

exports.authMiddleware = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).send("Please Login!");

        const decodedObj = jwt.verify(token, process.env.JWT_SECRET);
        const { _id, role } = decodedObj;

        let user;
        if (role === "Admin") {
            user = await Admin.findById(_id);
        } else {
            user = await User.findById(_id);
        }

        if (!user) throw new Error("User not found");

        req.user = user;
        next();
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
};



exports.adminAuth = async (req, res, next) => {
    if (req.user.role !== "Admin") {
        return res.status(403).json({ error: "Access Denied: Admins Only" });
    }
    next();
};















// const authMiddleware = (req, res, next) => {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res.status(401).json({ msg: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; 
//     next(); 
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token." });
//   }
// };

// const adminAuth = (req, res, next) => {
//   if (!req.user || req.user.role !== "Admin") {
//     return res.status(403).json({ msg: "Access denied. Admins only." });
//   }
//   next();
// };

// module.exports = { authMiddleware, adminAuth };




















// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res.status(401).json({ msg: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;

//     if (req.user.role !== "Admin") {
//       return res.status(403).json({ msg: "Access denied. Admins only." });
//     }

//     next(); // ✅ Allow access
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token." });
//   }
// };

// module.exports = function (req, res, next) {
//     const token = req.header("x-auth-token");
  
//     if (!token) {
//       return res.status(401).json({ msg: "Access denied. No token provided." });
//     }
  
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded;
  
//       if (req.user.role !== "Admin") {
//         return res.status(403).json({ msg: "Access denied. Admins only." });
//       }
  
//       next(); // ✅ Allow access
//     } catch (err) {
//       res.status(401).json({ msg: "Invalid token." });
//     }
//   };







// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res.status(401).json({ msg: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;

//     next(); // ✅ Allow access
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token." });
//   }
// };

// // Middleware for Admin Access Only
// module.exports.adminAuth = function (req, res, next) {
//   if (req.user.role !== "Admin") {
//     return res.status(403).json({ msg: "Access denied. Admins only." });
//   }
//   next();
// };



// const jwt = require("jsonwebtoken");

// // General authentication (Users & Admins)
// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res.status(401).json({ msg: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Stores user data in `req.user`
//     next(); // ✅ Allow access
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token." });
//   }
// };




// const jwt = require("jsonwebtoken");

// // General authentication (Users & Admins)
// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res.status(401).json({ msg: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next(); // ✅ Allow access
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token." });
//   }
// };

// // Middleware for Admin Access Only
// module.exports.adminAuth = function (req, res, next) {
//   if (req.user.role !== "Admin") {
//     return res.status(403).json({ msg: "Access denied. Admins only." });
//   }
//   next();
// };



