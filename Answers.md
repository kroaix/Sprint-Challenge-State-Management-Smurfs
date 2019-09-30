1. What problem does the context API help solve?

    Context API allows all components to have access to state so we can pass props around wherever they are needed. It rids us of the need for prop-drilling, which saves us a lot of time and makes things much less confusing.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are packets of information containing action types and data associated with that action type. They are dispatched to our reducer which looks at the action type and data associated with it, and is then able to update the state accordingly.

    Reducers are the only way we can update the state. They get the payload from the actions along with the action type and are able to update the state. Reducers are pure functions so they never have any side effects.

    Store is a single JavaScript object that holds the state for our application. We clone the store object and make changes to the state via the reducer that way, we never change the store. This is why it is the single source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The difference between application state and component state is that application state is global, whereas component state is local. If only one component needs access to state, or maybe it's child, then component state would make more sense. Application state is best used when multiple components need access to the same state data.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    By default redux runs synchronously, so we would need to wait for the API call came back before we could do anything. When we utilize redux-thunk, we can make redux run asynchronously.
    
5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like Redux the most, even though I am still a little iffy on some aspects of it. I plan to learn a lot more in my free time. I do understand though that there are specific use cases for each state management system, and that redux is typically used for large-scale applications. 
