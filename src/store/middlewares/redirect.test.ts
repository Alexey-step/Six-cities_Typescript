import {redirect} from "./redirect";
import {redirectToRoute} from "../action-creators";

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathName: ``},
  push(path) {
    this.location.pathName = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Custom middlewares work correctly`, () => {
  it(`Action passes to next middlewares`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(`/`);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });
  it(`Redirect route should be added to fakeHistory`, () => {
    const {invoke} = mockRedux();
    invoke(redirectToRoute(`/login`));
    expect(fakeHistory.location.pathName).toBe(`/login`);
  });
  it(`Non redirect with bad action`, () => {
    const url = `/test-url`;
    const {invoke} = mockRedux();
    invoke({type: `TEST_ACTION`, payload: url});
    expect(fakeHistory.location.pathName).not.toBe(url);
  });
});

