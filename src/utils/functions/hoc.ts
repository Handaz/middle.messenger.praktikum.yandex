// import Block from '../../modules/block';
// import store, { StoreEvents } from '../../store';

// TODO: RETURN AND MAKE TYPES
export default function connect(mapStateToProps: (state: any) => any) {
  console.log(mapStateToProps);
  //   return function (Component: typeof Block) {
  //     return class extends Component {
  //       constructor(...args: any) {
  //         super(...args);
  //         store.on(StoreEvents.Updated, () => {
  //           const newProps = Object.keys(this.props).reduce(
  //             (acc, key) => (acc[key] = store.getState()[key]),
  //             {},
  //           );
  //           if (this.componentDidUpdate(this.props, newProps)) {
  //             this.setProps({ ...mapStateToProps(store.getState()) });
  //           }
  //         });
  //       }
  //     };
  //   };
}
