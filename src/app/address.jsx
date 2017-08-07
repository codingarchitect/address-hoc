import { branch, renderComponent } from 'recompose';
import MultiLineAddress from './multi-line-address.presentational.jsx';
import SingleLineAddress from './single-line-address.presentational.jsx';

export default branch(
  ({mode}) => mode === 'singleLine',
  renderComponent(SingleLineAddress)  
)(MultiLineAddress);