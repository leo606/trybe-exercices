const emailRegex = /\S+@\S+\.\S+/;

function checkFields(req, res, next) {
  const user = ({ firstName, lastName, email, password } = req.body);

  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    next({
      status: 400,
      message:
        "fields must be on format: 'firstName', 'lastName', 'email', 'password'",
    });
  }
  next();
}

function checkFirstname(req, res, next) {
  const { firstName } = req.body;

  if (typeof firstName !== "string") {
    next({ status: 400, message: "firstName must be string" });
  }

  if (firstName.length < 3) {
    next({ status: 400, message: "firstName must be 3 characters or more" });
  }

  next();
}

function checkLastname(req, res, next) {
  const { lastName } = req.body;

  if (typeof lastName !== "string") {
    next({ status: 400, message: "lastName must be string" });
  }

  if (lastName.length < 3) {
    next({ status: 400, message: "lastName must be 3 characters or more" });
  }

  next();
}

function checkEmail(req, res, next) {
  const { email } = req.body;

  if (typeof email !== "string") {
    next({ status: 400, message: "email must be string" });
  }

  if (!emailRegex.test(email)) {
    next({ status: 400, message: "email invalid" });
  }

  next();
}

function checkPassword(req, res, next) {
  const { password } = req.body;

  if (typeof password !== "string") {
    next({ status: 400, message: "password must be string" });
  }

  if (password.length < 6) {
    next({ status: 400, message: "password must be 6 characters or more" });
  }

  next();
}

module.exports = {
  checkFields,
  checkPassword,
  checkFirstname,
  checkLastname,
  checkEmail,
};
