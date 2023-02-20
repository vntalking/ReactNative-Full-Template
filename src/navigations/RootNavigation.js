import { createNavigationContainerRef } from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function reset(name, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name,
        params,
      },
    ],
  });
}

export function replace(name, params) {
  navigationRef.current?.dispatch({
    ...StackActions.replace(name, params),
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}
