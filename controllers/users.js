let users = [
  {id: 1, name: "Lucas Inocencio", email: "lucas@gmail.com"},
  {id: 2, name: "Marcel Melo", email: "marcel@gmail.com"},
  {id: 3, name: "Lais Felix", email: "lais@gmail.com"},
  {id: 4, name: "Euler Gotardo", email: "euler@gmail.com"},
  {id: 5, name: "Marcio Lucas", email: "marcio@gmail.com"}
]

let maxId = 5;

module.exports = {
  getUsers: (req, res, next) => {
    res.status(200).json(users);
  },
  getUserById: (req, res, next) => {
    let userId = req.params.id;
    let userFilter = users.filter(user => user.id == userId);
    if (userFilter.length == 0) {
      res.status(404).json({message: "Usuário não encontrado!"});
    } else {
      res.status(200).json({userFilter});
    }
  },
  addUser: (req, res, next) => {
    let newUser = req.body;
    users.push(newUser);
    newUser.id = maxId++;
    res.status(201).json({message: "Usuário criado com sucesso", users: users});
  },
  editUser: (req, res, next) => {
    let userId = req.params.id;
    let userUpdate = req.body;
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.id == userId) {
        user.name = userUpdate.name;
        user.email = userUpdate.email;
        res.status(200).json({message: "Usuário atualizado com sucesso!", users: users});
      }
    }
    res.status(404).json({message: "Usuário não encontrado!"});
  },
  deleteUser: (req, res, next) => {
    let userId = req.params.id;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
        users.splice(i, 1);
        res.status(200).json({message: "Usuário deletado com sucesso!", users: users});
      }
    }
    res.status(400).json({message: "Usuário não encontrado!"});
  }
}

