/* A null component or null function is similar to a no operation function. 
it allows us to conditionally render content based on if the value of a prop is equal to a 
null component/function or something else. This is because functions/objects are passed by 
reference vs by value, so we can compare address to address, which is unique*/

export const NullComponent = () => <></>;
export const NullFunction = () => {};
