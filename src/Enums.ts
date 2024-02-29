//#Enums In TypeScript
//?Enums are commanly used when we want to represent a se tof related values and cooose one from multiple options. Enums provide convient way to define a set of name values and associate them with sepecific meanings.

//? In TypeScript, we can create enums using the enum keyword.
//? when enum constants are not explicitly assigned values, they are  automatically assigned incremental numeirc values starting from 0.
//? Default value for the first enum constant is 0;

enum Roles {
	user = "user",
	admin = "admin",
}

type LoginDetails = {
	username: string;
	password: string;
	role: Roles;
};

const user1: LoginDetails = {
	username: "bishal",
	password: "bishal123",
	role: Roles.admin,
};
const user2: LoginDetails = {
	username: "bishal",
	password: "bishal123",
	role: Roles.user,
};

const userType = (user: LoginDetails) => {
	if (user.role === Roles.admin) {
		console.log(`${user.username}, Yor are an admin`);
	} else if (user.role === Roles.user) {
		console.log(`${user.username}, You are a user`);
	}
};

userType(user1);
