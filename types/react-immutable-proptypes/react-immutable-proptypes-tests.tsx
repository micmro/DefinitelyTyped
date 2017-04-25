import * as React from "react";
import * as ImmutablePropTypes from "react-immutable-proptypes";

var MyReactComponent = React.createClass({
    propTypes: {
        myRequiredImmutableList: ImmutablePropTypes.listOf(
            ImmutablePropTypes.contains({
                someNumberProp: React.PropTypes.number.isRequired
            })
        ).isRequired
    },
    render() {
        return (<div></div>);
    }
});

const propTypes = {
    // oldListTypeChecker: React.PropTypes.instanceOf(Immutable.List),
    anotherWay: ImmutablePropTypes.list,
    requiredList: ImmutablePropTypes.list.isRequired,
    mapsToo: ImmutablePropTypes.map,
    evenIterable: ImmutablePropTypes.iterable
}

ImmutablePropTypes.list         // Immutable.List.isList 
ImmutablePropTypes.map          // Immutable.Map.isMap 
ImmutablePropTypes.orderedMap   // Immutable.OrderedMap.isOrderedMap 
ImmutablePropTypes.set          // Immutable.Set.isSet 
ImmutablePropTypes.orderedSet   // Immutable.OrderedSet.isOrderedSet 
ImmutablePropTypes.stack        // Immutable.Stack.isStack 
ImmutablePropTypes.seq          // Immutable.Seq.isSeq 
ImmutablePropTypes.iterable     // Immutable.Iterable.isIterable 
ImmutablePropTypes.record       // instanceof Record 
ImmutablePropTypes.contains     // Immutable.Iterable.isIterable - contains(shape) 
ImmutablePropTypes.mapContains  // Immutable.Map.isMap - contains(shape) 


// class AppContainerTest extends React.Component<any, any> {
//     static propTypes: {
//         // oldListTypeChecker: React.PropTypes.instanceOf(Immutable.List),
//         anotherWay: React.PropTypes,
//         requiredList: ImmutablePropTypes.list.isRequired,
//         mapsToo: ImmutablePropTypes.map,
//         evenIterable: ImmutablePropTypes
//         // myRequiredImmutableList: ImmutablePropTypes.listOf(
//         //     // ImmutablePropTypes.contains({
//         //     //     someNumberProp: React.PropTypes.number.isRequired
//         //     // })
//         // ).isRequired
//     };

//     public render() {
//         return (<div></div>)
//     }
// }

const someTypes = {
    aMap: ImmutablePropTypes.contains({
        aList: ImmutablePropTypes.contains({
            0: React.PropTypes.number,
            1: React.PropTypes.string,
            2: React.PropTypes.number.isRequired,
        }).isRequired,
    }),

    aRecord: ImmutablePropTypes.recordOf({
        keyA: React.PropTypes.string,
        keyB: ImmutablePropTypes.list.isRequired
    }),

    anotherMap: ImmutablePropTypes.mapContains({
        aList: ImmutablePropTypes.list.isRequired,
    })
    
}


someTypes.aMap
someTypes.aRecord