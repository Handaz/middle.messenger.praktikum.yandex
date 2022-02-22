import Block from '../../modules/block';
import isEqual from './isEqual';
import store, { StoreEvents } from '../../store';
import { Indexed } from '../../types';

export default function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor({ template, propsAndChildren }: Indexed) {
        super(template, {
          ...propsAndChildren,
          ...mapStateToProps(store.getState()),
        });

        store.on(StoreEvents.Updated, () => {
          if (!isEqual(this.props, mapStateToProps(store.getState()))) {
            this.setProps({ ...mapStateToProps(store.getState()) });
          }
        });
      }
    };
  };
}
