const encode = require('./encode');

test('accepts a string and returns an encoded one', () => {
    expect(encode('XXXYYYYZZQXX')).toBe('X3Y4Z2Q1X2');
    expect(encode('aaabbbeefftt')).toBe('a3b3e2f2t2');
    expect(encode('gdeq')).toBe('g1d1e1q1');
    expect(encode('ab')).toBe('a1b1');
  });
  
  