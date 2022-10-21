import { JSDOM } from 'jsdom';
import 'mocha';
import { expect } from 'chai';

const { window } = new JSDOM(`
<!DOCTYPE html>
<body>
  <script src="../dist/projectLibs.js"></script>
</body>
`);

describe('cookie方法', () => {
  it('set', () => {
    // console.log(window);
    
  });
});

