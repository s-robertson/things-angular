import { User } from './user';

describe('User model: testing', () => {
  const user = new User(1, 'test@test.com', 'test');

  it('should have an id', () => {
    expect(user.id).toEqual(1);
  });

  it('should have an email', () => {
    expect(user.email).toEqual('test@test.com');
  });

  it('should have a name', () => {
    expect(user.name).toEqual('test');
  });
});
