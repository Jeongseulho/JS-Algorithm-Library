const bfs = require('./bfs');

describe('bfs', () => {
  test('should return the correct order of nodes visited', () => {
    const adjList = {
      A: ['B', 'C'],
      B: ['A', 'D', 'E'],
      C: ['A', 'F'],
      D: ['B'],
      E: ['B', 'F'],
      F: ['C', 'E'],
    };
    expect(bfs(adjList, 'A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});