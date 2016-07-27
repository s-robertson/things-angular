import { Game } from './game';

describe('Game model: testing', () => {
  const game = new Game(5, '1234');

  it('should have an id', () => {
    expect(game.id).toEqual(5);
  });

  it('should have a code', () => {
    expect(game.code).toEqual('1234');
  });

});
