import React from "react";
import { render } from "@testing-library/react";
import RenderTodos from "./RenderTodos";
import mockTodos from "./mockTodos";

it("should renders an array of todo objects", () => {
  const mockUpdateTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  const RenderedTodos = render(
    <RenderTodos
      todos={mockTodos}
      updateTodo={mockUpdateTodo}
      deleteTodo={mockDeleteTodo}
    />
  );
  expect(RenderedTodos).toMatchInlineSnapshot(`
    Object {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <ul>
            <li>
              <div
                class="sc-bdnylx jWZazz"
                data-testid="wash-up-wrapper"
              >
                <span
                  class="sc-gtssRu gcKWKF"
                  data-testid="itemName"
                >
                  wash up
                </span>
                <span
                  class="sc-dlnjPT hYUIiT"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-gKAblj hjCiza"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
            <li>
              <div
                class="sc-bdnylx jWZazz"
                data-testid="eat-some-cheese-wrapper"
              >
                <span
                  class="sc-gtssRu gcKWKF"
                  data-testid="itemName"
                >
                  eat some cheese
                </span>
                <span
                  class="sc-dlnjPT hYUIiT"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-gKAblj hjCiza"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
            <li>
              <div
                class="sc-bdnylx jWZazz"
                data-testid="take-a-nap-wrapper"
              >
                <span
                  class="sc-gtssRu gcKWKF"
                  data-testid="itemName"
                >
                  take a nap
                </span>
                <span
                  class="sc-dlnjPT hYUIiT"
                >
                  <span>
                    edit
                  </span>
                </span>
                <span
                  class="sc-gKAblj hjCiza"
                  data-testid="itemRemove"
                >
                  delete
                </span>
              </div>
            </li>
          </ul>
        </div>
      </body>,
      "container": <div>
        <ul>
          <li>
            <div
              class="sc-bdnylx jWZazz"
              data-testid="wash-up-wrapper"
            >
              <span
                class="sc-gtssRu gcKWKF"
                data-testid="itemName"
              >
                wash up
              </span>
              <span
                class="sc-dlnjPT hYUIiT"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-gKAblj hjCiza"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
          <li>
            <div
              class="sc-bdnylx jWZazz"
              data-testid="eat-some-cheese-wrapper"
            >
              <span
                class="sc-gtssRu gcKWKF"
                data-testid="itemName"
              >
                eat some cheese
              </span>
              <span
                class="sc-dlnjPT hYUIiT"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-gKAblj hjCiza"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
          <li>
            <div
              class="sc-bdnylx jWZazz"
              data-testid="take-a-nap-wrapper"
            >
              <span
                class="sc-gtssRu gcKWKF"
                data-testid="itemName"
              >
                take a nap
              </span>
              <span
                class="sc-dlnjPT hYUIiT"
              >
                <span>
                  edit
                </span>
              </span>
              <span
                class="sc-gKAblj hjCiza"
                data-testid="itemRemove"
              >
                delete
              </span>
            </div>
          </li>
        </ul>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `);
});
