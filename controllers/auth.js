const users = [{login: 'admin', password: 'admin'}];

export const signup = async (req, res, next) => {
  const user = req.body;

    let result = false;

    for(let i = 0; i < users.length; i++) {
        if(user.login === users[i].login) {
            result = false;
            break;
        } else {
            result = true;
        }
    }

    if(result) {
        users.push(user);
    }

    res.json(users);

};

export const signin = async (req, res, next) => {
    const user = req.body;

    let result;

    for(let i = 0; i < users.length; i++) {
        if(user.login === users[i].login && user.password === users[i].password) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    if(result) {
        res.json(user);
    } else {
        res.json('not found');
    }

};