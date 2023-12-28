import Component from '@glimmer/component';
import { macroCondition } from '@embroider/macros';

export default class JsSample extends Component {
  doesIt = macroCondition(true) ? 'It does!' : 'It so does not!';
}
