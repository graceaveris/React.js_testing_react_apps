// this file needs to be present to use enzyme.
// it configs enyme to run with react.
// we use enzyme to test react components.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });