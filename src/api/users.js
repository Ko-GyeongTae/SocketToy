const users = [];

const addUser = ({ id, name, room }) => {
    // Hello Word => helloworld
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(
        (user) => user.room === room && user.name === name 
    );

    if(existingUser){
        return { error: "Username is taken"};
    };

    const user = { id, name, room };

    users.push(user);
    console.log(users, "users");
    return { user };
};