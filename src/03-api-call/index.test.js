const fetchLukeSkywalker = require('./index.js');

describe('fetchLukeSkywalker', () => {
  it('returns correct information about Luke Skywalker', async () => {
    const actualResult = await fetchLukeSkywalker();

    expect(actualResult).toMatchSnapshot();
  });
});
