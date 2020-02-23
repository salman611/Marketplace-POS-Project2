import React from 'react';
export default class Prices extends React.Component {

render() {
    const all = this.props.todoItems.map(function(task, index) {
      return <ListItem taskName={task} key={index} />;
    });

}
}