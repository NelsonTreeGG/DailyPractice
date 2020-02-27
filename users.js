//Manage the user, add people or delete people
const users = [];
// The goal is, when someone join the Room with JavaScript Mastery, we would like the name to be formed as 
// javascriptmastery, which means, we uniformed the data type
const addUser = ({ id, name, room }) => {
    // we would like to trim the input all into the lowercase and withoud space, so they could treated as one string
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        return{error: 'Username is taken in this room'}
        }

    const user = {id, name, room};

    users.push = (user);
    
    return { user }
    

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }

}

const getUser = (id) => users.find((user) => user.id == id); 

const getUsersInRoom = (room) => users.filter((user) => user.room = room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom};