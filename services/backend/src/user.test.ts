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

  // Note: updateUser, deleteUser, and getUsersByAgeRange are NOT tested - intentionally for coverage demo
});
