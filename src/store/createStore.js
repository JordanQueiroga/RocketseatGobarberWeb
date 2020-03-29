import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middleeares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middleeares))
      : applyMiddleware(...middleeares);

  return createStore(reducers, enhancer);
};
