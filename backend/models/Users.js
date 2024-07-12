import path from 'path';
import fs from 'fs';
import { v4 as uuidV4 } from 'uuid';
import bcrypt from 'bcrypt'

class Users {
  static async create(data) {
    const file = path.join(__dirname, '../data', data.mail + '.json');

		const saltRounds = 10;
    const hashedPassword =await bcrypt.hash(data.password, saltRounds);

    fs.writeFileSync(file, JSON.stringify({
      id: uuidV4(),
      ...data,
      password: hashedPassword
    }));
  }
}

export default Users;
