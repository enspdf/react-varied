import React from "react";
import { List, IconButton, Icon, FlexboxGrid, Alert } from "rsuite";

const Todos = ({ delTodo, todos }) => {
  const del = (todo) => {
    delTodo(todo);
    Alert.info(`Deleted ${todo.text}`);
  };

  return (
    <section>
      <List>
        {todos.map((todo) => (
          <List.Item key={todo.id}>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={12}>
                <h3>{todo.text}</h3>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={2}>
                <IconButton
                  icon={<Icon name="minus" />}
                  color="red"
                  circle
                  onClick={() => del(todo)}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        ))}
      </List>
    </section>
  );
};

export default Todos;
