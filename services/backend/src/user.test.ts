import { UserService, User } from './user';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  const mockUser: User = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  };

  describe('addUser', () => {
    it('should add a user', () => {
      userService.addUser(mockUser);
      expect(userService.getAllUsers()).toHaveLength(1);
    });
  });

  describe('getUserById', () => {
    it('should return user by id', () => {
      userService.addUser(mockUser);
      expect(userService.getUserById('1')).toEqual(mockUser);
    });

    it('should return undefined for non-existent user', () => {
      expect(userService.getUserById('999')).toBeUndefined();
    });
  });

  describe('getAllUsers', () => {
    it('should return all users', () => {
      userService.addUser(mockUser);
      expect(userService.getAllUsers()).toHaveLength(1);
    });
  });

  describe('updateUser', () => {
    it('should update existing user', () => {
      userService.addUser(mockUser);
      const result = userService.updateUser('1', { name: 'Jane Doe' });
      expect(result).toBe(true);
      expect(userService.getUserById('1')?.name).toBe('Jane Doe');
    });

    it('should return false for non-existent user', () => {
      const result = userService.updateUser('999', { name: 'Test' });
      expect(result).toBe(false);
    });
  });

  describe('deleteUser', () => {
    it('should delete existing user', () => {
      userService.addUser(mockUser);
      const result = userService.deleteUser('1');
      expect(result).toBe(true);
      expect(userService.getAllUsers()).toHaveLength(0);
    });

    it('should return false for non-existent user', () => {
      const result = userService.deleteUser('999');
      expect(result).toBe(false);
    });
  });

  describe('getUsersByAgeRange', () => {
    it('should return users within age range', () => {
      userService.addUser(mockUser);
      userService.addUser({ id: '2', name: 'Alice', email: 'alice@example.com', age: 25 });
      userService.addUser({ id: '3', name: 'Bob', email: 'bob@example.com', age: 40 });

      const users = userService.getUsersByAgeRange(25, 35);
      expect(users).toHaveLength(2);
    });

    it('should return empty array when no users in range', () => {
      userService.addUser(mockUser);
      const users = userService.getUsersByAgeRange(50, 60);
      expect(users).toHaveLength(0);
    });
  });
});
