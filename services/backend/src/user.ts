export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return [...this.users];
  }

  updateUser(id: string, updates: Partial<User>): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    this.users[index] = { ...this.users[index], ...updates };
    return true;
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }

  getUsersByAgeRange(minAge: number, maxAge: number): User[] {
    return this.users.filter(user => user.age >= minAge && user.age <= maxAge);
  }
}
