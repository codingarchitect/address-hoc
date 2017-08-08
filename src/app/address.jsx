import { branch, renderComponent } from 'recompose';
import MultiLineAddress from './multi-line-address.jsx';
import SingleLineAddress from './single-line-address.jsx';

export default branch(
  ({mode}) => mode === 'singleLine',
  renderComponent(SingleLineAddress)  
)(MultiLineAddress);