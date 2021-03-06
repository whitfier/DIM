import { loadingEnd, loadingStart } from 'app/shell/actions';
import { ThunkDispatchProp } from 'app/store/types';
import { useEffect } from 'react';
import { connect } from 'react-redux';

interface ProvidedProps {
  message: string;
}

type Props = ProvidedProps & ThunkDispatchProp;

/**
 * This component can be used to show a page-level loading screen with an optional message.
 */
function ShowPageLoading({ dispatch, message }: Props) {
  useEffect(() => {
    dispatch(loadingStart(message));
    return () => {
      dispatch(loadingEnd(message));
    };
  }, [dispatch, message]);

  return null;
}

export default connect()(ShowPageLoading);
