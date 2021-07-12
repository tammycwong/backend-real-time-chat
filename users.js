//helper functions for users
const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);
    //go through users array and find specific user
    //if user is trying to sign in with same user name and room, it is forbidden
    if(existingUser) {
        return {error: 'Username is taken'}
    }
    const user = {id, name, room};
    users.push(user);
    //add new user to array of user
    return {user}
    // so we know which user was added 
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = () => {

}

const getUsersInRoom = () => {

}