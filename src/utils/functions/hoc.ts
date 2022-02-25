import Block from '../../modules/block';
import isEqual from './isEqual';
import Store, { StoreEvents } from '../../store';
import { Indexed } from '../../types';

export default function connect<P>(
  mapStateToProps: (state: Indexed) => Partial<P>,
) {
  return function (Component: new (args: P) => Block<P>) {
    return class extends Component {
      constructor(props: P) {
        super({
          ...props,
          ...mapStateToProps(Store.getState()),
        });

        Store.on(StoreEvents.Updated, () => {
          if (!isEqual(props, mapStateToProps(Store.getState()))) {
            this.setProps({ ...mapStateToProps(Store.getState()) });
          }
        });
      }
    };
  };
}
