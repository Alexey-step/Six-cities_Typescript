import * as React from "react";
import {useSelector, useDispatch} from "react-redux";
import Error from "../../components/error/error";
import {ERROR_TIMEOUT} from "../../const";
import * as ActionCreator from "../../store/action-creators";
import {RootState} from "../../store/reducer";

const withError = (Component: React.FC) => {
  const WithError: React.FC = (props) => {
    const dispatch = useDispatch();
    const {isError} = useSelector((state: RootState) => state.MAIN);

    React.useEffect(() => {
      if (isError) {
        setTimeout(() => dispatch(ActionCreator.setIsError(false)), ERROR_TIMEOUT);
      }
    }, [isError]);

    return (
      <>
        {
          isError && <Error/>
        }
        <Component {...props}/>
      </>
    );
  };

  return WithError;
};

export default withError;
