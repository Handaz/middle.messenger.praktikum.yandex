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
          const newProps = mapStateToProps(Store.getState());
          const updatedProps = Object.keys(newProps).reduce<Partial<P>>(
            (acc, k) => {
              const key = k as keyof typeof props;
              acc[key] = props[key];
              return acc;
            },
            {},
          );
          if (!isEqual(updatedProps, newProps)) {
            this.setProps({ ...newProps });
          }
        });
      }
    };
  };
}
