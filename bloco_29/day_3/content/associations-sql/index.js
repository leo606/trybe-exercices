const express = require("express");
const { Address, Employee, Book, User } = require("./models");
const Sequelize = require("sequelize");
const config = require("./config/config");

const app = express();

app.use(express.json());

const sequelize = new Sequelize(config.development);

app.get("/employees", async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: "addresses" },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
});

app.post("/employees", async (req, res) => {
  const trans = await sequelize.transaction();
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: trans }
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: trans }
    );

    await trans.commit();

    return res.status(201).json({ message: "Cadastrado com sucesso" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

app.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (req.query.includeAddresses === "true") {
      const employeeWithAddress = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: "addresses" }],
      });
      if (!employeeWithAddress) {
        return res.status(404).json({ message: "Funcionário não encontrado" });
      }
      return res.status(200).json(employeeWithAddress);
    }

    const employee = await Employee.findOne({ where: { id } });
    if (!employee) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

app.get("/usersbooks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: "books", through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
